import fs from 'fs';
import path from 'path';

import matter from 'gray-matter';
import { IArticle } from 'components/Article/Article.model';

// process.cvd - overall project falder
// todo: ? src
const postsDirectory = path.join(process.cwd(), 'src', 'posts');

export const getPostsFiles = () => fs.readdirSync(postsDirectory);

export const getPostData = (postIdentifier: string) => {
  const postSlug = postIdentifier.replace(/\.md$/, ''); // removes file extention
  const filePath = path.join(postsDirectory, `${postSlug}.md`);
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContent);
  const postData = {
    slug: postSlug,
    ...data,
    content,
  };
  return postData;
};

// todo: consider  get future posts - future posts on homepage
// recent posts - homepage

export const getAllPosts = () => {
  const postFiles = getPostsFiles();
  return postFiles.map((postFile) => {
    return getPostData(postFile);
  });
  // sort post by Date
};

// todo: later I can doo getAllPostsBy.. Tags, Category, etc...
// get Featured posts...
