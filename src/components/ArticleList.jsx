
import Article from "./Article";

export default function ArticleList({ posts }) {
  const articleElements = posts.map((post) => {
    return <Article key={post.id} title={post.title} date={post.date} preview={post.preview} />;
  });

  return <main>{articleElements}</main>;
}
