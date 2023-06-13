// import { useSelector } from 'react-redux';
// import { selectIsLoggein } from 'redux/auth/selectors';
// import { UserIcon } from 'images/icons/UserIcon';
import {
  WrapAuth,
  BtnLogout,
  TitleUser,
  NavList,
  Nav,
  WrapIcon,
  HeroTitle,
  StyledLink,
  LinkWrapper,
  BtnMenu,

} from './Navigation.styled';
// import { NavLink } from 'react-router-dom';
import { useState } from 'react';
// import goose1pxDesck from 'images/imagesGoose/goose1pxDescktop.png'
// import goose2pxDesck from 'images/imagesGoose/goose2pxDescktop.png';
// import goose1pxTable from 'images/imagesGoose/goose1pxTable.png';
// import goose2pxTable from 'images/imagesGoose/goose2pxTable.png';
// import goose1pxMobile from 'images/imagesGoose/goose1pxMobile.png';
// import goose2pxMobile from 'images/imagesGoose/goose2pxMobile.png';
import { MobileMenuAppl } from 'components/MobileMenu/MobileMenu';
export const Navigation = () => {
  const [isActiveMenu, setIsActiveMenu] = useState(false);
   const [activeBlock, setActiveBlock] = useState(null);

   const handleBlockClick = block => {
     setActiveBlock(block);
   };
     const toggleMenu = () => {
        setIsActiveMenu(!isActiveMenu);
      }
  return (
    <>
      <BtnMenu onClick={toggleMenu}>
        {/* <OpenMenuIcon /> */}
      </BtnMenu>
      {isActiveMenu && <MobileMenuAppl toggleMenu={toggleMenu} />}
      <nav>
        <WrapAuth>
          <WrapIcon>
            {/* <img src={`${goose1pxDesck}`} alt="goose"></img> */}
            {/* <picture>
              <source
                srcSet={`${goose1pxDesck} 1x`}
                media="(min-width: 1440px)"
              />
              <source
                srcSet={`${goose1pxTable} 1x`}
                media="(min-width: 768px)"
              />
              <source
                srcSet={`${goose1pxMobile} 1x`}
                media="(max-width: 767px)"
              />
              <source
                srcSet={`${goose2pxDesck} 2x`}
                media="(min-width: 1440px)"
              />
              <source
                srcSet={`${goose2pxTable} 2x`}
                media="(min-width: 768px)"
              />
              <source
                srcSet={`${goose2pxMobile} 2x`}
                media="(max-width: 767px)"
              />
              <img src={goose1pxMobile} alt="Retina" width="71" height="68" />
            </picture> */}
            <HeroTitle>GooseTrack</HeroTitle>
          </WrapIcon>
          <TitleUser>User Panel</TitleUser>
          <Nav>
            <NavList>
              <li>
                <LinkWrapper
                  active={activeBlock === 'block1' ? 'true' : undefined}
                  onClick={() => handleBlockClick('block1')}
                >
                  {/* <UserIcon /> */}
                  <StyledLink
                    to="/contacts"
                    active={activeBlock === 'block1' ? 'true' : undefined}
                    onClick={() => handleBlockClick('block1')}
                  >
                    My account
                  </StyledLink>
                </LinkWrapper>
              </li>
              <li>
                <LinkWrapper
                  active={activeBlock === 'block2' ? 'true' : undefined}
                  onClick={() => handleBlockClick('block2')}
                >
                  {/* <Calendar /> */}
                  <StyledLink
                    to="/"
                    active={activeBlock === 'block2' ? 'true' : undefined}
                    onClick={() => handleBlockClick('block2')}
                  >
                    Calendar
                  </StyledLink>
                </LinkWrapper>
              </li>
            </NavList>
          </Nav>
          <BtnLogout>
            Log out 
          </BtnLogout>
        </WrapAuth>
      </nav>
    </>
  );
};
