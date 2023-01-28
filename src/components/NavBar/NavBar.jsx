import { Link } from 'react-router-dom'
import styles from './NavBar.module.css'
const NavBar = ({ user, handleLogout }) => {
  return (
    <nav>
      {user ?
        <ul className={styles['loggedin-container']}>
          <li><Link to='/myWallet'>My Wallet</Link></li>
          <li><Link to='/coins'>All Coins</Link></li>
          <li><Link to="/changePassword">Change Password</Link></li>
          <li><Link to="" onClick={handleLogout}>LOG OUT</Link></li>
        </ul>
      :
        <ul className={styles['logout-container']}>
          <li><Link to="/login">Log In</Link></li>
          <li><Link to="/signup">Sign Up</Link></li>
        </ul>
      }
    </nav>
  )
}

export default NavBar
