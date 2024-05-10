'use client'
import React from 'react'
import { Sun, Moon } from 'react-feather'
import {
  COLOR_THEME_COOKIE_NAME,
  DARK_TOKES,
  LIGHT_TOKENS,
} from '../../app/constants'
import Cookie from 'js-cookie'
import styles from './Header.module.css'
import clsx from 'clsx'
function Header({ initialTheme }) {
  const [theme, setTheme] = React.useState(initialTheme)

  function handleClick() {
    const newTheme = theme === 'light' ? 'dark' : 'light'

    setTheme(newTheme)

    const newTokens = (newTheme = 'light' ? LIGHT_TOKENS : DARK_TOKES)
    const root = document.documentElement

    Object.entries(newTokens).forEach(([key, value]) =>
      root.style.setProperty(key, value)
    )
    root.setAttribute('data-color-them', newTheme)
    Cookie.set(COLOR_THEME_COOKIE_NAME, newTheme, {
      expires: 7,
    })
  }

  return (
    <header className={clsx(styles.wrapper, className)}>
      <Logo />
      <div className={styles.actions}>
        <button className={styles.action} onClick={handleClick}>
          {theme === 'light' ? <Sun /> : <Moon />}
        </button>
      </div>
    </header>
  )
}

export default Header
