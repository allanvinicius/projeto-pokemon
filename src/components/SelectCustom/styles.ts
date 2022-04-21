import styled from "styled-components";

interface SelectProps {
  isOpen: boolean;
}

export const AreaSelect = styled.div<SelectProps>`
  position: relative;
  display: none;
  width: 100%;
  margin-top: 3.2rem;
  margin-bottom: 4rem;

  .btn-select {
    width: 100%;
    height: 5.6rem;
    border: 1px solid #a0afba;
    border-radius: 1rem;

    display: flex;
    align-items: center;
    padding: 0 2.2rem;
    background: url("/assets/arrow-down-select.svg") no-repeat right 21px center;

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
    opacity: ${(props) => (props.isOpen ? 1 : 0)};
    pointer-events:  ${(props) => (props.isOpen ? 'all' : 'none')};
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
    z-index: 2;

    li {
      margin-bottom: 2rem;

      &:last-child {
        margin-bottom: 0;
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
    }
  }
`;
