import React from 'react';
import NavBar from "../components/navbar"
import { graphql } from 'gatsby'

export default function Template({data}) {
  const {markdownRemark: post} = data;
  // const post = data.markdownRemark;
  return (
    <div>
      <NavBar/>
      <div class="columns is-centered"> 
      <h1>{post.frontmatter.title}</h1>

      <div class="is-divider" data-content="OR"></div>
      Hello

      <div class="has-text-centered">
      <div dangerouslySetInnerHTML={{__html: post.html}} /></div>
      </div>
    </div>
  )
}

export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path} }) {
      html
      frontmatter {
        path
        title
      }
    }
  }
`
