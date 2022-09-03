import { Box, Typography, Button } from '@mui/material';

type Message = {
  onLogout: () => void;
};

const NavHeader: React.FC<Message> = ({ onLogout }) => (
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
      onClick={onLogout}
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

export default NavHeader;
