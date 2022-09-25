import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

import FolderIcon from '@material-ui/icons/Folder';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  }
}))

const Footer = () => {
  const classes = useStyles();
  const [value, setValue] = useState("recents")

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
      <footer>
        <Typography variant='h6' align='center' gutterBottom>Site Material Test 2022</Typography>
        <BottomNavigation
          value={value}
          onChange={handleChange}
          className={classes.root}
        >
          <BottomNavigationAction 
            label="Recents"
            value="recents"
            icon={<RestoreIcon/>}
          />
          <BottomNavigationAction 
            label="Favorites"
            value="favorites"
            icon={<FavoriteIcon/>}
          />
          <BottomNavigationAction 
            label="Nearby"
            value="nearby"
            icon={<LocationOnIcon/>}
          />
          <BottomNavigationAction 
            label="Folder"
            value="folder"
            icon={<FolderIcon/>}
          />
        </BottomNavigation>
        <Typography align='center' color='textSecondary' component="p" variant="subtitle1">
          React js Material ui site
        </Typography>
      </footer>
  );
}

export default Footer;
