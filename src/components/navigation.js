import React from "react"
import { Link } from "gatsby"
import styles from "./navigation.module.css"
import Image from "gatsby-image"
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
      <div className={this.state.scrolled ? styles.navContScrolled : styles.navCont}>
        <div className={styles.navItems} style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(29),
        }}>
          <div>
            <Link to={'/'} style={{boxShadow:"none",textDecoration:"none"}}>
              <span className={this.state.scrolled ? styles.logoFontScrolled : styles.logoFont}>Michael Grotton</span>
            </Link>
          </div>
          <div>
              <Link className = {this.state.scrolled ? styles.pillScrolled : styles.pill} to={`/articles`}>Articles</Link>
              <Link className = {this.state.scrolled ? styles.pillScrolled : styles.pill} to={`/projects`}>Projects</Link>
              <Link className = {this.state.scrolled ? styles.pillScrolled : styles.pill} to={`/about`}>About Me</Link>
          </div>
          <div>
            <Link className = {this.state.scrolled ? styles.connectScrolled : styles.connect} to={`/connect`}>Get in touch</Link>

          </div>
        </div>
      </div>
    )
  }
}

export default Navigation
