import React from 'react'

import '../styles/styles.sass'

const Nav = () => {
  return (
    <div style={{"margin-top":"1rem", "margin-bottom":"2rem"}}>
    <div class="navbar">
    <div class="navbar-brand">
      <a class="navbar-item is-size-5" href="/"><span className="tag is-medium is-light"><code>Home</code></span></a>
      <a class="navbar-item is-size-5" href="/work"><span className="tag is-medium is-light"><code>Work</code></span></a>
      <a class="navbar-item is-size-5" href="/blog"><span className="tag is-medium is-light"><code>Blog</code></span></a>
      <a class="navbar-item is-size-5" href="/projects"><span className="tag is-medium is-light"><code>Projects</code></span></a>
      <a class="navbar-item is-size-5" href="/senioryear"><span className="tag is-medium is-light"><code>Senior year</code></span></a>
    </div>
    </div>
    </div>
  )
}

export default Nav
