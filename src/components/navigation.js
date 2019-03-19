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
      <div className={this.state.scrolled ? styles.navScrolled : styles.nav}>
        <div className={styles.logo}>
          <span className={styles.logoFont}>Michael Grotton</span>
        </div>
        <div className={styles.linkCont} style={{backgroundColor:"yellow"}}>
            <Link className = {styles.pill} to={`/`}>Posts</Link>
            <Link className = {styles.pill} to={`/`}>Projects</Link>
            <Link className = {styles.pill} to={`/`}>Something</Link>
        </div>
        <div>
          <Link className = {styles.pill} to={`/`}>Share</Link>
        </div>
      </div>
    )
  }
}

export default Navigation
