import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import * as profileService from '../../services/profileService'
import * as authService from '../../services/authService'
const ProfileDetail = () => {
  // const { state } = useLocation()
  // const [coins, setCoins] = useState([])
  // const [user, setUser] = useState(authService.getUser())
  // useEffect(() => {
  //   const showMyCoins = async () => {
  //     const myCoins = await profileService.showMyCoins(user.profile)
  //     setCoins(myCoins)
  //   }
  //   showMyCoins()
  // }, [user.profile])
  return (
    <>
    {/* <h1>Profile Details</h1>
    {coins.map(coin =>
      <p key={coin.id}>{coin.name}</p>
    )} */}
    </>
  );
}
 
export default ProfileDetail;