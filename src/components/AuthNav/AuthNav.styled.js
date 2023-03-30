import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
export const WrapAuth = styled.div`
  display: flex;
  gap: 20px;
  margin-left: auto;
`;

export const StyledLink = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;
  &.active {
    color: green;
  }
`;
