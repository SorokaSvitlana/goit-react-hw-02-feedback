import styled from 'styled-components';

const StatList = styled.ul`
  list-style: none;`

const StatItem = styled.li`
display: flex;
justify-content: space-between;
font-size: 16px;
font-weight: bold;
color: #1a1a1a;
margin-bottom: 8px;
`
const StatValue = styled.span`
  color: ${({ type }) =>
    type === 'good' ? '#007700' : type === 'negative' ? '#FF0000' : '#1a1a1a'};
`;
  export {StatList, StatItem, StatValue}