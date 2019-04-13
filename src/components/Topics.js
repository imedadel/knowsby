import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import { rhythm } from "../utils/typography"
import _ from "lodash"
import styled from "styled-components"
import tw from "tailwind.macro"

const Wrapper = styled.div`
  ${tw`w-full md:w-1/2 lg:w-1/3`};
`
const TopicsWrap = styled.div`
  ${tw`flex justify-between w-full`};
`
const Topics = ({ data }) => {
  let topics = []

  _.each(data.allMarkdownRemark.edges, edge => {
    if (_.get(edge, "node.frontmatter.topic")) {
      topics = topics.concat(edge.node.frontmatter.topic)
    }
  })

  topics = _.uniq(topics)
  return (
    <TopicsWrap>
      {topics.map(topic => (
        <Wrapper>
          <h2>{topic}</h2>
          {data.allMarkdownRemark.edges.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug
            if (node.frontmatter.topic === topic) {
              return (
                <div key={node.fields.slug}>
                  <h3
                    style={{
                      marginBottom: rhythm(1 / 4),
                    }}
                  >
                    <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                      {title}
                    </Link>
                  </h3>
                  <small>{node.frontmatter.date}</small>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: node.frontmatter.description || node.excerpt,
                    }}
                  />
                </div>
              )
            }
          })}
        </Wrapper>
      ))}
    </TopicsWrap>
  )
}

export default props => (
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
                date(formatString: "MMMM DD, YYYY")
                title
                featured
                description
                topic
              }
            }
          }
        }
      }
    `}
    render={data => <Topics data={data} {...props} />}
  />
)
