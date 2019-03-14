import React from "react"
import { Link } from "gatsby"
import styles from "./layout.module.css"

import { rhythm } from "../utils/typography"

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <nav className={styles.nav}>
          <div className={styles.logo}>
            <span className={styles.logoFont}>Michael Grotton</span>
          </div>
          <div className={styles.hamburger}>
            <button className={styles.hamburgerButton}>
              <svg className={styles.hamburgerSvg} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
            </button>
          </div>
          <div className={styles.linkCont}>
            <div className={styles.links}>
              <Link className = {styles.pill} to={`/`}>go somewhere</Link>
                Examples
              <Link className = {styles.pill} to={`/`}>go somewhere</Link>
              <Link className = {styles.pill} to={`/`}>go somewhere</Link>
            </div>
            <div>
              <Link className = {styles.pill} to={`/`}>go somewhere</Link>
            </div>
          </div>
        </nav>
      )
    } else {
      header = (
        <h3
          style={{
            fontFamily: `Montserrat, sans-serif`,
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h3>
      )
    }
    return (
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        <header>{header}</header>
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    )
  }
}

export default Layout
