import { Link } from 'react-router-dom'
import styles from './NavBar.module.css'
const NavBar = ({ user, handleLogout }) => {
  return (
    <nav>
      {user ?
        <ul>
          <li>Welcome, {user.name}</li>
          <li><Link to="/profiles">Profiles</Link></li>
          <li><Link to='/myCoins'>My Coins</Link></li>
          <li><Link to='/coins'>All Coins</Link></li>
          <li><Link to="" onClick={handleLogout}>LOG OUT</Link></li>
          <li><Link to="/changePassword">Change Password</Link></li>
        </ul>
      :
        <ul className={styles.logoutContainer}>
          <li><Link to="/login">Log In</Link></li>
          <li><Link to="/signup">Sign Up</Link></li>
        </ul>
      }
    </nav>
  )
}

export default NavBar
