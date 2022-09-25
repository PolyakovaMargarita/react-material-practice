import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button';
import { AppBar, Container, IconButton, Toolbar, Typography, Box, Grid, Paper } from '@material-ui/core';
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
  mainFeaturesPost: {
    position: "relative",
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center"
  },
  overlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundOverlay: "rgba(0,0,0,.3)"
  },
  mainFeaturesPostContent: {
    position: "relative",
    padding: theme.spacing(11)
  }
}))


function App() {
  const classes = useStyles();

  return (
    <>
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

      <main>
        <Paper 
          className={classes.mainFeaturesPost}
          style={{ backgroundImage: `url(https://source.unsplash.com/random)` }}
          >
          <Container fixed>
            <div className={classes.overlay}/>
            <Grid container>
              <Grid item md={6}>
                <div className={classes.mainFeaturesPostContent}>
                  <Typography
                    component="h1"
                    variant='h3'
                    color="inherit"
                    gutterBottom
                  >
                    My material site test
                  </Typography>
                  <Typography
                    variant='h5'
                    color="inherit"
                    paragraph
                  >
                    MUI offers a comprehensive suite of UI tools to help you ship new features faster. Start with Material UI, our fully-loaded component library, or bring your ...
                  </Typography>
                  <Button variant='conteined' color='secondary'>Learn more</Button>
                </div>
              </Grid>
            </Grid>
          </Container>
        </Paper>
      </main>
    </>

  );
}

export default App;
