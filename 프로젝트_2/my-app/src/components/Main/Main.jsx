import { useState, useEffect, useContext } from "react"
import axios from "axios"
import UserContext from "../../context/UserContext"
import Posts from "./posts/Posts"
import About from "./about/About"
import "./main.css"

export default function Main() {
  const { isLogin } = useContext(UserContext)
  const [posts, setPosts] = useState()

  useEffect(()=>{
    axios
    .get('https://raw.githubusercontent.com/weniv/react-blog/react/public/posts.json')
    .then(json => {
      console.log(json)
      setPosts(json)
    })
  }, [])
  

  return (
    <main>
      <div class="max-width">
        <h2 class="a11y-hidden">Post</h2>
        <ul class="posts">
          {/* components array로 생성 */}
          <Posts />
        </ul>
        {isLogin ? <About /> : <></>}
      </div>
    </main>
  )
}