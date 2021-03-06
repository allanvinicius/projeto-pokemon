import styled from "styled-components";

export const SectionPokemons = styled.section`
  padding-bottom: 8.8rem;
  overflow: hidden;

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
      filter: grayscale(100%);
      opacity: 0.6;
      transition: all 0.3s ease;

      &:hover {
        opacity: 1;
        filter: grayscale(0);
        transition: all .3s ease;

        span {
          color: #3e75c3;
        }
      }

      &.active {
        opacity: 1;
        filter: grayscale(0);
        transition: all .3s ease;

        span {
          font-weight: 600;
          font-size: 15px;
          line-height: 2.2rem;
          color: #3e75c3;
        }
      }

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

          &.active {
            opacity: 1;
            filter: grayscale(0);
            transition: all .3s ease;

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
        font-family: "Montserrat";
        font-weight: 600;
        font-size: 1.8rem;
        line-height: 2.7rem;
        color: #4d5053;
        margin-left: 0.6rem;
      }
    }

    .select-custom {
      position: relative;
      display: none;
      width: 100%;
      margin-top: 3.2rem;
      margin-bottom: 4rem;

      &.active {
        .btn-select {
          border-radius: 0.5rem 0.5rem 0 0;
        }

        .drop-types {
          opacity: 1;
          pointer-events: all;
        }
      }

      .btn-select {
        width: 100%;
        height: 5.6rem;
        border: 1px solid #a0afba;
        border-radius: 1rem;

        display: flex;
        align-items: center;
        padding: 0 2.2rem;
        background: url("/assets/arrow-down-select.svg") no-repeat right 21px
          center;

        span {
          color: #7a7d80;
          opacity: 0.6;
          margin-right: 0.4rem;
          font-weight: 500;
        }

        strong {
          color: #7a7d80;
          font-weight: 600;
        }
      }

      .drop-types {
        opacity: 0;
        pointer-events: none;
        position: absolute;
        top: 5.6rem;
        left: 0;
        width: 100%;
        overflow-y: auto;
        height: 22.3rem;
        border: 1px solid #a0afba;
        border-top: 0;
        padding: 2.1rem;
        background-color: #fff;
        border-radius: 0 0 0.5rem 0.5rem;
        z-index: 3;
        transition: all 0.3s ease;

        &::-webkit-scrollbar {
          width: 5px;
          background-color: transparent;
        }

        &::-webkit-scrollbar-thumb {
          background-color: #3e75c3;
          border-radius: 5px;
        }

        &::-webkit-scrollbar-track {
          background-color: transparent;
        }

        li {
          margin-bottom: 2rem;

          &:last-child {
            margin-bottom: 0;
          }

          .all {
            display: flex;

            .icone {
              margin-right: 2rem;
            }

            span {
              font-size: 1.5rem;
              font-weight: 600;
              line-height: 2.2rem;
              color: #3e75c3;
            }
          }

          .btn-type {
            display: flex;
            align-items: center;
            width: 100%;

            .icone {
              margin-right: 2rem;
            }

            &.normal {
              span {
                color: #a0a29f;
                font-size: 1.5rem;
                font-weight: 600;
                line-height: 2.2rem;
              }
            }

            &.fighting {
              span {
                color: #c44d61;
                font-size: 1.5rem;
                font-weight: 600;
                line-height: 2.2rem;
              }
            }

            &.flying {
              span {
                color: #a6bbe8;
                font-size: 1.5rem;
                font-weight: 600;
                line-height: 2.2rem;
              }
            }

            &.poison {
              span {
                color: #ac6aca;
                font-size: 1.5rem;
                font-weight: 600;
                line-height: 2.2rem;
              }
            }

            &.ground {
              span {
                color: #ce8056;
                font-size: 1.5rem;
                font-weight: 600;
                line-height: 2.2rem;
              }
            }

            &.rock {
              span {
                color: #8bcec1;
                font-size: 1.5rem;
                font-weight: 600;
                line-height: 2.2rem;
              }
            }

            &.bug {
              span {
                color: #9bba48;
                font-size: 1.5rem;
                font-weight: 600;
                line-height: 2.2rem;
              }
            }

            &.ghost {
              span {
                color: #616eb7;
                font-size: 1.5rem;
                font-weight: 600;
                line-height: 2.2rem;
              }
            }

            &.steel {
              span {
                color: #6594a1;
                font-size: 1.5rem;
                font-weight: 600;
                line-height: 2.2rem;
              }
            }

            &.fire {
              span {
                color: #f66d6d;
                font-size: 1.5rem;
                font-weight: 600;
                line-height: 2.2rem;
              }
            }

            &.water {
              span {
                color: #88a3d4;
                font-size: 1.5rem;
                font-weight: 600;
                line-height: 2.2rem;
              }
            }

            &.grass {
              span {
                color: #73b861;
                font-size: 1.5rem;
                font-weight: 600;
                line-height: 2.2rem;
              }
            }

            &.electric {
              span {
                color: #eed967;
                font-size: 1.5rem;
                font-weight: 600;
                line-height: 2.2rem;
              }
            }

            &.psychic {
              span {
                color: #eb8b85;
                font-size: 1.5rem;
                font-weight: 600;
                line-height: 2.2rem;
              }
            }

            &.ice {
              span {
                color: #8bcec1;
                font-size: 1.5rem;
                font-weight: 600;
                line-height: 2.2rem;
              }
            }

            &.dragon {
              span {
                color: #2c6ac1;
                font-size: 1.5rem;
                font-weight: 600;
                line-height: 2.2rem;
              }
            }

            &.dark {
              span {
                color: #595761;
                font-size: 1.5rem;
                font-weight: 600;
                line-height: 2.2rem;
              }
            }

            &.fairy {
              span {
                color: #e296e1;
                font-size: 1.5rem;
                font-weight: 600;
                line-height: 2.2rem;
              }
            }
          }
        }
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

  @media (max-width: 1200px) {
    .list-types {
      max-width: 19rem;
    }
  }

  @media (max-width: 1050px) {
    .list-types {
      max-width: 16rem;
    }

    .list-pokemons {
      padding-left: 4rem;

      .grid-pokemons {
        column-gap: 2rem;
        row-gap: 2rem;
      }
    }
  }

  @media (max-width: 990px) {
    .list-types {
      display: none;
    }

    .list-pokemons {
      padding-left: 0;
      max-width: 100%;

      .top {
        justify-content: center;
      }

      .select-custom {
        display: block;
      }
    }
  }

  @media (max-width: 600px) {
    padding-bottom: 4rem;

    .list-pokemons {
      padding-top: 4rem;

      .grid-pokemons {
        grid-template-columns: 1fr;
        margin-top: 4rem;
        max-width: 29rem;
        margin: 0 auto;
      }

      .load {
        margin-top: 4rem;
      }
    }
  }
`;
