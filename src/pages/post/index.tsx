import { GetStaticProps } from "next";
import { Mainlayout } from "@/components/layouts";
import { getPostList } from "@/utils/post";

export interface BlogListPageProps {
  posts: any;
}
export default function PostLayout() {
  return (
    <div>
      <div>post</div>
    </div>
  );
}

// Muốn sử dụng mainlayout cho  page này.
// nếu không có cú pháp này thì nó re-render lại toàn bộ page thuộc layout config đó.
PostLayout.Layout = Mainlayout;

export const getStaticProps: GetStaticProps<BlogListPageProps> = async () => {
  // convert mardown file (.md) into list javascript object
  const data = await getPostList();

  return {
    props: {
      posts: data.map((x: any) => ({ id: x.id, title: x.title })),
    },
  };
};
