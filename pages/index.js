import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from "react";
import winning from '../public/winning.svg';
import { LoginButton } from '../components/LoginButton';

export default function Home() {
  let localStorageConsent;
  const [cookiesAccepted, setCookiesAccepted] = useState(true);

  useEffect(() => {
    setCookiesAccepted(localStorageConsent);
  }, [localStorageConsent]);

  if (typeof window !== "undefined") {
    localStorageConsent = window.localStorage.getItem("cookies-accepted");
  }

  const acceptCookies = () => {
    localStorageConsent = window.localStorage.setItem("cookies-accepted", true);
    setCookiesAccepted(true);
  };

  return (
    <>
      <Head>
        <title>Dream Life To-Do App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <main className="bg-gradient-to-tr from-green-300 via-blue-500 to-purple-600 relative">
            <div className="container mx-auto flex flex-col items-center p-2 min-h-[100vh] gap-y-14">
                <h1 className="text-5xl text-center font-bold text-indigo-900 mt-6">
                Dream To-Dos
                </h1>
                <Image src={winning} className="w-[300px]" alt="girl working on laptop image" />
                <div className="sm:w-6/12 xs:w-full text-center">
                  <p className="text-lg ">
                    To start crushing your dream life goals, go to your to-do dashboard:
                  </p>
                  <div className="flex flex-row justify-center mt-8 text-violet-900">
                      <LoginButton />
                  </div>
                </div>
                <div className="flex flex-row gap-x-4 absolute bottom-4">
                  <Link href="/about" className="hover:text-violet-900">
                    About
                  </Link>
                  <Link href="/blog" className="hover:text-violet-900">
                    Blog
                  </Link>
                </div>
              </div>
              {cookiesAccepted === null && (
                <div className="fixed bottom-0 grid-flow-row justify-center text-center bg-zinc-200 bg-opacity-80 p-6 w-full">
                  Please{" "}
                  <span
                    className="text-violet-900 cursor-pointer p-0 hover:text-violet-700 font-bold"
                    onClick={acceptCookies}
                  >
                    &nbsp;accept cookies
                  </span>
                  , we&apos;ll be nice, we promise! 🤭
                </div>
              )}
        </main>
    </>
  );
}
