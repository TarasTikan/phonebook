import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
// import Icons from '../../images/icons/grayicon.svg';
// export const StyledLink = styled(NavLink)`
//   padding: 8px 16px;
//   border-radius: 4px;
//   text-decoration: none;
//   color: black;
//   font-weight: 500;
//   &.active {
//     color: green;
//   }
// `;
// --------------------------------

export const WrapAuth = styled.div`
  background-color: #ffffff;
  width: 289px;
  height: 900px;
  padding-top: 32px;
  padding-left: 24px;
  display: flex;
  flex-direction: column;
  padding-bottom: 24px;
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

  export const NavList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 16px;
    list-style: none;
    padding-left: 0;
    margin-top: 10px;
  `;

 export const Nav = styled.nav`
   display: flex;
   flex-direction: column;
   margin-bottom: auto;
   
   `;

 export const WrapIcon = styled.div`
   display: flex;
   align-items: center;
   gap: 6px;
 `;

     
export const LinkWrapper = styled.div`
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
  color: ${({ active }) => (active ? '#fff' : '#000')};
  stroke: ${({ active }) => (active ? '#3e85f3' : '#34343480')};
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    background-color: '#e3f3ff';
    color: '#3e85f3';
    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  svg {
    width: 15px;
    height: 16.67px;
  }
  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 19px;
    padding-left: 22px;
    padding-top: 18px;
    padding-bottom: 18px;
    padding-right: 96px;
  }
`;
 
  export const StyledLink = styled(NavLink)`
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
    text-decoration: none;
    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
    color: ${({ active }) => (active ? '#3e85f3' : 'rgba(52, 52, 52, 0.5)')};
    &:hover {
      color: '#3e85f3';
    }
    @media screen and (min-width: 768px) {
      font-size: 16px;
      line-height: 19px;
    }
  `;

  export const BtnLogout = styled.button`
    box-shadow: 4px 2px 16px rgba(136, 165, 191, 0.48);
    border-radius: 16px;
    width: 141px;
    height: 56px;
    background-color: #3e85f3;
    border: none;
    font-weight: 600;
    font-size: 14px;
    line-height: 18px;
    color: #ffff;
    display: flex;
    justify-content: center;
    align-items: center;
    stroke: '#fff';
    transition: stroke 250ms cubic-bezier(0.4, 0, 0.2, 1);
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
    &:hover {
      background-color: '#000';
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
      font-size: 18px;
      line-height: 24px;
    }
  `;
export const MobileMenu = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #ffffff;
  z-index: 1;
  /* padding-top: 24px;
  padding-bottom: 24px;
  padding-left: 20px;
  padding-right: 26px; */
  padding-top: 24px;
  padding-bottom: 24px;
  padding-left: 20px;
  padding-right: 26px;
`;

export const MobileContainer = styled.div`
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  display: flex;
  `;


export const ButtonClose = styled.button`
  background-color: transparent;
  border: none;
  display: block;
  margin-left: auto;
  cursor: pointer;
  transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;

  export const HeroTitle = styled.h1`
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    color: #3e85f3;
    text-shadow: 0px 47px 355px rgba(0, 0, 0, 0.07),
      0px 9.4px 57.6875px rgba(0, 0, 0, 0.035);
    @media screen and (min-width: 768px) {
      font-size: 18px;
      line-height: 24px;
    }
    /* font-weight: 400;
    font-size: 24px;
    line-height: 24px;
    text-shadow: 0px 47px 355px rgba(0, 0, 0, 0.07),
      0px 9.4px 57.6875px rgba(0, 0, 0, 0.035);
    color: #3e85f3; */
  `;

  export const NavWrappText = styled.div`
   margin-bottom: auto;
  `;