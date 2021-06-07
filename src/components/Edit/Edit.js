import React from 'react'
import EditImg from "../../images/edit.png"
import { Helmet } from "react-helmet";
export const Edit = () => {
    return (
      <div className="edit_container">
        <Helmet>
          <meta charSet="utf-8" />
          <title>BetterMaps - Edit</title>
        </Helmet>
        <img src={EditImg} />
      </div>
    );
}
