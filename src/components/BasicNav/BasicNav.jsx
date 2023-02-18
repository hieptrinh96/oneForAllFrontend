import { Link } from 'react-router-dom'
import styles from './BasicNav.module.css'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Offcanvas from 'react-bootstrap/Offcanvas'
import Container from 'react-bootstrap/Container'

const BasicNav = ({ user, handleLogout }) => {
  return (
    <Navbar expand='false' bg='light' sticky='top' className='mb-3'>
      <Container fluid>
        <Navbar.Brand href='/'>OneForAll</Navbar.Brand>
        <Navbar.Toggle aria-controls='offcanvasNavbvar'/>
        <Navbar.Offcanvas placement='end'>
      {user ?
      <>
          <Offcanvas.Body>
        <Nav className='justify-content-end flex-grow-1 pe-3'>
          <Nav.Link href='/myWallet'>My Wallet</Nav.Link>
          <Nav.Link href='/coins'>All Coins</Nav.Link>
          <NavDropdown title='My Account' id='basic-nav-dropdown'>
          <NavDropdown.Item href="/changePassword">Change Password</NavDropdown.Item>
          <NavDropdown.Item href="" onClick={handleLogout}>Log Out</NavDropdown.Item>
        </NavDropdown>
        </Nav>
        </Offcanvas.Body>
      </>
      :
      <>
          <h2><li><Link to="/login">Log In</Link></li></h2>
          <h2><li><Link to="/signup">Sign Up</Link></li></h2>
      </>
      }
      </Navbar.Offcanvas>
      </Container>
  </Navbar>
  )
}

export default BasicNav
