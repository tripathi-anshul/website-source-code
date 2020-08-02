import React from 'react';
import { graphql } from 'gatsby'
export default function Template({data}) {
  console.log(data)
  console.log("***********************************************************************************")
  console.log("***********************************************************************************")
  console.log("***********************************************************************************")
  console.log("***********************************************************************************")
  console.log("***********************************************************************************")
  console.log("***********************************************************************************")
  console.log("***********************************************************************************")
  console.log("***********************************************************************************")
  const {mdx: post} = data;
  console.log(post.frontmatter)
  // const post = data.markdownRemark;
  return (
    <h1>{post.frontmatter.title}</h1>
  )
}

export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    mdx (frontmatter: { path: { eq: $path} }){
      id
          frontmatter {
            path
            title
          }
    }
  }
`