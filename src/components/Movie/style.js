import styled from "styled-components";

export const Container = styled.div`
  height: 380px;
  width: 100%;
  border-radius: 7px;
  overflow: hidden;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  @media (max-width: 768px) {
    height: 500px;
  }
`;
export const Poster = styled.div`
  background-image: url(${(props) => props.bg});
  height: 100%;
  width: 100%;
  background-size: cover;
  background-position: center center;
`;
