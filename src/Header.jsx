import './Header.css'
import { Input } from 'semantic-ui-react'
function Header(props) {
  return (
    <div className="header">
      <div className="header-left">
        <h1>{props.text}</h1>
      </div>
      <div className="bar">
        <input placeholder="Search..." className="search mx-4" />
      </div>
      <div className="header-right">
        <span className="post">Post</span>
        <span className="login">Log in</span>
      </div>
    </div>

  )
}
export default Header