import styled from "styled-components";

export const SectionBanner = styled.section`
  position: relative;
  width: 100%;
  height: 99.4rem;

  .swiper {
    width: 100%;
    height: 100%;
    overflow: hidden;

    .swiper-slide {
      position: relative;

      &::after {
        content: "";
        position: absolute;
        background-color: #eff3f6;
        width: 100%;
        height: 28.8rem;
        left: 0;
        bottom: 0;
        pointer-events: none;
        z-index: 0;
      }

      &.blue {
        .area-slide {
          background: url("/assets/bg-blue.svg") no-repeat center center;
          background-size: cover;

          .texto {
            .image {
              .poke {
                top: 5% !important;
              }
            }
          }

          .explore {
            .left {
              .icon {
                background-color: rgba(175, 192, 227, 0.3);
              }
            }
          }
        }
      }

      .area-slide {
        padding-top: 14.7rem;
        height: 70.6rem;
        background: url("/assets/bg-red.svg") no-repeat center center;
        background-size: cover;
        position: relative;

        .container {
          position: relative;
          height: 100%;
        }

        .texto {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          position: relative;
          z-index: 1;

          .tag {
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: #ffffff;
            border-radius: 244px;
            width: 100%;
            max-width: 12.1rem;
            height: 3.4rem;

            .icon {
              display: flex;
              align-items: center;
              justify-content: center;
              width: 2.6rem;
              height: 2.6rem;
              background-color: rgba(194, 0, 1, 0.2);
              border-radius: 50%;
              margin-right: 0.8rem;
            }

            span {
              font-weight: 600;
              font-size: 1.5rem;
              line-height: 2.2rem;
              color: #c20001;
            }
          }

          h1 {
            font-weight: 700;
            font-size: 6.4rem;
            line-height: 7.8rem;
            text-align: center;
            letter-spacing: -0.01em;

            color: #ffffff;
            margin-top: 2.9rem;
          }

          p {
            font-weight: 500;
            font-size: 1.8rem;
            line-height: 2.7rem;
            text-align: center;

            color: #ffffff;
            margin-top: 0.8rem;
          }

          .image {
            position: relative;
            width: 100%;
            max-width: 79.8rem;
            margin: 0 auto;
            margin-top: 10rem;

            .luzes {
              position: absolute;
              top: 18px;
              right: 50%;
              z-index: 2;
              margin-right: -8.5rem;
            }

            .poke {
              top: 25% !important;
              left: 13px !important;
            }
          }
        }

        .explore {
          position: absolute;
          bottom: 8rem;
          display: flex;
          align-items: flex-end;
          justify-content: space-between;

          .left {
            display: flex;
            align-items: center;
            transform: rotate(-90deg);
            position: relative;
            top: -2rem;
            left: -4rem;

            .icon {
              width: 4rem;
              height: 4rem;
              background-color: #c90c0c;
              border-radius: 50%;

              display: flex;
              align-items: center;
              justify-content: center;
              transform: rotate(90deg);
            }

            small {
              font-weight: 500;
              font-size: 1.3rem;
              line-height: 2rem;
              color: #ffffff;
              margin-left: 3rem;
            }
          }

          .pagination {
            position: absolute;
            z-index: 9;
            right: 0;
            left: initial;
            width: fit-content;
            bottom: 7.7rem;

            .swiper-pagination-bullet {
              background: #ffff;
              width: 2rem;
              height: 2rem;
              border-radius: 50%;
            }
          }
        }
      }
    }
  }
`;

export const SectionPokemons = styled.section`
  padding-bottom: 8.8rem;

  .container {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  }

  .list-types {
    border-right: 1px solid #eff3f6;
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
        font-weight: 600;
        font-size: 15px;
        line-height: 2.2rem;
        color: #3e75c3;
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

            &.normal {
              span {
                color: #a0a29f;
              }
            }

            &.fighting {
              span {
                color: #c44d61;
              }
            }

            &.flying {
              span {
                color: #a6bbe8;
              }
            }

            &.poison {
              span {
                color: #ac6aca;
              }
            }

            &.ground {
              span {
                color: #ce8056;
              }
            }

            &.rock {
              span {
                color: #8bcec1;
              }
            }

            &.bug {
              span {
                color: #9bba48;
              }
            }

            &.ghost {
              span {
                color: #616eb7;
              }
            }

            &.steel {
              span {
                color: #6594a1;
              }
            }

            &.fire {
              span {
                color: #f66d6d;
              }
            }

            &.water {
              span {
                color: #88a3d4;
              }
            }

            &.grass {
              span {
                color: #73b861;
              }
            }

            &.electric {
              span {
                color: #eed967;
              }
            }

            &.psychic {
              span {
                color: #eb8b85;
              }
            }

            &.ice {
              span {
                color: #8bcec1;
              }
            }

            &.dragon {
              span {
                color: #2c6ac1;
              }
            }

            &.dark {
              span {
                color: #595761;
              }
            }

            &.fairy {
              span {
                color: #e296e1;
              }
            }
          }

          .icone {
            margin-right: 2.5rem;
            width: 2rem;
            height: 2rem;
          }

          span {
            font-weight: 600;
            font-size: 1.5rem;
            line-height: 2.2rem;
            color: #acb9c1;
            transition: all 0.3s ease;
          }
        }
      }
    }
  }

  .list-pokemons {
    padding-top: 6.3rem;
    width: 100%;
    max-width: 90.4rem;

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

    .grid-pokemons {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      column-gap: 3.2rem;
      row-gap: 3.2rem;
      margin-top: 6.3rem;
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

      font-family: "Montserrat";
      font-style: normal;
      font-weight: 600;
      font-size: 1.4rem;
      line-height: 1.7rem;
      letter-spacing: -0.01em;
      color: #3f5db3;
      margin: 0 auto;
      margin-top: 6.8rem;
      transition: all 0.3s ease;

      &:hover {
        background-color: #3f5db3;
        color: #ffffff;
      }
    }
  }
`;
