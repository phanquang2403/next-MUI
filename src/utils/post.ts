import path from "path";
import fs from "fs";

import matter from "gray-matter";

const BLOG_FORDER = path.join(process.cwd(), "blog");

export async function getPostList() {
  const fileNameList = fs.readdirSync(BLOG_FORDER);

  for (const fileName of fileNameList) {
    const filePath = path.join(BLOG_FORDER, fileName);
    const fileContent = fs.readFileSync(filePath, "utf8");
    const matterResult = matter(fileContent, {
      excerpt_separator: "<!--- truncate--->",
    });
    console.log("fileName = ", fileName, " = ", matterResult);
  }
  return [];
}
