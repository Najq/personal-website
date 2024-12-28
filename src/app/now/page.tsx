import React from 'react';

import Link from 'next/link';

export const metadata = {
  title: 'Now page',
  description: 'Fluid updates on my life, since I avoid social media',
};

export default function NowPage() {
  return (
    <div className="grid grid-cols-1 gap-10 pb-10 w-full">
      <div className="flex flex-col">
        <Link
          href="/"
          className="flex flex-row space-x-2 items-center md:px-6 group cursor-pointer mb-4 animate-slide-from-down-and-fade-1"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            className="text-secondaryDarker group-hover:-translate-x-1 duration-200 rotate-180"
          >
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="M1.25 8A.75.75 0 0 1 2 7.25h10.19L9.47 4.53a.75.75 0 0 1 1.06-1.06l4 4a.75.75 0 0 1 0 1.06l-4 4a.75.75 0 1 1-1.06-1.06l2.72-2.72H2A.75.75 0 0 1 1.25 8"
              clipRule="evenodd"
            />
          </svg>
          <span className="text-secondaryDarker">Back</span>
        </Link>
        <span className="text-4xl font-bold md:px-6 mb-6 md:mb-4 animate-slide-from-down-and-fade-2">
          Now
        </span>
        <h1 className="italic py-2">Last updated - December 2024</h1>
        <main className="container mx-auto px-1 mt-15">
          <h2 className="text-2xl font-bold mb-4">Now working on</h2>
          <p className="mb-4">
            Working at Caylent has been fun so far. I'm enjoying the holidays,
            resting and recharging before 2025.
            <p>
              {' '}
              I'm also working on a side project, which is simple word game
              based on guessing the word based on the context that the words
              apprear in. You can check it out at{' '}
              <a href="https://www.guessword.link"> here </a>{' '}
            </p>
            <p> </p>
          </p>
          <h2 className="text-2xl font-bold mb-4">Learning</h2>
          <div className="space-y-4">
            <p className="mb-4">
              I've picked up learning the keyboard, which has been a fun way to
              dip my toes into music.{' '}
            </p>
          </div>
          <h2 className="text-2xl font-bold mb-4">Entertainment stuff</h2>
          <div className="space-y-4">
            <p className="mb-4">
              Going to christmas markets and paying for the overpriced hot
              chocolates. 🫡{' '}
            </p>
          </div>
          <h2 className="text-2xl font-bold mb-4">Reading</h2>
          <div className="space-y-4">
            <p className="mb-4">
              Reading Intermezzo by Sally Rooney and Thinking Fast and Slow by
              Daniel Kahneman (two polar opposite book choices, I know). I
              picked up Sally Rooney since I heard about her writing through
              Tiktok a lot, and wanted to give it a try. It's been a great read
              so far. I'm re-reading Thinking Fast and Slow since I read it a
              few years ago and wanted to refresh my memory on the ideas
              mentioned in the book.
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}
