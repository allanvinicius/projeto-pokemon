import styled from "styled-components";

interface Props {
    isOpen: boolean;
}

export const BoxModal = styled.div<Props>`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 2022;
    display: flex;
    align-items: center;
    justify-content: center;
    pointer-events: ${(props) => (props.isOpen ? 'initial' : 'none')};

    .overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 1;
        opacity: ${(props) => (props.isOpen ? 0.3 : 0)};
        background-color: rgba(0, 0, 0, 0.3);
    }

    .box {
        position: relative;
        background-color: #FFFFFF;
        box-shadow: 0px 10px 40px rgba(13, 12, 71, 0.05);
        visibility: ${(props) => (props.isOpen ? 'initial' : 'hidden')};
        pointer-events: ${(props) => (props.isOpen ? 'initial' : 'none')};
        border-radius: 16px;
        top: 0;
        left: 0;
        width: 100%;
        max-width: 71rem;
        height: 50.8rem;
        z-index: 2022;
        display: flex;
        align-items: flex-start;

        .btn-close {
            position: absolute;
            top: -4.5rem;
            right: 0;
            background-color: #FFFFFF;
            border-radius: 8px;
            width: 3.6rem;
            height: 3.6rem;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .left {
            display: flex;
            align-items: flex-end;
            flex-direction: column;
            width: 100%;
            max-width: 19.1rem;
            height: 100%;

            &.grass {
                background: url("/assets/bg-grass.svg") no-repeat center center;
            }

            &.fire {
                background: url("/assets/bg-fire.svg") no-repeat center center;
            }

            &.water {
                background: url("/assets/bg-water.svg") no-repeat center center;
            }

            &.bug {
                background: url("/assets/bg-bug.svg") no-repeat center center;
            }

            &.normal {
                background: url("/assets/bg-normal.svg") no-repeat center center;
            }

            &.fighting {
                background: url("/assets/bg-fighting.svg") no-repeat center center;
            }

            &.flying {
                background: url("/assets/bg-flying.svg") no-repeat center center;
            }

            &.poison {
                background: url("/assets/bg-poison.svg") no-repeat center center;
            }

            &.ground {
                background: url("/assets/bg-ground.svg") no-repeat center center;
            }

            &.rock {
                background: url("/assets/bg-rock.svg") no-repeat center center;
            }

            &.ghost {
                background: url("/assets/bg-ghost.svg") no-repeat center center;
            }

            &.steel {
                background: url("/assets/bg-steel.svg") no-repeat center center;
            }

            &.electric {
                background: url("/assets/bg-electric.svg") no-repeat center center;
            }

            &.psychic {
                background: url("/assets/bg-psychic.svg") no-repeat center center;
            }

            &.ice {
                background: url("/assets/bg-ice.svg") no-repeat center center;
            }

            &.dragon {
                background: url("/assets/bg-dragon.svg") no-repeat center center;
            }

            &.dark {
                background: url("/assets/bg-dark.svg") no-repeat center center;
            }

            &.fairy {
                background: url("/assets/bg-fairy.svg") no-repeat center center;
            }

            .icone {
                background-color: #FFFFFF;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                width: 3.4rem;
                height: 3.4rem;
                margin-top: 2rem;
                position: relative;
                right: 2rem;
            }

            .pokemon {
                position: relative;
                right: -1.4rem;
                margin-top: 11.5rem;
            }
        }

        .right {
            width: 100%;
            max-width: 51.9rem;
            padding-left: 7.4rem;
            padding-top: 3.5rem;

            .info-pokemon {
                display: flex;
                align-items: center;

                h2 {
                    font-family: 'Montserrat';
                    font-style: normal;
                    font-weight: 700;
                    font-size: 2.8rem;
                    line-height: 3.4rem;
                    letter-spacing: -0.01em;

                    color: #2F3133;
                    margin-right: 0.8rem;
                }

                span {
                    font-family: 'Montserrat';
                    font-style: normal;
                    font-weight: 400;
                    font-size: 1.6rem;
                    line-height: 2rem;
                    letter-spacing: -0.01em;

                    color: #7A7D80;
                }
            }

            .info-types {
                display: flex;
                align-items: center;
                margin-top: 1rem;

                li {
                    margin-right: 0.8rem;

                    &:last-child {
                        margin-right: 0;
                    }

                    .tag {
                        font-family: 'Montserrat';
                        font-style: normal;
                        font-weight: 600;
                        font-size: 1.3rem;
                        line-height: 1.6rem;
                        letter-spacing: -0.01em;
                        width: 100%;
                        max-width: 7.5rem;

                        display: inline-flex;
                        align-items: center;
                        justify-content: center;
                        padding: 0.4rem 1.1rem;

                        &.grass {
                            background-color: rgba(104, 174, 40,0.1);
                            color: #68AE28;
                        }

                        &.poison {
                            background-color: rgba(162, 52, 249,0.1);
                            color: #A234F9;
                        }

                        &.fire {
                            background-color: rgba(233, 99, 3,0.1);
                            color: #E96303;
                        }

                        &.water {
                            background-color: rgba(32, 121, 255,0.1);
                            color: #2079FF;
                        }

                        &.bug {
                            background: rgba(155, 186, 72, 0.1);
                            color: #9BBA48;
                        }

                        &.ground {
                            background-color: rgba(206, 128, 86, 0.1);
                            color: #CE8056;
                        }

                        &.ghost {
                            background-color: rgba(97, 110, 183, 0.1);
                            color: #616EB7;
                        }

                        &.dark {
                            background-color: rgba(89, 87, 97, 0.1);
                            color: #595761;
                        }

                        &.ice {
                            background-color: rgba(139, 206, 193, 0.1);
                            color: #71BAAC;
                        }

                        &.dragon {
                            background-color: rgba(44, 106, 193, 0.1);
                            color: #2C6AC1;
                        }

                        &.normal {
                            background-color: rgba(160, 162, 159, 0.1);
                            color: #919191;
                        }

                        &.steel {
                            background-color: rgba(101, 148, 161, 0.1);
                            color: #6594A1;
                        }

                        &.electric {
                            background-color: rgba(238, 217, 103, 0.1);
                            color: #D5BC34;
                        }

                        &.fairy {
                            background-color: rgba(226, 150, 225, 0.1);
                            color: #E296E1;
                        }

                        &.psychic {
                            background-color: rgba(235, 139, 133, 0.1);
                            color: #EB8B85;
                        }

                        &.fighting {
                            background-color: rgba(196, 77, 97, 0.1);
                            color: #C44D61
                        }

                        &.rock {
                            background-color: rgba(139, 206, 193, 0.1);
                            color: #84BEB3;
                        }

                        &.flying {
                            background-color: rgba(166, 187, 232, 0.1);
                            color: #758CBD;
                        }
                    }
                }
            }

            .info-habilidades {
                display: flex;
                align-items: center;
                margin-top: 3.2rem;

                li {
                    margin-right: 4.8rem;

                    &:last-child {
                        margin-right: 0;
                    }

                    small {
                        display: block;
                        font-weight: 400;
                        font-size: 1.3rem;
                        line-height: 1.6rem;
                        letter-spacing: -0.01em;
                        color: #7A7D80;
                    }

                    strong {
                        display: block;
                        font-family: 'Montserrat';
                        font-style: normal;
                        font-weight: 600;
                        font-size: 1.4rem;
                        line-height: 1.7rem;
                        letter-spacing: -0.01em;

                        color: #2F3133;
                        margin-top: 0.4rem;
                    }
                }
            }

            .info-fraquezas {
                margin-top: 3.2rem;

                strong {
                    font-weight: 600;
                    font-size: 1.3rem;
                    line-height: 1.6rem;
                    letter-spacing: -0.01em;
                    color: #4D5053;
                }

                ul {
                    display: flex;
                    align-items: center;

                    li {
                        margin-right: 1rem;

                        &:last-child {
                            margin-right: 0;
                        }

                        small {
                            font-family: 'Montserrat';
                            font-style: normal;
                            font-weight: 600;
                            font-size: 1.3rem;
                            line-height: 1.6rem;
                            letter-spacing: -0.01em;
                        }
                    }
                }
            }

            .info-stats {
                margin-top: 3.2rem;
                
                strong {
                    font-weight: 600;
                    font-size: 13px;
                    line-height: 16px;
                    text-align: center;
                    letter-spacing: -0.01em;
                    color: #4D5053;
                }

                ul {
                    margin-top: 1.6rem;

                    li {
                        display: flex;
                        align-items: center;
                        margin-bottom: 1.3rem;

                        &:last-child {
                            margin-bottom: 0;
                        }

                        small {
                            font-weight: 400;
                            font-size: 1.2rem;
                            line-height: 1.5rem;
                            color: #7A7D80;
                            margin-right: 2.2rem;
                        }

                        .status {
                            position: relative;
                            width: 100%;
                            max-width: 28.3rem;
                            height: 0.3rem;
                            background-color: #EFF3F6;

                            li {
                                background-color: #C20001;
                                height: 100%;
                            }
                        }
                    } 
                }
            }
        }
    }
`;