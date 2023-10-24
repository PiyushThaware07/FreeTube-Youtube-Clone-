import React from 'react';
// Icons
import { PiMonitorPlayFill } from "react-icons/pi";
import { FcGoogle } from "react-icons/fc";

// React Router DOM
import { useNavigate } from 'react-router-dom';

// Google Auth
import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';

// Redux 
import { addUser } from '../Redux/Slice/LoginSlice';
import { useDispatch } from 'react-redux';

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const login = useGoogleLogin({
    // onSuccess: tokenResponse => console.log(tokenResponse),
    onSuccess: async (response) => {
      try {
        const res = await axios.get(
          "https://www.googleapis.com/oauth2/v3/userinfo",
          {
            headers: {
              Authorization: `Bearer ${response.access_token}`,
            }
          }
        );

        dispatch(addUser(res.data));
        navigate(`/home`);
      }
      catch (error) {
        console.error("Failed to login", error);
      }
    }
  });


  return (
    <>
      <div className="h-screen w-screen flex flex-nowrap items-center justify-center">
        <div className="content flex flex-nowrap flex-col items-center justify-center">
          <h1 className='text-3xl font-semibold my-3 flex flex-nowrap items-center gap-2'><PiMonitorPlayFill className='text-purple-500' /> FreeTube</h1>
          {/* custom google login button */}
          <button
            type='button'
            className='px-5 py-3 border-2 rounded-full border-purple-500 font-semibold text-sm flex flex-nowrap items-center gap-2'
            onClick={() => login()}>Continue With <FcGoogle className='text-xl' /> </button>

        </div>
      </div>
    </>
  )
}
