import React, { useEffect } from "react";

import "./App.css";
import { RouterProvider } from "react-router-dom";
import routes from "./routes/routes";
import { onAuthStateChanged } from "firebase/auth";
import auth from "./firebase/firebase.config";
import { useDispatch } from "react-redux";

import { Toaster } from "react-hot-toast";
import { getUser, toggleLoading } from "./features/auth/authSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(getUser(user.email));
       
      } else {
        dispatch(toggleLoading());
      }
    });
  }, [dispatch]);
  return (
    <div className="App">
      <RouterProvider router={routes} />
      <Toaster />
    </div>
  );
}

export default App;
