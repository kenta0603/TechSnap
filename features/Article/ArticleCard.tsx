import { Button } from "@/app/components/Button/Button";
import React from "react";
import { IoIosHeartEmpty } from "react-icons/io";
import Image from "next/image";

export const ArticleCard = () => {
  return (
    <div className="border-2 border-zinc-700 rounded-lg p-4 shadow-md transition-transform transform hover:scale-105">
      <h3 className="text-xl font-bold cursor-pointer hover:underline">
        【初級編】あなたは React
        コンポーネントの改善点を見抜けるか？5つの問題に挑戦！
      </h3>
      <div className="flex items-center gap-2">
        <div className="w-7 h-7 overflow-hidden rounded-full">
          <Image
            src="/アフロ犬.jpeg"
            alt="authorImg"
            width={40}
            height={40}
            className="object-cover"
          />
        </div>
        <span>著者名</span>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex gap-3 items-center mt-2 text-gray-600">
          <div className="flex items-center gap-1">
            <IoIosHeartEmpty />
            99
          </div>
          <div>3日前</div>
        </div>
        <Button>後で読む</Button>
      </div>
    </div>
  );
};
