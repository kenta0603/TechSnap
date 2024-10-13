"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/app/components/Button/Button";

const contactSchema = z.object({
  name: z.string().min(1, "名前は必須です"),
  email: z.string().email("正しいメールアドレスを入力してください"),
  message: z.string().min(10, "メッセージは10文字以上で入力してください"),
  category: z.enum(["不備の報告", "改善依頼", "その他"]),
});

type ContactFormData = z.infer<typeof contactSchema>;

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    console.log(data);
    alert("お問い合わせが送信されました！");
  };

  return (
    <div className="max-w-lg mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">お問い合わせフォーム</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <div>
          <label className="block mb-1 font-semibold">お名前</label>
          <input
            type="text"
            placeholder="名前を入力してください"
            {...register("name")}
            className="w-full p-2 border border-gray-300 rounded-md placeholder-gray-400 text-customBlack"
          />
          {errors.name && (
            <p className="text-red-500 text-sm">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label className="block mb-1 font-semibold">メールアドレス</label>
          <input
            type="email"
            placeholder="メールアドレスを入力してください"
            {...register("email")}
            className="w-full p-2 border border-gray-300 rounded-md placeholder-gray-400 text-customBlack"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label className="block mb-1 font-semibold">カテゴリ</label>
          <select
            {...register("category")}
            className="w-full p-2 border border-gray-300 rounded-md placeholder-gray-400 text-customBlack focus:text-customBlack"
          >
            <option value="改善依頼">改善依頼</option>
            <option value="不備の報告">不備の報告</option>
            <option value="その他">その他</option>
          </select>
        </div>

        <div>
          <label className="block mb-1 font-semibold">本文</label>
          <textarea
            {...register("message")}
            placeholder="お問合せ内容を記入してください"
            rows={5}
            className="w-full p-2 border border-gray-300 rounded-md text-customBlack"
          />
          {errors.message && (
            <p className="text-red-500 text-sm">{errors.message.message}</p>
          )}
        </div>

        <Button>送信</Button>
      </form>
    </div>
  );
};

export default Contact;
