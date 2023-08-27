import { useSelector } from 'react-redux';
import { selectIsLoggein } from 'redux/auth/selectors';
import { StyledLink } from './Navigation.styled';
export const Navigation = () => {
  const isLoggein = useSelector(selectIsLoggein);
  return (
    <nav>
      <StyledLink to="/">Home</StyledLink>
      {isLoggein && <StyledLink to="/contacts">Contacts</StyledLink>}
    </nav>
  );
};
