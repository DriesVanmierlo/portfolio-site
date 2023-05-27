import React from "react";
import "./styles/notFoundScreen.css";

function NotFoundScreen() {
  return (
    <div className="notfound-container">
      <h1>404 - Deze pagina bestaat niet</h1>
      <p>Bedoelde je om naar een van de volgende websites gaan?</p>
      <div className="notfound-buttons-container">
        <a className="notfound-button" href="https://driesvanmierlo.be/">Dries Vanmierlo | portfolio</a>
        <a className="notfound-button" href="https://driesvanmierlo.be/saveme">SaveMe app website</a>
      </div>
    </div>
  );
}

export default NotFoundScreen;
