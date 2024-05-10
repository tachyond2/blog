import styles from './BlogSummaryCard.module.css'
import { format } from 'date-fns'
function BlogSummaryCard({ slug, title, publishedAt, abstract }) {
  const href = `/${slug}`
  const humanizedDate = format(new Date(publishedAt), 'MMMM do, yyyy')

  return (
    <Card className={styles.wrapper}>
      <Link href={href} className={styles.title}>
        {title}
      </Link>
      <time dateTime={publishedAt}>{humanizedDate}</time>
      <p>
        {abstract}
        {''}
        <Link href={href} className={styles.continueReadingLink}>
          Contiune reading <span className={styles.arrow}>→</span>
        </Link>
      </p>
    </Card>
  )
}

export default BlogSummaryCard
