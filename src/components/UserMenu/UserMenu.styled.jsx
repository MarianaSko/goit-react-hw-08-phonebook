import styled from 'styled-components';
export const StyledWrapper = styled.div`
  display: flex;
  gap: 40px;
  align-items: center;
  justify-content: center;
  button {
    text-decoration: none;
    text-transform: capitalize;
    appearance: button;
    background-color: #4d4ae8;
    background-image: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.15),
      rgba(255, 255, 255, 0)
    );
    border: 1px solid #4d4ae8;
    border-radius: 1rem;
    box-shadow: rgba(255, 255, 255, 0.15) 0 1px 0 inset,
      rgba(46, 54, 80, 0.075) 0 1px 1px;
    box-sizing: border-box;
    color: #ffffff;
    cursor: pointer;
    display: inline-block;
    font-family: Inter, sans-serif;
    font-weight: 500;
    line-height: 1.5;
    margin: 0;
    padding: 10px;
    text-align: center;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
      border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    vertical-align: middle;
    &:focus:not(:focus-visible),
    &:focus {
      outline: 0;
      background-color: #413fc5;
      border-color: #3e3bba;
      box-shadow: rgba(255, 255, 255, 0.15) 0 1px 0 inset,
        rgba(46, 54, 80, 0.075) 0 1px 1px, rgba(104, 101, 235, 0.5) 0 0 0 0.2rem;
    }
    &:hover {
      background-color: #3733e5;
      border-color: #3733e5;
    }
  }
  p {
    opacity: 0.6;
    font-weight: 600;
  }
`;
