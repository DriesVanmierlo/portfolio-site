import styled from "styled-components";

const Title = styled.h2`
  font-family: "poppins", sans-serif;
  font-weight: 700;
  font-size: 1.5rem;
  margin-top: 0px;
  ${(props) =>
    props.color === "light"
      ? `color: var(--neutral_100)`
      : `color: var(--neutral_900)`}
`;

export default Title;
