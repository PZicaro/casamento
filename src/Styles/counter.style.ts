import styled from "styled-components";

export const CounterStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  @media screen and (max-width: 768px) {
    /* Adjust styles for smaller screens */
    gap: 0.5rem;
  }
`;

export const NumberStyle = styled.p`
  background-color: #ffff;
  color: black;
  padding: 1rem;
  border-radius: 0.7rem;
  font-size: 4rem;
  font-weight: bold;
  min-width: 80px;
  text-align: center;

  @media screen and (max-width: 768px) {
    /* Adjust styles for smaller screens */
    font-size: 3rem;
    padding: 0.5rem;
    min-width: auto;
  }
`;

export const TextStyle = styled.p`
  color: #ffff;

  @media screen and (max-width: 768px) {
    /* Adjust styles for smaller screens */
    font-size: 0.8rem;
  }
`;
