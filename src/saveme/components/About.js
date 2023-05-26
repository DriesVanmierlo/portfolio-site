import React from "react";
import ContentView from "./ContentView";
import Title from "./Title";
import Paragraph from "./Paragraph";
import picture from "../assets/images/profile_transparent.png";

function About() {
  return (
    <div className="section content-container" id="over-saveme">
      <ContentView>
        <Title>Over SaveMe</Title>
        <Paragraph>
          Ik ben Dries, de bedenker en maker van SaveMe. Op dit moment is deze
          app nog enkel mijn eindwerk. Dat betekent dat deze app nog niet echt
          beschikbaar is voor iedereen.{" "}
        </Paragraph>
        <Paragraph>
          Mijn ambities zijn om hier wel een echt product van te maken. Hiervoor
          heb ik de steun van jullie nodig. Als we kunnen tonen dat wij hier
          veel belang aan hechten, maakt het mij des te makkelijker om verdere
          stappen te zetten. Houd zeker de social media pagina’s in de gaten om
          up-to-date te blijven met de vorderingen van dit project.
        </Paragraph>
        <Paragraph>Groetjes, Dries</Paragraph>
        <figure className="about-figure">
          <img className="about-image" src={picture} alt="Dries Vanmierlo" />
        </figure>
      </ContentView>
    </div>
  );
}

export default About;
