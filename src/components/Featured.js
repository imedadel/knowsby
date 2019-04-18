import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import { rhythm } from "../utils/typography"
import styled from "styled-components"
import tw from "tailwind.macro"

const FeaturedArticles = styled.div`
  ${tw`mb-16 pl-8 w-2/5`};
`
const FeaturedArticles__Heading = styled.h2`
  ${tw`text-3xl mb-4`};
`
const FeaturedArticles__Title = styled.h3`
  ${tw`text-base  font-normal font-body leading-tight truncate max-w-xs w-auto mb-2`};
`
const FeaturedArticles__Link = styled(Link)`
  ${tw`no-underline text-grey-darker hover:text-grey-darkest hover:underline`};
`

export default () => (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
          edges {
            node {
              excerpt
              fields {
                slug
              }
              frontmatter {
                title
                featured
              }
            }
          }
        }
      }
    `}
    render={data => (
      <FeaturedArticles>
        <FeaturedArticles__Heading>🎀 Featured</FeaturedArticles__Heading>
        {data.allMarkdownRemark.edges.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          if (node.frontmatter.featured) {
            return (
              <FeaturedArticles__Title key={node.fields.slug}>
                <FeaturedArticles__Link to={node.fields.slug}>
                  📝 {title}
                </FeaturedArticles__Link>
              </FeaturedArticles__Title>
            )
          }
        })}
      </FeaturedArticles>
    )}
  />
)
