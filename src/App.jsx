// npm modules
import { useEffect, useState } from 'react'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'

// page components
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Landing from './pages/Landing/Landing'
import Profiles from './pages/Profiles/Profiles'
import ChangePassword from './pages/ChangePassword/ChangePassword'
import Coins from './pages/Coins/Coins'
import CoinDetails from './pages/CoinDetails/CoinDetails'
import MyWallet from './pages/MyWallet/MyWallet'
import ProfileDetail from './pages/ProfileDetail/ProfileDetail'

// components
import NavBar from './components/NavBar/NavBar'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'

// services
import * as authService from './services/authService'
import * as coinService from './services/coins-api'
import * as profileService from './services/profileService'
// styles
import './App.css'

const App = () => {
  const [user, setUser] = useState(authService.getUser())
  const [coins, setCoins] = useState([])
  const navigate = useNavigate()

  const handleLogout = () => {
    authService.logout()
    setUser(null)
    navigate('/')
  }

  const handleSignupOrLogin = () => {
    setUser(authService.getUser())
  }

  const handleAddCoin = async (coinData) => {
    const newCoin = await coinService.addCoinToWallet(coinData)
    console.log(coinData)
    setCoins([...coins, newCoin])
    navigate('/myWallet')
  }

  const handleDeleteCoin = async (id) => {
    const deletedCoin = await profileService.deleteCoin(id)
    setCoins(
      coins.filter((coin) => coin._id !== deletedCoin._id)
    )
    navigate('/myWallet')
  }

    useEffect(() => {
    const showMyCoins = async () => {
      const myCoins = await profileService.showMyCoins(user.profile)
      setCoins(myCoins)
    }
    if (user) showMyCoins()
  }, [user])

  return (
    <>
      <NavBar user={user} handleLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Landing user={user} />} />
        <Route
          path="/signup"
          element={<Signup handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
          path="/login"
          element={<Login handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
          path="/profiles"
          element={
            <ProtectedRoute user={user}>
              <Profiles />
            </ProtectedRoute>
          }
        />
        <Route
          path="/change-password"
          element={
            <ProtectedRoute user={user}>
              <ChangePassword handleSignupOrLogin={handleSignupOrLogin} />
            </ProtectedRoute>
          }
        />
        <Route
          path='/coins'
          element={
            <Coins />
          } />
          <Route
            path='/coins/coinsDetail'
            element={
              <CoinDetails 
              handleAddCoin={handleAddCoin}
              handleDeleteCoin={handleDeleteCoin}
              />
            }
          />
          <Route 
          path='/myWallet'
          element={
            <ProtectedRoute user={user}>
              <MyWallet coins={coins}/>
            </ProtectedRoute>
          }
          />
          <Route 
          path='/profile-detail'
          element={
            <ProtectedRoute user={user}>
              <ProfileDetail />
            </ProtectedRoute>
          }
          />
      </Routes>
    </>
  )
}

export default App
