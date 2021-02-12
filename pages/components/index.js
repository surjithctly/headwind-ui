import Head from "next/head";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Subscribe from "../../components/Subscribe";

export default function Home() {
  return (
    <>
      <Head>
        <title>Web3Templates — TailwindCSS Components</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <div className="flex flex-col items-center justify-center min-h-screen pt-16 text-center">
        <div className="self-center max-w-6xl py-10 mx-10 mt-auto">
          <p className="my-3 text-sm tracking-widest text-blue-500 uppercase">
            GET FREE EARLY ACCESS
          </p>
          <h1 className="my-3 text-5xl font-bold tracking-tight text-gray-800 md:text-7xl">
            TailwindCSS Components
          </h1>

          <div>
            <p className="max-w-2xl mx-auto my-2 text-lg leading-relaxed text-gray-500 md:text-xl">
              A growing library of 100+ pre-built, fully responsive HTML & React
              components you can drop into your Tailwind projects.
            </p>
          </div>
          <div className="my-8">
            <Link href="/components/all">
              <a className="px-6 py-4 text-white rounded-md bg-gradient-to-t from-indigo-600 to-indigo-500">
                Browse All Components
              </a>
            </Link>
          </div>
        </div>

        <div className="w-full px-5 mt-auto mb-10 ">
          <Subscribe type="components" />
        </div>

        <div className="w-full my-5">
          Made by Surjith S M &middot;{" "}
          <a
            href="https://twitter.com/surjithctly"
            target="_blank"
            className="text-blue-500"
          >
            Follow me on Twitter
          </a>
        </div>
      </div>
    </>
  );
}
