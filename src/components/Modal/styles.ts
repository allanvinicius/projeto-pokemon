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
        align-items: center;
        justify-content: center;

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
            
        }
    }
`;