import styled from "styled-components";

export const AreaPokemon = styled.div`
  .top {
    display: flex;
    align-items: center;

    span {
      font-weight: 600;
      font-size: 1.8rem;
      line-height: 2.7rem;
      color: #4d5053;
      margin-left: 0.6rem;
    }
  }

  .grid-pokemon {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 3.2rem;
    row-gap: 3.2rem;
    margin-top: 6.3rem;

    li {
      button {
        width: 28rem;
        height: 30.4rem;
        padding: 1.3rem 2.9rem 2.4rem 2.8rem;
        background-color: #ffffff;
        box-shadow: 0px 10px 51px -5px rgba(183, 189, 193, 0.3);
        border-radius: 12px;

        .desc {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          margin-top: 3.2rem;

          .left-desc {
            width: 100%;
            max-width: 9.5rem;
            display: flex;
            align-items: flex-start;
            flex-direction: column;

            span {
              font-weight: 500;
              font-size: 1.3rem;
              line-height: 2rem;
              color: #7a7d80;
            }

            strong {
              font-family: "Montserrat";
              font-weight: 600;
              font-size: 1.8rem;
              line-height: 2.7rem;
              color: #2f3133;
              margin-top: 0.6rem;
            }
          }
        }
      }
    }
  }
`;
