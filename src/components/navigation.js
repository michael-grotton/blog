import React from "react"
import { Link } from "gatsby"
import styles from "./navigation.module.css"

import { rhythm } from "../utils/typography"

class Navigation extends React.Component {
  state = {
    scrolled: false,
  }

  navOnScroll = () => {
    if (window.scrollY > 20) {
      this.setState({ scrolled: true })
    } else {
      this.setState({ scrolled: false })
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.navOnScroll)
    console.log(this.state.scrolled)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.navOnScroll)
  }

  render() {
    return (
      <nav className={this.state.scrolled ? styles.navScrolled : styles.nav}>
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
            <Link className = {styles.pill} to={`/`}>Posts</Link>
            <Link className = {styles.pill} to={`/`}>Projects</Link>
            <Link className = {styles.pill} to={`/`}>Something</Link>
          </div>
          <div>
            <Link className = {styles.pill} to={`/`}>Share</Link>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navigation
