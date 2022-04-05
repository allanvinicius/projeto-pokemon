import styled, { keyframes } from "styled-components";

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
        width: 100%;
        max-width: 100%;
        padding: 1.3rem 2.9rem 2.4rem 2.8rem;
        box-shadow: 0px 10px 51px -5px rgba(183, 189, 193, 0.3);
        background-color: #ffffff;
        border-radius: 12px;
        transition: all .3s ease;

        &:hover {
          box-shadow: 0px 12px 40px -5px rgba(90,96,100,0.3);
          bottom: 2px;
        }

        .image {
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto;
          width: 20rem;
          height: 20rem;
        }

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

  .load {
    width: 100%;
    max-width: 19.6rem;
    height: 4.5rem;
    background: rgba(63, 93, 179, 0.1);
    border-radius: 6px;

    display: flex;
    align-items: center;
    justify-content: center;

    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 1.4rem;
    line-height: 1.7rem;
    letter-spacing: -0.01em;
    color: #3F5DB3;
    margin: 0 auto;
    margin-top: 6.8rem;
    transition: all .3s ease;

    &:hover {
      background-color: #3F5DB3;
      color: #FFFFFF;
    }
  }


/* @keyframes fade {
    0 % {
      opacity: 0;
    transform: translateY(20px);
  }
  100 % {
    opacity: 1;
  transform: translateY(0px);
  }
} */
`;

