import { StyledLink, WrapAuth } from './AuthNav.styled';
export const AuthNav = () => {
  return (
    <WrapAuth>
      <StyledLink to="/register">Register</StyledLink>
      <StyledLink to="/login">Log in</StyledLink>
    </WrapAuth>
  );
};
