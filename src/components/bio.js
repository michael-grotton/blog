import React from "react"
import styles from "./bio.module.css"

function Bio() {
  return (
        <div>
          <h3 className={styles.greeting}>Hey, I'm Michael.
            I'm a student at Ohio State interested in <span style={{color:"orange"}}>web development</span>, <span style={{color:"purple"}}>data journalism</span>, <span style={{color:"#5DADE2"}}>cooking</span> and <span style={{color:"green"}}>making all kinds of things</span>. I built this site to share my work and thoughts.</h3>
        </div>
  )
}

export default Bio
