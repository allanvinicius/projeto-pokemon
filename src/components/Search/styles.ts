import styled from "styled-components";

export const SectionSearch = styled.section`
  padding-top: 11.9rem;
  padding-bottom: 9.1rem;
  margin-top: -28.8rem;
  position: relative;
  z-index: 1;

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  h2 {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 700;
    font-size: 3.2rem;
    line-height: 3.9rem;
    letter-spacing: -0.01em;
    color: #2f3133;
    max-width: 26.5rem;
  }

  .search {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: 40.3rem;
    height: 5.6rem;
    background-color: #ffffff;
    border-radius: 122px;
    padding-right: 0.7rem;
    padding-left: 2.5rem;

    input {
      flex: 1;
      font-weight: 400;
      font-size: 1.5rem;
      line-height: 2.2rem;
      color: #a0afba;

      &::placeholder {
        color: #A0AFBA;
      }
    }

    button {
      width: 4.2rem;
      height: 4.2rem;
      background-color: rgba(225, 233, 239, 0.1);
      border: 1px solid #e1e9ef;
      border-radius: 50%;

      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;
