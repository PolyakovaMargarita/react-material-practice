import { useState } from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Container, IconButton, Toolbar, Typography, Box, Dialog, DialogTitle, DialogContent, DialogContentText, TextField, DialogActions } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

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
  }
}))

const Header = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }

  return (
      <AppBar position='fixed'>
        <Container fixed>
          <Toolbar>
            <IconButton edge="start" color="inherit" aria-label='menu' className={classes.menuButton}>
              <MenuIcon />
            </IconButton>
            <Typography variant='h6' className={classes.title}>Material Site Practice</Typography>
            <Box className={classes.buttonMargin}>
              <Button color='inherit' variant='outlined' onClick={handleClickOpen}>Log In</Button>

              <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Log in</DialogTitle>
                <DialogContent>
                  <DialogContentText>Log in to see videos</DialogContentText>
                  <TextField 
                    autoFocus
                    margin='dense'
                    id="name"
                    label="Email Adress"
                    type="email"
                    fullWidth
                  />
                  <TextField 
                    autoFocus
                    margin='dense'
                    id="password"
                    label="Password"
                    type="password"
                    fullWidth
                  />
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose} color="primary">Cancel</Button>
                  <Button onClick={handleClose} color="primary">Log in</Button>
                </DialogActions>
              </Dialog>
            </Box>
            <Button color='secondary' variant='contained'>Sign Up</Button>
          </Toolbar>
        </Container>
      </AppBar>
  );
}

export default Header;
