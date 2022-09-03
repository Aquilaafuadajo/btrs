import { Box, Typography, Button } from '@mui/material';
import { useAppDispatch } from '../store/hooks';
import { logOut } from '../store/userReducer';

const NavHeader: React.FC = () => {
  const dispatch = useAppDispatch();

  return (
    <Box
      sx={{
        display: 'flex',
        position: 'relative',
        backgroundColor: 'primary.dark',
        justifyContent: 'center',
        p: 2,
      }}
    >
      <Typography color="white" variant="h5" textAlign="center">
        Chat2go
      </Typography>
      <Button
        variant="text"
        onClick={() => dispatch(logOut())}
        sx={{
          position: 'absolute',
          right: 15,
          color: 'white',
          textTransform: 'capitalize',
        }}
      >
        Exit 👋🏼
      </Button>
    </Box>
  );
};

export default NavHeader;
