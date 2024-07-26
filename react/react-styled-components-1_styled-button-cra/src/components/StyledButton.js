import styled from "styled-components";

const StyledButton = styled.button`
  background-color: #4caf50; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
`;

const StyledPrimaryButton = styled.button`
  background-color: #333; /* Schwarz */
  border: 2px solid #4caf50; /* Grüner Rand */
  color: #4caf50; /* Grüner Text */
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 5px;
  transition: all 0.3s ease;

  &:hover {
    background-color: #4caf50;
    color: #fff;
    border: 2px solid white;
    transform: scale(1.05);
  }

  &:active {
    background-color: #388e3c;
    border: 2px solid red;
    transform: scale(0.95);
  }
`;

export { StyledButton, StyledPrimaryButton };
