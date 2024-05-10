import { format } from 'date-fns'

import clsx from 'clsx'

import styles from './BlogHero.module.css'

function BlogHero({ title, publishedOn, className, ...delgated }) {
  const humanizedDate = format(new Date(publishedOn), 'MMMM do, yyyy')

  return (
    <Header className={(clsx(styles.wrapper), className)} {...delgated}>
      <div className={styles.content}>
        <h1>{title}</h1>
        <p>
          Published on{''}
          <time dateTime={publishedOn}>{humanizedDate}</time>
        </p>
      </div>
    </Header>
  )
}

export default BlogHero
