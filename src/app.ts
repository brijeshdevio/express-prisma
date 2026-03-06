import express from "express";
import type { Request, Response } from "express";
import { prisma } from "./db";
import { Prisma } from "./generated/prisma/client";

export const app = express();

const userData: Prisma.UserCreateInput[] = [
  {
    name: "Alice",
    email: "alice@prisma.io",
    posts: {
      create: [
        {
          title: "Join the Prisma Discord",
          content: "https://pris.ly/discord",
          published: true,
        },
      ],
    },
  },
  {
    name: "Nilu",
    email: "nilu@prisma.io",
    posts: {
      create: [
        {
          title: "Follow Prisma on Twitter",
          content: "https://www.twitter.com/prisma",
          published: true,
        },
      ],
    },
  },
  {
    name: "Mahmoud",
    email: "mahmoud@prisma.io",
    posts: {
      create: [
        {
          title: "Ask a question about Prisma on GitHub",
          content: "https://www.github.com/prisma/prisma/discussions",
          published: true,
        },
        {
          title: "Prisma on YouTube",
          content: "https://pris.ly/youtube",
        },
      ],
    },
  },
];

app.get("/create", async (req: Request, res: Response) => {
  for (const u of userData) {
    await prisma.user.create({
      data: u,
    });
  }
  res.send("OK");
});

app.get("/users", async (req: Request, res: Response) => {
  const users = await prisma.user.findMany();
  res.status(200).json(users);
});

app.get("/delete", async (req: Request, res: Response) => {
  await prisma.user.deleteMany();
  res.send("OK");
});

app.get("/health", (req: Request, res: Response) => {
  res.send("OK");
});

app.get("/", (req: Request, res: Response) => {
  res.send("OK");
});
