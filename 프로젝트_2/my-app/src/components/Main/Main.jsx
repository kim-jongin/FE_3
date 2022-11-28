import React from 'react'
import Posts from "./posts/Posts"
import About from "./about/About"

export default function Main() {
  return (
    <main>
      <div class="max-width">
        <h2 class="a11y-hidden">Post</h2>
        <ul class="posts">
            {/* components array로 생성 */}
            <Posts />
        </ul>
        <About />
      </div>
    </main>
  )
}