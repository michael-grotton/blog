import React from "react"
import styles from "./articles.module.css"
import {StaticQuery, graphql, Link } from "gatsby"

import { rhythm } from "../utils/typography"

function Updated() {
    return (
      <StaticQuery
       query={pageQuery}
       render={data => {
         const posts = data.allMarkdownRemark.edges
         return (
          <div>
            <h2 className={styles.header}>Frequently Updated Articles</h2>
            <div className={styles.posts}>
              {posts.map(({ node }) => {
                const title = node.frontmatter.title || node.fields.slug
                const tags = node.frontmatter.tags
                return (
                <Link className = {styles.link} style={{ boxShadow: `none`,margin:0}} to={node.fields.slug}>
                  <div className={styles.post} key={node.fields.slug}>
                    <div class={styles.image}></div>
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
                          <Link className={tag === "updating" ? styles.tagUpdating : styles.tag} to={`/tags/${tag}`}>
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

export default Updated

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      filter: { frontmatter: { tags: { in: "updating" } } },
      sort: { fields: [frontmatter___date], order: DESC }, limit:3)
      {
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
          }
        }
      }
    }
  }
`
