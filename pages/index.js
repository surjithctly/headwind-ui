import Head from "next/head";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Subscribe from "../components/Subscribe";

export default function Home() {
  return (
    <>
      <Head>
        <title>Web3Templates — Website Templates & Landing Pages</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <div className="flex flex-col items-center justify-center min-h-screen pt-16 text-center">
        <div className="self-center max-w-6xl py-10 mx-10 mt-auto">
          <p className="my-3 text-sm tracking-widest text-blue-500 uppercase">
            COMING SOON
          </p>
          <h1 className="my-3 text-5xl font-bold tracking-tight text-gray-800 md:text-7xl">
            Premium Website Templates
          </h1>

          <div>
            <p className="max-w-2xl mx-auto my-2 text-lg text-gray-500 md:leading-relaxed md:text-xl">
              High quality premium JAMStack website templates and landing pages
              with 100% page speed score. Built with TailwindCSS. Available for
              HTML5, Next.js & Eleventy.
            </p>
          </div>
          <div className="my-8 space-x-4">
            <Link href="/">
              <a className="px-6 py-4 text-white rounded-md cursor-not-allowed opacity-20 bg-gradient-to-t from-gray-800 to-gray-800">
                View All Templates
              </a>
            </Link>
            <Link href="/components">
              <a className="px-6 py-4 text-white rounded-md bg-gradient-to-t from-indigo-600 to-indigo-500">
                Browse Components
              </a>
            </Link>
          </div>
        </div>

        <div className="w-full px-5 mt-auto mb-10 ">
          <Subscribe type="landing" />
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
