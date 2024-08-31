import React from 'react';


import Link from 'next/link';


export const metadata = {
  title: 'Work page',
  description: 'Experience that I have gained at various companies',
};

export default function WorkPage() {
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
          Work Experience
        </span>
        <h1 className='italic py-2'>Last updated - August 2024</h1>
        <main className="container mx-auto px-1 mt-15">
        
        <h2 className="text-2xl font-bold mb-4">Alida</h2>        
        <p className="mb-4"> Developed a Node.js backend adhering to RESTful patterns, which helped transition to a modern reporting solution and enhancing system performance by 60%, as evidenced by reduced memory consumption. I led features such as Exporting a report, cache managment of reports and optimizations. </p>
        <p className="mb-4"> Worked on the design and implementation of a Data Ingestion service using AWS SQS and SNS, and achieved a 20% reduction in data load times and enhanced system reliability. </p>
        <p className="mb-4"> Spearheaded developer productivity initiatives such as automating OpenAPI specification generation from Golang code, writing reusable Github actionsfor CI/CD workflows.</p>
        <p className="mb-4"> Also, set up End-end test framework containerized in Docker, which greatly increase the code coverage. </p>
        
        <h2 className="text-2xl font-bold mb-4">Statistics Canada</h2>
        <div className="space-y-4">
            <p className="mb-4">Implemented a crop-area estimation model using Pytorch which reduced the dependability on manual surveys by 50%. Processed geo-spatial data with Python by chunking and transformations for CNN model input.</p>
            <p className="mb-4">Developed a comments-classifier for the 2021 Canadian Census, using semi-supervised learning and bi-directional LSTM network. The classifier reduced the manual work hours by &#62; 80% and earned widespread organizational recognition.</p>
        </div>
        
        <h2 className="text-2xl font-bold mb-4">ZS Associates</h2>
        <div className="space-y-4">
            <p className="mb-4">Spearheaded the development of a web application used for contracting by pharmaceutical companies. </p>
            <p> Reduced the load time of front-end reports from &#60; 1 minute to &#62; 15 seconds by reducing client-side processing and optimizing Angular performance. Responsible for writing Stored procedures for a MySQL database.</p>
        </div>
    </main>
      </div>
    </div>
  );
}
