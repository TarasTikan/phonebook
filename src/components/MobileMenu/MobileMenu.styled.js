import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
export const MobileMenu = styled.div`
  position: fixed;
  /* display: none; */
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #ffffff;
  z-index: 1;
`;

export const MobileContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  padding: 24px 26px 20px;
`;

export const ContentWrapper = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

export const WrapIcon = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

export const HeroTitle = styled.h1`
  font-family: 'Coolvetica';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: calc(22 / 16);
  margin: 0;
  color: #3e85f3;
  text-shadow: 0px 47px 355px rgba(0, 0, 0, 0.07),
    0px 9.4px 57.6875px rgba(0, 0, 0, 0.035);
  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: calc(24 / 18);
  }
`;

export const ButtonClose = styled.button`
  background-color: transparent;
  border: none;
  display: block;
  margin-left: auto;

  width: 24px;
  height: 24px;
  cursor: pointer;
  stroke: #343434;
  transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1);
  & {
    stroke: #343434;
  }
  @media screen and (min-width: 768px) {
    width: 33px;
    height: 33px;
  }
  @media screen and (min-width: 1440px) {
    display: none;
  }
`;

export const TitleUser = styled.p`
  color: rgba(52, 52, 52, 0.5);
  font-weight: 600;
  font-size: 12px;
  line-height: 15px;
  margin-top: 32px;
  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 17px;
  }
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  margin-bottom: auto;
`;

export const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  padding-left: 0;
  margin-top: 10px;
  gap: 10px;
`;

export const LinkWrapper = styled.li`
  display: flex;
  align-items: center;
  padding-left: 10px;
  padding-top: 11px;
  padding-bottom: 18px;
  padding-right: 81px;
  width: 185px;
  height: 40px;
  border-radius: 8px;
  gap: 5px;
  background-color: ${({ active }) => (active ? '#e3f3ff' : 'transparent')};

  color: ${({ active }) => (active ? '#3e85f3' : 'rgba(52, 52, 52, 0.5)')};

  stroke: ${({ active }) => (active ? '#3e85f3' : 'rgba(52, 52, 52, 0.5)')};
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    background-color: #e3f3ff;
    color: #3e85f3;
    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  svg {
    width: 20px;
    height: 20px;
  }
  @media screen and (min-width: 768px) {
    width: 225px;
    height: 56px;
    font-size: 16px;
    line-height: 19px;
    padding-left: 22px;
    padding-top: 18px;
    padding-bottom: 24px;
    padding-right: 96px;
  }
`;

export const StyledLink = styled(NavLink)`
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  text-decoration: none;
  font-family: 'Inter';
  font-style: normal;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  color: ${({ active }) => (active ? '#3e85f3' : 'rgba(52, 52, 52, 0.5)')};
  &:hover {
    color: #3e85f3;
  }
  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: calc(19 / 16);
    /* gap: 10px; */
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  margin-top: auto;
  margin-top: 20px;
  margin-bottom: 44px; /* Add this line */
`;

export const BtnLogout = styled.button`
  width: 131px;
  height: 46px;

  font-size: 14px;
  line-height: calc(18 / 14);
  padding: 14px 0px;

  background: #3e85f3;
  box-shadow: 4px 2px 16px rgba(136, 165, 191, 0.48);
  border-radius: 16px;
  border: none;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;

  letter-spacing: -0.02em;
  color: #ffffff;

  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  stroke: '#fff';
  transition: stroke 250ms cubic-bezier(0.4, 0, 0.2, 1);
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    background: #2b78ef;
  }
  svg {
    margin-left: 13px;
    width: 13px;
    height: 13px;
  }
  svg:hover {
    stroke: '#0000';
  }

  @media screen and (min-width: 768px) {
    width: 141px;
    height: 56px;
    font-size: 18px;
    line-height: 24px;
    padding: 16px 0px;
  }
`;
