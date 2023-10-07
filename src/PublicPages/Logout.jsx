import React, { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import {UserContext} from "../App"

export default function Logout() {
    const {state, dispatch} = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    const logoutUser = async () => {
      try {
        // Clear the authentication token from local storage
        localStorage.removeItem("accessToken");

        // Update the user context to indicate that the user is no longer logged in
        dispatch({ type: "USER", payload: false });

        // Redirect the user to the login page
        navigate("/login");
      } catch (error) {
        // Handle any errors that occur during the logout process
        console.error("Logout error:", error);      }
    };

    logoutUser();
  }, [dispatch, navigate]);

  return (
    <div>
      <p>Logging out...</p>
    </div>
  );
}