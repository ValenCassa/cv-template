// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import * as fs from "fs";
import matter from "gray-matter";
import path from "path";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  if (req.method === "GET") {
    const files = fs.readdirSync(path.join(process.cwd(), "pages", "posts"), {
      withFileTypes: true,
    });

    const filteredFiles = files.filter((file) => !file.name.includes("index"));
    const posts = filteredFiles.map((file) => {
      if (!file.name.endsWith(".mdx")) return;

      const fileContent = fs.readFileSync(
        path.join(process.cwd(), "pages", "posts", file.name),
        "utf-8"
      );

      const { data, content } = matter(fileContent);

      const slug = file.name.replace(".mdx", "");

      return {
        slug,
        data,
        content,
      };
    });

    const orderedPosts = posts.sort((a, b) => {
      return (
        new Date(b?.data.date).getTime() - new Date(a?.data.date).getTime()
      );
    });

    if (req.query.limit) {
      const limitedPosts = orderedPosts.slice(0, Number(req.query.limit));
      return res.status(200).json(limitedPosts);
    }

    res.status(200).json(orderedPosts);
  }
}
