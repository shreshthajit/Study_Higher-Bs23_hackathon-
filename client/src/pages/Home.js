import React,{useEffect} from 'react'
import Logout from '../components/Logout'
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("current-user")) {
      navigate("/");
    }
  }, []);
  return (
    <div>Home
      <Logout></Logout>
    </div>
  )
}

export default Home