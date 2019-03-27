import React from "react"
import styles from "./articles.module.css"
import {StaticQuery, graphql, Link } from "gatsby"

import { rhythm } from "../utils/typography"

function RecentArticles() {
    return (
      <StaticQuery
       query={pageQuery}
       render={data => {
         const posts = data.allMarkdownRemark.edges

         return (
          <div>
            <h2 className={styles.header}>Recent Blog Posts</h2>
            <div className={styles.posts}>
              {posts.map(({ node }) => {
                const title = node.frontmatter.title || node.fields.slug
                const tags = node.frontmatter.tags
                const headerURL = node.frontmatter.attachments[0].publicURL

                return (
                <Link className = {styles.link} style={{ boxShadow: `none`,margin:0}} to={node.fields.slug}>
                  <div className={styles.post} key={node.fields.slug}>
                    <div class={styles.image} style={{backgroundImage:'url(' + headerURL + ')'}}></div>
                    <div class={styles.text}>
                      <h3 className={styles.title}
                        style={{
                          marginTop:0,
                          marginBottom:0,
                        }}
                      >
                      {title}
                      </h3>
                      <small>{node.frontmatter.date}</small>
                      <div className={styles.tags}>
                      {tags.map((tag) => {
                        return(
                        <div className={styles.tagCont}>
                          <Link className={styles.tag} to={`/tags/${tag}`}>
                            #{tag}
                          </Link>
                        </div>
                        )
                      })}
                      </div>
                    </div>
                  </div>
                </Link>
                )
              })}
          </div>
        </div>
          )
      }
    }/>
  )
}

export default RecentArticles

export const pageQuery = graphql`
query {
  site {
    siteMetadata {
      title
    }
  }
  allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }, limit:3) {
    edges {
      node {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          tags
          attachments {
            publicURL
          }
        }
      }
    }
  }
}
`
