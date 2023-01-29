import { Link } from 'react-router-dom'
import styles from './NavBar.module.css'
const NavBar = ({ user, handleLogout }) => {
  return (
    <nav>
      {user ?
        <ul className={styles['loggedin-container']}>
          <h2><li><Link to='/myWallet'>My Wallet</Link></li></h2>
          <h2><li><Link to='/coins'>All Coins</Link></li></h2>
          <h2><li><Link to="/changePassword">Change Password</Link></li></h2>
          <h2><li><Link to="" onClick={handleLogout}>LOG OUT</Link></li></h2>
        </ul>
      :
        <ul className={styles['logout-container']}>
          <h2><li><Link to="/login">Log In</Link></li></h2>
          <h2><li><Link to="/signup">Sign Up</Link></li></h2>
        </ul>
      }
    </nav>
  )
}

export default NavBar
