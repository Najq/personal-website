import Image from 'next/image';
import Link from 'next/link';

import { SendEventOnLoad } from '@/components/send-event-on-load';
import { CONFIG } from '@/config';
import { getPosts } from '@/lib/posts';
import { reformatDate } from '@/lib/utils';
import { Redis } from '@upstash/redis';

import Footer from './_components/footer';
import Header from './_components/header';


const redis = Redis.fromEnv();
export const revalidate = 0;

export default async function Home() {
  let allPosts = getPosts();

  const views = (
    await redis.mget<number[]>(
      ...allPosts.map((p) => ['pageviews', 'posts', p.slug].join(':')),
    )
  ).reduce(
    (acc, v, i) => {
      acc[allPosts[i].slug] = v ?? 0;
      return acc;
    },
    {} as Record<string, number>,
  );

  return (
    <>
      <SendEventOnLoad eventKey="User hit home page" />
      <Header />
      <div className="flex flex-col space-y-6 md:space-y-12 pb-8 pt-4">
        <div className="flex flex-col md:px-6 animate-slide-from-down-and-fade-2">
          <div className="flex flex-col space-y-2">
            <span className="font-semibold ">About me</span>
            <span className="text-neutral-300/80 leading-6">
              {CONFIG.description}
            </span>
          </div>
        </div>

        <div className="flex flex-col space-y-6 md:space-y-12">
          {/* NOW */}
        <div className="flex flex-col md:px-6 animate-slide-from-down-and-fade-3">
            <div className="flex flex-col space-y-2">
              <span className="font-semibold">Now</span>
              <span className="text-neutral-300/80 leading-6">
              Inspired by the <a className='text-purple-600' href="https://nownownow.com/about" target="_blank">Derek Sivers now movement</a> 
              <div></div>
              {CONFIG.nowContent}
              
            <Link
              href="/now"
              className="flex flex-row space-x-2 items-center md:px-6 group cursor-pointer  justify-end"
            >
              <span className="text-neutral-400 text-sm hover:underline underline-offset-4 hover:text-secondary duration-200">
                More on what I'm working on currently
              </span>
            </Link>
            </span>
            </div>
          </div>

          {/* Work Experience */}
          <div className="flex flex-col space-y-4 animate-slide-from-down-and-fade-3">
            <div className="flex flex-col space-y-2">
              <span className="font-semibold md:px-6 ">Work Experience</span>
              <div className="flex flex-col space-y-8 md:space-y-1 md:px-2">
                {CONFIG.workExperience.map((workExp, idx) => {
                    return (
                      <Link
                        key={idx}
                        href={workExp.link}
                        target="_blank"
                        className="flex flex-row justify-between items-center duration-300 md:hover:bg-hoverBackground md:px-4 md:py-3 rounded-lg cursor-pointer"
                      >
                        <div className="flex flex-row space-x-4">
                          <Image
                            src={workExp.image}
                            alt=""
                            width={40}
                            height={40}
                            className="w-[40px] h-[40px]"
                          />
                          <div className="flex flex-col">
                            <span className="text-secondaryDark">
                              {workExp.name}
                            </span>
                            <span className="text-secondaryDarker">
                              {workExp.description}
                            </span>
                          </div>
                          <div style={{"marginLeft":"2rem", fontSize: "12px", fontFamily:"cursive"}}>
                            {workExp.dates}
                          </div>
                        </div>
                      </Link>
                    );                  
                })}
              </div>
            </div>
            <Link
              href="/work"
              className="flex flex-row space-x-2 items-center md:px-6 group cursor-pointer justify-end"
            >
              <span className="text-neutral-400 text-sm hover:underline underline-offset-4 hover:text-secondary duration-200">
                More on previous work experience
              </span>
            </Link>
          </div>

          {/* Projects */}
          <div className="flex flex-col space-y-4 animate-slide-from-down-and-fade-3">
            <div className="flex flex-col space-y-2">
              <span className="font-semibold md:px-6 ">Featured Projects</span>
              <div className="flex flex-col space-y-8 md:space-y-1 md:px-2">
                {CONFIG.projects.map((project, idx) => {
                  if (project.featured) {
                    return (
                      <Link
                        key={idx}
                        href={project.link}
                        target="_blank"
                        className="flex flex-row justify-between items-center duration-300 md:hover:bg-hoverBackground md:px-4 md:py-3 rounded-lg cursor-pointer"
                      >
                        <div className="flex flex-row space-x-4">
                          <Image
                            src={project.image}
                            alt=""
                            width={40}
                            height={40}
                            className="w-[40px] h-[40px]"
                          />
                          <div className="flex flex-col">
                            <span className="text-secondaryDark">
                              {project.name}
                            </span>
                            <span className="text-secondaryDarker">
                              {project.description}
                            </span>
                          </div>
                        </div>
                      </Link>
                    );
                  }
                })}
              </div>
            </div>
            <Link
              href="/projects"
              className="flex flex-row space-x-2 items-center md:px-6 group cursor-pointer justify-end"
            >
              <span className="text-neutral-400 text-sm hover:underline underline-offset-4 hover:text-secondary duration-200">
                All Projects
              </span>
            </Link>
          </div>

          {/* Posts */}
          <div className="flex flex-col space-y-4 animate-slide-from-down-and-fade-4">
            <div className="flex flex-col space-y-2">
              <span className="font-semibold md:px-6 ">Featured Posts</span>
              <div className="flex flex-col space-y-8 md:space-y-1 md:px-2">
                {allPosts
                  .filter((post) => post.metadata.featured === 'true')
                  .sort((a, b) => {
                    if (
                      new Date(a.metadata.publishedAt) >
                      new Date(b.metadata.publishedAt)
                    ) {
                      return -1;
                    }
                    return 1;
                  })
                  .slice(0, 3)
                  .map((post) => (
                    <Link
                      key={post.slug}
                      href={`/posts/${post.slug}`}
                      className="flex flex-row justify-between space-x-2 items-start md:items-center duration-300 md:hover:bg-hoverBackground md:px-4 md:py-3 rounded-lg cursor-pointer"
                    >
                      <span className="text-secondaryDark">
                        {post.metadata.title}
                      </span>

                      <span className="text-neutral-400 text-sm whitespace-nowrap">
                        {reformatDate(post.metadata.publishedAt)}
                      </span>
                    </Link>
                  ))}
              </div>
            </div>

            <Link
              href="/posts"
              className="flex flex-row space-x-2 items-center md:px-6 group cursor-pointer  justify-end"
            >
              <span className="text-neutral-400 text-sm hover:underline underline-offset-4 hover:text-secondary duration-200">
                All Posts
              </span>
            </Link>
          </div>
        </div>
        
      </div>
      <Footer />
    </>
  );
}
