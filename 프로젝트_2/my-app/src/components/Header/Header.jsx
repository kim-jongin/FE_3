import { Link } from "react-router-dom"

export default function Header() {
  return (
    <>
      <header>
        <div className="max-width">
          <h1>
            <Link to="/">
              <img src="./assets/Logo.svg" alt="My Blog" />
            </Link>
          </h1>
          <ul>
            {/* 로그인 */}
            <li className="profile-img">
              <Link to="/">
                <img src="./assets/profile.jpg" alt="My Page" />
              </Link>
            </li>
            <li>
              <Link to="/" className="button">
                <img src="./assets/icon-modify-white.svg" alt="" />
                <span>Write</span>
              </Link>
            </li>
            <li>
              <button className="button white">
                <img src="./assets/icon-logout.svg" alt="" />
                <span>Logout</span>
              </button>
            </li>
            {/* //로그인 */}
          </ul>
        </div>
      </header>
    </>
  )
}