import React from "react";
import person from "./../img/person.jpg";

function Header(){
  return (
    <React.Fragment>
      <h1>Help Queue</h1>
      <img src={person} alt="person" />
    </React.Fragment>  );
}

export default Header;