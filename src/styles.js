import styled from "styled-components";

export const About = styled.div`
  min-height: 90vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5rem 10rem;
  color: #fff;
  @media (max-width: 1300px) {
    display: block;
    padding: 2rem 2rem;
    text-align: center;
  }
`;
export const Description = styled.div`
  flex: 1;
  padding-right: 5rem;
  h2 {
    font-weight: lighter;
  }
  @media (max-width: 1300px) {
    padding: 0;
    button {
      margin: 2rem 0rem 5rem 0rem;
    }
  }
`;
export const Image = styled.div`
  flex: 1;
  overflow: hidden;
  img {
    /* width: 100%;
    height: 80vh;
    object-fit: cover; */
  }
  @media (max-width: 1300px) {
    background-position: center;
  }
`;
export const Hide = styled.div`
  overflow: hidden;
`;