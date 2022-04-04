import styled from "styled-components";

export const SectionHeader = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding-top: 5.6rem;
  padding-bottom: 5.6rem;
  z-index: 2000;

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  span {
    font-weight: 400;
    font-size: 1.3rem;
    line-height: 1.6rem;
    color: #ffffff;

    strong {
        font-weight: 700;
        color: #ffffff;
    }
  }
`;
