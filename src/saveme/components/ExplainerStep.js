import React from "react";
import Subtitle from "./Subtitle";
import ContentView from "./ContentView";
import Paragraph from "./Paragraph";

function ExplainerStep({ step }) {
  return (
    <div className="explainer-step-container">
      <figure className="explainer-figure">
        <img
          className="explainer-image"
          src={step.image}
          alt="SaveMe app mockup"
        />
      </figure>
      <ContentView>
        <Subtitle color="light">{step.title}</Subtitle>
        {step.text.map((item) => (
          <Paragraph color="light">{item}</Paragraph>
        ))}
      </ContentView>
    </div>
  );
}

export default ExplainerStep;
