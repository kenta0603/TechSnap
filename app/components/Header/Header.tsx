import { Button } from "@/app/components/Button/Button";
import { NavItem } from "@/app/components/Header/NavItem";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="flex flex-col py-3 px-6 gap-3">
      <div className="flex justify-between">
        <Link href="/" className="text-2xl font-semibold">
          TechSnap
        </Link>

        <div className="flex gap-5">
          <input
            type="text"
            placeholder="記事を検索"
            className="w-80 p-2 rounded-md border border-gray-300 focus:text-customBlack focus:outline-none focus:border-gray-500"
          />
          <Button theme="secondary" className="hover:text-md">
            ログイン
          </Button>
        </div>
      </div>
      <div className="flex gap-4">
        <NavItem title="ホーム" isActive />
        <NavItem title="トレンド" />
        <NavItem title="後で読む" />
      </div>
    </header>
  );
};
