import styled from "styled-components";

export const RepositoryList = styled.ul`
  display: flex;
  align-items: flex-start;
  flex-direction: column;

  li {
    margin-bottom: 4rem;

    &:last-child {
      margin-bottom: 0;
    }

    button {
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
`;
