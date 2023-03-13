import { getAllPostIds, getPostData } from "@/lib/posts";
import Head from "next/head";
import Link from "next/link";

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);

  return {
    props: {
      postData,
    },
  };
}

export default function Post({ postData }) {
  return (
    <>
      <Head>
        <title>Dream Life To-Do App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-gradient-to-tr from-green-300 via-blue-500 to-purple-600">
       <div className="container mx-auto flex flex-col items-center pt-6 min-h-[100vh] gap-y-6">
       <h1 className="text-5xl text-center font-bold text-slate-900">
          {postData.title}
        </h1>

        <div className="w-full max-w-3xl">
          <div
            className="prose lg:prose-xl prose-slate text-slate-800"
            dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
          />
          <div className="border-2 border-violet-800 w-fit rounded px-4 py-2 mt-10 text-violet-800 hover:border-violet-900 hover:text-violet-900 cursor-pointer">
            <Link href="/blog">{"<"} Back</Link>
          </div>
        </div>
       </div>
      </main>
    </>
  );
}
