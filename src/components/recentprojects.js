import React from "react"
import styles from "./projects.module.css"
import { Link } from "gatsby"

import { rhythm } from "../utils/typography"


function RecentProjects() {
    return (
      <div>
        <h2 className={styles.header}>Projects</h2>
        <h4 className={styles.smallHeader}>Technical Projects</h4>
        <div className={styles.project}>
          <div className={styles.card}>
            <div className={styles.info}>
              <h3 className={styles.name}>Spotify Personal Profile</h3>
              <p className={styles.desc}>Node/Express web app that allows a spotify user to login and view their listening history.</p>
            </div>
            <div className={styles.buttons}>
              <a href="https://github.com/michaelgrotton/spotify-music-profile" className={styles.green}>
                Source
              </a>
              <a className={styles.blue}>
                Demo
              </a>
            </div>
          </div>
        </div>
        <div className={styles.project}>
          <div className={styles.card}>
            <div className={styles.info}>
              <h3 className={styles.name}>michaelgrotton.xyz</h3>
              <p className={styles.desc}>This site, built with Gatsby.js</p>
            </div>
            <div className={styles.buttons}>
            <a href="https://github.com/michaelgrotton/blog" className={styles.green}>
              Source
            </a>
              <div className={styles.placeHolder}></div>
            </div>
          </div>
        </div>
        <h4 className={styles.smallHeader}>Data Journalism / Visualization</h4>
        <h4 className={styles.smallHeader}>Other</h4>
      </div>
      )
}
export default RecentProjects;
