// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import * as fs from "fs";
import matter from "gray-matter";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  if (req.method === "GET") {
    const files = fs.readdirSync(`${process.cwd()}/pages/posts`, {
      withFileTypes: true,
    });
    const posts = files.map((file) => {
      if (!file.name.endsWith(".mdx")) return;

      const fileContent = fs.readFileSync(
        `${process.cwd()}/pages/posts/${file.name}`,
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
    res.status(200).json(posts);
  }
}
