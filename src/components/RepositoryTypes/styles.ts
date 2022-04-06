import styled from "styled-components";

export const RepositoryList = styled.div`
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
