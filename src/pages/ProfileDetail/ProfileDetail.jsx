import { useEffect } from "react";
import { useLocation } from "react-router-dom";
const ProfileDetail = () => {
  const { state } = useLocation()
  return (
    <>
    <h1>Profile Details</h1>
    <p>{state.coins}</p>
    </>
  );
}
 
export default ProfileDetail;