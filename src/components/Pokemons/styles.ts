import styled from "styled-components";

export const RepositoryList = styled.div`
  border-right: 1px solid #EFF3F6;
  width: 100%;
  max-width: 25.9rem;
  padding-top: 7rem;

  .all {
    display: flex;
    align-items: center;
    margin-bottom: 4rem;

    .icone {
      margin-right: 2.5rem;
      width: 2rem;
      height: 2rem;
    }

    span {
      font-weight: 500;
      font-size: 15px;
      line-height: 2.2rem;
      color: #3E75C3;
    }
  }
  
  ul {
    li {
      margin-bottom: 4rem;

      &:last-child {
        margin-bottom: 0;
      }

      .btn-type {
        display: flex;
        align-items: center;
        filter: grayscale(100%);
        opacity: 0.6;
        transition: all 0.3s ease;

        &:hover {
          filter: grayscale(0);
          opacity: 1;
        }

        .icone {
          margin-right: 2.5rem;
          width: 2rem;
          height: 2rem;
        }

        span {
          font-weight: 500;
          font-size: 1.5rem;
          line-height: 2.2rem;
          color: #acb9c1;
        }
      }
    }
  }
`;

export const AreaPokemon = styled.div`
  padding-top: 7rem;

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
      .btn-pokemon {
        width: 100%;
        max-width: 100%;
        padding: 1.3rem 2.9rem 2.4rem 2.8rem;
        box-shadow: 0px 10px 51px -5px rgba(183, 189, 193, 0.3);
        background-color: #ffffff;
        border-radius: 12px;
        transition: all .3s ease;

        &.normal {
          .image {
            &::before {
              background-color: rgba(141, 141, 141, 0.2);
            }
          }
        }

        &.fighting {
          .image {
            &::before {
              background-color: rgba(196, 77, 97, 0.2);
            }
          }
        }

        &.flying {
          .image {
            &::before {
              background-color: rgba(166, 187, 232,0.2);
            }
          }
        }

        &.poison {
          .image {
            &::before {
              background-color: rgba(172, 106, 202, 0.2);
            }
          }
        }

        &.ground {
          .image {
            &::before {
              background-color: rgba(203, 119, 74, 0.2);
            }
          }
        }

        &.rock {
          .image {
            &::before {
              background-color: rgba(134, 203, 190, 0.2);
            }
          }
        }

        &.bug {
          .image {
            &::before {
              background-color: rgba(131, 158, 56, 0.2);
            }
          }
        }

        &.ghost {
          .image {
            &::before {
              background-color: rgba(97, 110, 183,0.2);
            }
          }
        }

        &.steel {
          .image {
            &::before {
              background-color: rgba(101, 148, 161,0.2);
            }
          }
        }

        &.fire {
          .image {
            &::before {
              background-color: #FFEBCA;
            }
          }
        }

        &.water {
          .image {
            &::before {
              background-color: #DFECF5;
            }
          }
        }

        &.grass {
          .image {
            &::before {
              background-color: #D6EBDC;
            }
          }
        }
        
        &.electric {
          .image {
            &::before {
              background-color: rgba(141, 141, 141, 0.2);
            }
          }
        }

        &.psychic {
          .image {
            &::before {
              background-color: rgba(235, 140, 133, 0.2);
            }
          }
        }

        &.ice {
          .image {
            &::before {
              background-color: rgba(139, 206, 193,0.2);
            }
          }
        }

        &.dragon {
          .image {
            &::before {
              background-color: rgba(44, 106, 193,0.2);
            }
          }
        }

        &.dark {
          .image {
            &::before {
              background-color: rgba(89, 87, 97,0.2);
            }
          }
        }

        &.fairy {
          .image {
            &::before {
              background-color: rgba(221, 138, 220, 0.2);
            }
          }
        }

        &:hover {
          box-shadow: 0px 12px 40px -5px rgba(90,96,100,0.3);
          bottom: 2px;
        }

        .image {
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          z-index: 2;
          margin: 0 auto;
          width: 20rem;
          height: 20rem;

          &::before {
            content: "";
            width: 16.5rem;
            height: 16.5rem;
            border-radius: 50%;
            position: absolute;
            z-index: -1;
          }
        }

        .desc {
          display: flex;
          align-items: flex-end;
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


