import { loadBlogPost } from '../../utils/file-parser'

import { MDXRemote } from 'next-mdx-remote/rsc'

import { BLOG_METADATA } from '../constants'

import COMPONENTS_MAP from '../../helpers/component-map'

export async function generateMetadata({ params }) {
  const { frontmatter } = await loadBlogPost(params.postslug)

  return {
    title: `${frontmatter.title} - ${BLOG_METADATA.title}`,
    description: frontmatter.description,
  }
}

async function BlogPost({ params }) {
  const { frontmatter, content } = await loadBlogPost(params.postSlug)
  return (
    <article className={styles.wrapper}>
      <BlogHero
        title={frontmatter.title}
        publishedOn={frontmatter.publishedOn}
      />
      <div className={styles.page}>
        <MDXRemote source={content} components={COMPONENTS_MAP} />
      </div>
    </article>
  )
}
