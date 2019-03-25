import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import { rhythm } from "../utils/typography"
import styles from "./articles.module.css"

class Articles extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout>
          <h2 className={styles.header}>All Articles</h2>
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
      </Layout>
    )
  }
}

export default Articles

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
            tags
          }
        }
      }
    }
  }
`
