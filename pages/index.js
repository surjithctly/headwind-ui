import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Headwind UI</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col content-center justify-center h-screen text-center">
        <h1 className="text-4xl font-bold">Headwind UI</h1>
        <Link href="/components">
          <a className="py-4"> Browse Components</a>
        </Link>
      </div>
    </>
  );
}
