import styled from 'styled-components';

const Feedbacklist = styled.ul`
    display: flex;
  list-style: none;
  gap: 10px;
  border-radius: 10px;
  overflow: hidden;
  padding: 0`

const Button = styled.button`
background-color: #f5cb5c;
color: #1e3d59;
padding: 8px 16px;
border: none;
border-radius: 4px;
font-size: 16px;
font-weight: bold;
cursor: pointer;
transition: background-color 0.2s ease-in-out;

&:hover {
  background-color: #ffaa5c;
}
`;

  export {Feedbacklist, Button}