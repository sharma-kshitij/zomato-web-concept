import '../assets/styles/Navbar.css'
import { GiHamburgerMenu } from 'react-icons/gi'

const Navbar = () => {
  return (
    <div className="navbar">
      <a className="navbar__logo" href="/">zomato</a>
      <div className="navbar__menu">
        <a className='navbar__signinButton ' href="/sign-in">Sign in</a>
        <a className='navbar__registerButton' href="/register">Register</a>
      </div>
      <span className='navbar__hamburgerMenuIcon'>
        <GiHamburgerMenu />
      </span>
    </div>
  )
}

export default Navbar