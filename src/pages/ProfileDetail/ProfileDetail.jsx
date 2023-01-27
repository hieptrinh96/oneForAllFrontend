import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import * as profileService from '../../services/profileService'
const ProfileDetail = () => {
  const { state } = useLocation()
  const [coins, setCoins] = useState()
  // useEffect(() => {
  //   const showMyCoins = async () => {
  //     const myCoins = await profileService.showMyCoins(state._id)
  //     setCoins(myCoins)
  //   }
  //   showMyCoins()
  // }, [state])
  return (
    <>
    <h1>Profile Details</h1>
    <p>{state.coins}</p>
    <p>{console.log(state.coins)}</p>
    </>
  );
}
 
export default ProfileDetail;