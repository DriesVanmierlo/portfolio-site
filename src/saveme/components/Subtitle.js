import styled from "styled-components";

const Subtitle = styled.h3`
  font-family: "poppins", sans-serif;
  font-weight: 500;
  font-size: 1.3rem;
  margin-top: 0px;
  ${(props) =>
    props.color === "light"
      ? `color: var(--neutral_100)`
      : `color: var(--neutral_900)`}
`;

export default Subtitle;
