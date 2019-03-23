import React from "react"
import styles from "./articles.module.css"
import {StaticQuery, graphql, Link } from "gatsby"

import { rhythm } from "../utils/typography"


function Articles() {
    return (
      <StaticQuery
       query={pageQuery}
       render={data => {
         const posts = data.allMarkdownRemark.edges
         return (
          <div>
            <h2 className={styles.header}>Recent Articles</h2>
            <div className={styles.posts}>
            {posts.map(({ node }) => {
              const title = node.frontmatter.title || node.fields.slug
              return (
              <Link className = {styles.title} style={{ boxShadow: `none`,margin:0}} to={node.fields.slug}>
                <div className={styles.post} key={node.fields.slug}>
                  <h3 className={styles.title}
                    style={{
                      marginTop:0,
                      marginBottom:3,
                    }}
                  >
                  {title}
                  </h3>
                  <small>{node.frontmatter.date}</small>

                </div>
              </Link>

              )
            })}
          </div>
          )
      }
    }/>
  )
}
export default Articles;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
    }
  }
`
