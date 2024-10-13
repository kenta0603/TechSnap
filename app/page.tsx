import "../app/globals.scss";
import { ArticleCard } from "@/features/Article/ArticleCard";

export default function Home() {
  return (
    <main className="p-6 grid gap-8 row-start-2 items-center sm:grid-cols-3">
      <ArticleCard />
      <ArticleCard />
      <ArticleCard />
      <ArticleCard />
      <ArticleCard />
      <ArticleCard />
      <ArticleCard />
      <ArticleCard />
    </main>
  );
}
