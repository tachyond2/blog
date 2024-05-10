import { getBlogPostList } from '@/utils/file-parser'

import BlogSummaryCard from '@/components/BlogSummaryCard'

import styles from './homepage.module.css'

async function Page() {
  const blogPosts = await getBlogPostList()
  return (
    <div className={styles.wrapper}>
      {blogPosts.map((slug, ...delgated) => (
        <BlogSummaryCard key={slug} slug={slug} {...delgated} />
      ))}
    </div>
  )
}

export default Page
