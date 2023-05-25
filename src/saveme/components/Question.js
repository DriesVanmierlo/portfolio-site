import React, { useState } from "react";
import Subtitle from "./Subtitle";
import Paragraph from "./Paragraph";
import { CaretDown, CaretLeft } from "@phosphor-icons/react";

function Question({ question }) {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <div className="question-container">
      <div className="question-header" onClick={() => setShowAnswer(!showAnswer)}>
        <Subtitle
          className="faq-question"
          
        >
          {question.question}
        </Subtitle>
        {showAnswer ? <CaretDown weight="bold" size={32} /> : <CaretLeft weight="bold" size={32} />}
      </div>

      {showAnswer && <Paragraph>{question.answer}</Paragraph>}
    </div>
  );
}

export default Question;
