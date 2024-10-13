import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-background text-foreground p-6 border-t-2 border-gray-500">
      <div className="flex justify-between">
        <div>© 2024 TechSnap</div>
        <div className="flex gap-3">
          <Link href="/about">TechSnapとは</Link>
          <Link href="/contact">お問合せ</Link>
          <Link href="privacy">プライバシーポリシー</Link>
        </div>
      </div>
    </footer>
  );
};
