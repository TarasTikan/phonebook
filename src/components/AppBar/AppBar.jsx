import { AuthNav } from 'components/AuthNav/AuthNav';
import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { selectIsLoggein } from 'redux/auth/selectors';
import { WrapBar } from './AppBar.styled';
export const AppBar = () => {
  const isLoggein = useSelector(selectIsLoggein);
  return (
    <>
      <header>
        <WrapBar>
          <Navigation />
          {isLoggein ? <UserMenu /> : <AuthNav />}
        </WrapBar>
      </header>
    </>
  );
};
