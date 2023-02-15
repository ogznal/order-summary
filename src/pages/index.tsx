/* eslint-disable @next/next/no-img-element */
import { type NextPage } from "next";
import Head from "next/head";

import { Red_Hat_Display } from "@next/font/google";

const redHatDisplay = Red_Hat_Display({
  subsets: ["latin"],
});

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Frontend Mentor | Order Summary Component</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>
      <main
        className={`${redHatDisplay.className} flex min-h-screen flex-col items-center justify-center bg-[#d6e1ff]`}
      >
        <div className="w-10/12 rounded-3xl bg-white shadow-2xl md:w-1/4">
          <img
            src="/images/illustration-hero.svg"
            alt="hero illustration"
            className="rounded-t-3xl"
          />
          <div className="flex flex-col items-center p-6 md:p-10">
            <h1 className="mb-4 text-2xl font-bold text-[#111a30]">
              Order Summary
            </h1>
            <p className="text-center text-[#757781]">
              You can now listen to millions of songs, audiobooks and podcasts
              on any device anywhere you like!
            </p>
            <div className="my-5 flex w-full flex-row place-content-between items-center rounded-2xl bg-[#f9f8fe] p-5 md:p-4">
              <div className="flex h-12 w-12 flex-col items-center justify-center rounded-full bg-[#dfe5fd]">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48">
                  <g fill="none" fillRule="evenodd">
                    <circle cx="24" cy="24" r="24" fill="#DFE6FB" />
                    <path
                      fill="#717FA6"
                      fillRule="nonzero"
                      d="M32.574 15.198a.81.81 0 00-.646-.19L20.581 16.63a.81.81 0 00-.696.803V26.934a3.232 3.232 0 00-1.632-.44A3.257 3.257 0 0015 29.747 3.257 3.257 0 0018.253 33a3.257 3.257 0 003.253-3.253v-8.37l9.726-1.39v5.327a3.232 3.232 0 00-1.631-.441 3.257 3.257 0 00-3.254 3.253 3.257 3.257 0 003.254 3.253 3.257 3.257 0 003.253-3.253V15.81a.81.81 0 00-.28-.613z"
                    />
                  </g>
                </svg>
              </div>
              <div className="flex w-1/2 flex-col">
                <span className="font-bold text-[#111a30]">Annual Plan</span>
                <span className="text-sm text-[#757781]">$59.99/year</span>
              </div>
              <a
                href="http://frontendmentor.io/"
                className="text-sm font-medium text-[#382ae1] underline hover:text-[#766cf1] hover:no-underline"
              >
                Change
              </a>
            </div>
            <button
              type="submit"
              className="mb-6 w-full rounded-xl bg-[#382ae1] py-3 font-bold text-white shadow-lg shadow-[#5f56c8] hover:bg-[#766cf1]"
            >
              Proceed to Payment
            </button>
            <button
              type="reset"
              className="text-sm font-medium text-[#757781] hover:text-[#111a30]"
            >
              Cancel Order
            </button>
          </div>
        </div>
        <footer className="mt-10 text-xs">
          Challenge by{" "}
          <a
            href="https://www.frontendmentor.io?ref=challenge"
            className="text-blue-800 hover:text-blue-600 hover:underline"
          >
            Frontend Mentor
          </a>
          . Coded by{" "}
          <a
            href="https://github.com/ogznal"
            className="text-blue-800 hover:text-blue-600 hover:underline"
          >
            ogznal
          </a>
          .
        </footer>
      </main>
    </>
  );
};

export default Home;
