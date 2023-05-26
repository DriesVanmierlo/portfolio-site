import React from "react";
import ContentView from "./ContentView";
import Title from "./Title";
import Paragraph from "./Paragraph";

function Why() {
  return (
    <div className="section content-container">
      <ContentView>
        <Title>Waarom bestaat deze app?</Title>
        <Paragraph>
          Er zijn genoeg bronnen die ons vertellen dat er nog steeds een grote
          problematiek is rond seksuele intimidatie en seksueel geweld.
        </Paragraph>
        <Paragraph>
          Uit de{" "}
          <a className="saveme-link"
            href="https://www.belspo.be/belspo/brain-be/projects/FinalReports/UN-MENAMAIS_FinalRep_v2.pdf"
            target="_blank"
            rel="noreferrer"
          >
            UN-MENAMAIS-studie
          </a>
          , waarin meer dan 5.000 Belgen bevraagd werden, kunnen we het volgende
          afleiden:
        </Paragraph>
        <div className="info-list-container">
          <div className="info-cards-container">
            <div className="why-info-card">
              <Paragraph>
                64% van de personen tussen 16 en 69 jaar is ooit in contact
                gekomen met seksueel grensoverschrijdend gedrag. 80% van de
                bevraagde vrouwen gaf dit aan en 50% van de bevraagde mannen.
              </Paragraph>
            </div>
            <div className="why-info-card">
              <Paragraph>
                Bij 16% van de vrouwen en 5% van de mannen ging het zelfs om
                verkrachting.
              </Paragraph>
            </div>
          </div>
          <div className="info-cards-container">
            <div className="why-info-card">
              <Paragraph>
                42% van de vrouwen en 19% van de mannen maakte een vorm van
                hands-on (fysiek) seksueel grensoverschrijdend gedrag mee.
              </Paragraph>
            </div>
            <div className="why-info-card">
              <Paragraph>
                De afgelopen 12 maanden kreeg 10% van de vrouwen en 6% van de
                mannen te maken met een vorm van hands-on seksueel
                grensoverschrijdend gedrag.
              </Paragraph>
            </div>
          </div>
        </div>
      </ContentView>
    </div>
  );
}

export default Why;
