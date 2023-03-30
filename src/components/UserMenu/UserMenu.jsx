import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { selectUser } from 'redux/auth/selectors';
import Button from '@mui/material/Button';
import { WrapUser } from './UserMenu.styled';
export const UserMenu = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const onBackHome = e => {
    dispatch(logOut());
  };
  return (
    <WrapUser>
      <p>{user.email}</p>
      <Button
        type="button"
        variant="contained"
        color="success"
        onClick={onBackHome}
      >
        Logout
      </Button>
    </WrapUser>
  );
};
