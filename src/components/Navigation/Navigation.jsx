// import { useSelector } from 'react-redux';
// import { selectIsLoggein } from 'redux/auth/selectors';
import {
  StyledLink,
  WrapAuth,
  BtnLogout,
  TitleUser,
  NavList,
  Nav,
  WrapIcon,
  HeroTitle,
  IconHero,
} from './Navigation.styled';
// import { NavLink } from 'react-router-dom';
export const Navigation = () => {

  return (
    <nav>
      <WrapAuth>
        <WrapIcon>
          <IconHero />
          <HeroTitle>GooseTrack</HeroTitle>
        </WrapIcon>
        <TitleUser>User Panel</TitleUser>
        <Nav>
          <NavList>
            <li>
              <StyledLink to="/">My account</StyledLink>
            </li>
            <li>
              <StyledLink to="/contacts">My contacts</StyledLink>
            </li>
          </NavList>
        </Nav>
        <BtnLogout>Log out</BtnLogout>
      </WrapAuth>
      {/* <StyledLink to="/">Home</StyledLink>
      {isLoggein && <StyledLink to="/contacts">Contacts</StyledLink>} */}
    </nav>
  );
};
