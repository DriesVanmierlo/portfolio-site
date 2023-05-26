import styled from "styled-components";

const Paragraph = styled.p`
  font-family: "poppins", sans-serif;
  font-weight: 300;
  font-size: 0.9rem;
  line-height: 1.1rem;
  max-width: 600px;
  ${(props) =>
    props.color === "light"
      ? `color: var(--neutral_100)`
      : `color: var(--neutral_900)`}
`;

export default Paragraph;
