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
        <h1 className='italic py-2'>Last updated - August 2024</h1>
        <main className="container mx-auto px-1 mt-15">
        <h2 className="text-2xl font-bold mb-4">Now working on</h2>
        <p className="mb-4">I'm currently transitioning from my role at Alida and moving on to Caylent, which is focussed on providing consulting services using AWS.
            <p> In my last week at Alida, I set up and end-end testing framework by dockerizing the back-end services. I'm just surprised why I didn't do it earlier, it was straightforward albeit a few hiccups. Mostly because the app depends a lot on external services.</p>
            <p> I realized I miss writing programs in Go, so I'm going back to it and planning to write neural networks using Go, I've heard deep learning is an issue with Go? Let's find out. </p>
        </p>
        <h2 className="text-2xl font-bold mb-4">Learning</h2>
        <div className="space-y-4">
            <p className="mb-4">I've started keeping a <a className="font-bold" href="https://fortelabs.com/blog/basboverview/" target="_blank">second brain</a> in Notion, I'm just wondering why I'm so late to this. It's immensely helpful for gaining some clarity on the different areas of your life.</p>
        </div>
        <h2 className="text-2xl font-bold mb-4">Entertainment stuff</h2>
        <div className="space-y-4">
            <p className="mb-4">I really miss hiking since I got a concussion while playing jijutsu, taking some time to recover but can't wait to lift heavy and go climb some mountains.</p>
        </div>
        <h2 className="text-2xl font-bold mb-4">Reading</h2>
        <div className="space-y-4">
            <p className="mb-4">Finishing Meditations by Marcus Aurelius, was on my list for a long time.</p>
        </div>
    </main>
      </div>
    </div>
  );
}
