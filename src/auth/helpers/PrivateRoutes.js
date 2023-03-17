import React from "react";
import { Route, Navigate } from "react-router-dom";

import { isAuthenticated } from "./index";

const PrivateRoutes = ({ children }) => {
  // return (



  //          isAuthenticated()
  //         ? (
  //             <Component {...props} />
  //         )
  //         : (
  //             <Navigate 
  //               to = {{
  //                 pathname: "/signin",
  //                 state: { from: props.location},
  //               }}
  //             />

  //         )}
  //     />

  // );



  if (isAuthenticated()) {
    return children
  }
  else {
    return <Navigate
      to={{
        pathname: "/signin"
        
      }}
    />
  }
};

export default PrivateRoutes;
