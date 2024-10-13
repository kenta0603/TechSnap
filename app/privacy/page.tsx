const Privacy = () => {
  return (
    <section className="p-6">
      <h1 className="text-2xl font-bold">プライバシーポリシー</h1>
      <p>
        当サイトは、お客様の個人情報を大切に考え、その保護のための措置を講じております。
      </p>
      <div className="flex flex-col gap-3 mt-4">
        <div>
          <h2 className="text-lg">1. 収集する情報</h2>
          <p>
            当サイトでは、Google
            Analyticsを利用して、サイトの利用状況に関する情報を収集しています。これには、アクセス元やブラウザの種類、利用時間などの情報が含まれますが、これらは匿名で収集されており、個人を特定するものではありません。
          </p>
        </div>
        <div>
          <h2 className="text-lg">2. 情報の利用目的</h2>
          <p>
            収集した情報は、サイトの利用状況の分析、サイトの品質向上のための参考として利用します。
          </p>
        </div>
        <div>
          <h2 className="text-lg">3. 情報の第三者への提供</h2>
          <p>
            当サイトは、収集した情報を原則として第三者に提供することはありません。ただし、法的な要請があった場合や、当サイトの権利や財産を保護する必要がある場合を除きます。
          </p>
        </div>
        <div>
          <h2 className="text-lg">4. プライバシーポリシーの変更</h2>
          <p>
            当サイトは、必要に応じてプライバシーポリシーの内容を変更することがあります。
          </p>
        </div>
        <div>
          <h2 className="text-lg">5. 問い合わせ</h2>
          <p>
            プライバシーポリシーに関する質問や疑問については、開発者までお問い合わせください。
          </p>
        </div>
      </div>
    </section>
  );
};

export default Privacy;
