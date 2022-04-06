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
  }

  .left {
    padding-top: 7rem;
    width: 100%;
    max-width: 25.9rem;
    padding-right: 14.6rem;
    border-right: 1px solid #EFF3F6;
  }

  .right {
    padding-top: 7rem;
    padding-left: 7.5rem;
    width: 100%;
    max-width: 90.4rem;
  }
`;
