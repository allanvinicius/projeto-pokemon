import styled from "styled-components";

export const FooterSection = styled.footer`
  padding-top: 6.7rem;
  padding-bottom: 6.7rem;
  background-color: #3f5db3;

  .container {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
  }

  .left {
    width: 100%;
    max-width: 28.2rem;

    strong {
      font-weight: 700;
      font-size: 1.8rem;
      line-height: 3.2rem;
      color: #ffffff;
    }

    p {
      font-weight: 500;
      font-size: 1.4rem;
      line-height: 2.5rem;
      color: rgba(255, 255, 255, 0.8);
    }
  }
`;
