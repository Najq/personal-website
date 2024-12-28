import React from 'react';

import { getPosts } from '@/lib/posts';

import Posts from './posts';

export const revalidate = 0;

export const metadata = {
  title: 'Posts',
  description: 'Read my thoughts.',
};

export default async function PostsPage() {
  let allPosts = getPosts();

  let publishedPosts = allPosts.filter((post) => !post.metadata.isDraft);

  return <Posts allPosts={publishedPosts} />;
}
