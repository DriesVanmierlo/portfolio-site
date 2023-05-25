import React from "react";
import ContentView from "./ContentView";
import Title from "./Title";
import Paragraph from "./Paragraph";
import content from "../data/content.json";
import Question from "./Question";

function FAQ() {
  return (
    <div className="section">
      <ContentView>
        <Title>Veelgestelde vragen</Title>
        <Paragraph>
          Hieronder staan de meest voorkomende vragen met hun antwoord.
        </Paragraph>
        {content.faq.map((item) => (
          <Question question={item} />
        ))}
      </ContentView>
    </div>
  );
}

export default FAQ;
