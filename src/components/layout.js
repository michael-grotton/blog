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
        <div>
          <ul className={styles.list_container}>
            <li className={styles.list_element}>
              <Link className = {styles.link} to={`/`}>go somewhere</Link>
              <Link className = {styles.link} to={`/`}>go somewhere</Link>
            </li>
            <li className={styles.list_element}>
              <Link className = {styles.link} to={`/`}>go somewhere</Link>
            </li>
            <li className={styles.list_element}>
              <Link className = {styles.link} to={`/`}>go somewhere</Link>
            </li>
          </ul>
        </div>

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
