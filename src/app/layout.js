import {
  BLOG_METADATA,
  // {title, description},
  LIGHT_TOKENS,
  DARK_TOKES,
  COLOR_THEME_COOKIE_NAME,
} from './constants'

import clsx from 'clsx'
import { cookies } from 'next/headers'

const mainFont = Work_Sans({
  subset: ['latin'],
  display: 'fallback',
  weight: 'variable',
  variable: '--font-family',
})

const monoFont = Spline_Sans_Mono({
  subsets: ['latin'],
  display: 'fallback',
  weight: 'variable',
  variable: '--font-family-mono',
})

// metadata merge
// distinction when mutli page get opened
export const metadata = {
  title: BLOG.title,
  descript: BLOG.description,
}

function RootLayout({ children }) {
  const savedTheme = cookies().get(COLOR_THEME_COOKIE_NAME)

  const theme = savedTheme?.value || 'light'

  return (
    <html
      lang="en"
      className={clsx(mainFont.variable, monoFont.variable)}
      data-color-theme={theme}
      style={theme === 'light' ? LIGHT_TOKENS : DARK_TOKES}
    >
      <body>
        <Header initialTheme={theme} />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
