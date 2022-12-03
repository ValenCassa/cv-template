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
    const files = fs.readdirSync(path.resolve("./pages", "projects"), {
      withFileTypes: true,
    });
    const projects = files.map((file) => {
      if (!file.name.endsWith(".mdx")) return;

      const fileContent = fs.readFileSync(
        path.join(process.cwd(), "pages", "projects", file.name),
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
    res.status(200).json(projects);
  }
}
