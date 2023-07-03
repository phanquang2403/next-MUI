import path from "path";
import fs from "fs";

import matter from "gray-matter";
import { Post } from "@/models";

const BLOG_FORDER = path.join(process.cwd(), "blog");

export async function getPostList(): Promise<Post[]> {
  const fileNameList = fs.readdirSync(BLOG_FORDER);

  const postList: Post[] = [];
  for (const fileName of fileNameList) {
    const filePath = path.join(BLOG_FORDER, fileName);
    const fileContent = fs.readFileSync(filePath, "utf8");
    const { data, excerpt, content } = matter(fileContent, {
      excerpt_separator: "<!--- truncate--->",
    });
    postList.push({
      id: fileName,
      slug: data?.slug || "slug",
      title: data.title || "title",
      author: {
        name: data.author || "",
        title: data.author_title || "",
        profileUrl: data.author_url || "",
        avatarUrl: data.author_image_url || "",
      },
      tagList: data.tags || "",
      publishedDate: new Date().getTime().toString(),
      description: excerpt || "",
    });
  }
  return postList;
}
