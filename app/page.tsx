import "../app/globals.scss";
import { ArticleCard } from "@/features/Article/ArticleCard";
import { Header } from "@/app/components/Header/Header";
import { Footer } from "@/app/components/Footer/Footer";

export default function Home() {
  return (
    <div>
      <Header />
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
      <Footer />
    </div>
  );
}
