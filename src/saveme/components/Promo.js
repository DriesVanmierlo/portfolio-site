import React from "react";
import ContentView from "./ContentView";

function Promo() {
  return (
    <div className="content-container section">
      <ContentView>
        <iframe
          title="SaveMe-promovideo"
          className="saveme-promovideo"
          src="https://player.vimeo.com/video/837583683"
          frameBorder="0"
          allowFullScreen
        />
      </ContentView>
    </div>
  );
}

export default Promo;
