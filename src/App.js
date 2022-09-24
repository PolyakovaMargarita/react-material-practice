import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button';
import { AppBar, Container, IconButton, Toolbar, Typography, Box } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(1)
  },
  title: {
    flexGrow: 1
  },
  buttonMargin: {    
    margin: '25px',   
  },
}))


function App() {
  const classes = useStyles();

  return (
    <AppBar position='fixed'>
      <Container fixed>
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label='menu' className={classes.menuButton}>
            <MenuIcon />
          </IconButton>
          <Typography variant='h6' className={classes.title}>Material Site Practice</Typography>
          <Box className={classes.buttonMargin}>
            <Button color='inherit' variant='outlined'>Sign In</Button>
          </Box>
          <Button color='secondary' variant='contained'>Sign Up</Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default App;
