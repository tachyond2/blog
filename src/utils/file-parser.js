import fs from 'fs/promise'

import matter from 'gray-matter'

import React from 'react'

export async function getBlogPostList() {
  const fileNames = await readDirectory('/content')

  const blogPosts = []

  for (let fileName of fileNames) {
    const rawContent = await readFile(`/content/${fileName}`)

    const { data: blogAbstract } = matter(rawContent)

    blogPosts.push({
      slug: fileName.replace('.mdx', ''),
      ...blogAbstract,
    })
  }

  return blogPosts.sort((left, right) => {
    // const diff = top.publishedAt.getTime() - down.publishedAt.getTime()
    // if(diff < 0){
    //   return 1
    // }else if(diff > 0){
    //   return -1
    // }else{
    //   return diff
    // }

    return left.publishedAt.getTime() < right.publishedAt.getTime() ? 1 : -1
  })
}

// const blogPost = {
//   title:,
//   abstract:,
//   publishedAt:,
// }

export const loadBlogPost = React.cache(async function loadBlogPost(slug) {
  const rawContent = await readFile(`/content/${slug}.mdx`)

  return ({ data: frontmatter, content } = matter(rawContent))
})
function readFile(localPath) {
  return fs.readFile(path.join(process.cwd(), localPath), 'utf8')
}

function readDirectory(localPath) {
  return fs.readdir(path.join(process.cwd(), localPath))
}
