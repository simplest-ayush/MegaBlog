import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
// import store from "../store/store";

export default function Protected({ children, authentication = true }) {
  const [loader, setLoader] = useState(true);
  const navigate = useNavigate();
  const authStatus = useSelector((state) => state.auth.status);

  useEffect(() => {
    // by default authentication is true so below line evalutes to
    // true && false!== true which becomes true
    if (authentication && authStatus !== authentication) {
      navigate("/login");
    }
    //  false && false!== true which becomes false
    else if (!authentication && authStatus !== authentication) {
      navigate("/");
    }

    // we can implement the above logic without the use of authentication as
    // if(authStatus===true){
    //     navigate("/");
    // }
    // else if(authStatus===false){
    //     navigate("/login");
    // }

    setLoader(false);
  }, [navigate, authStatus, authentication]);
  return loader ? <h1>Loading...</h1> : <>{children}</>;
}
