import { GetStaticProps } from "next";
import { Mainlayout } from "@/components/layouts";
import { getPostList } from "@/utils/post";
import { Post } from "@/models";

export interface BlogListPageProps {
  posts: Post[];
}
export default function PostLayout({ posts }: BlogListPageProps) {
  return (
    <div>
      <div>post</div>

      <ul>
        {posts.map((item: Post, id: number) => (
          <li key={id}>
            <a href={`/posts/${item?.id}`}>{item?.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

// Muốn sử dụng mainlayout cho  page này.
// nếu không có cú pháp này thì nó re-render lại toàn bộ page thuộc layout config đó.
PostLayout.Layout = Mainlayout;

export const getStaticProps: GetStaticProps<BlogListPageProps> = async () => {
  // convert mardown file (.md) into list javascript object
  const postList = await getPostList();
  return {
    props: {
      posts: postList || [],
    },
  };
};
