import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

import { Container, Typography, Grid, Paper, Card, CardMedia, CardContent, CardActions } from '@material-ui/core';

import LayerIcon from '@material-ui/icons/Layers';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';


const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1
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
    padding: theme.spacing(6),
    marginTop: theme.spacing(9)
  },
  cardMedia: {
    paddingTop: "56.25%"
  },
  cardContent: {
    flexGrow: 1
  },
  cardGrid: {
    marginTop: theme.spacing(4)
  }
}))

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9]

function Main() {
  const classes = useStyles();

  return (
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
                  <Button variant='contained' color='secondary'>Learn more</Button>
                </div>
              </Grid>
            </Grid>
          </Container>
        </Paper>
        <div className={classes.mainContent}>
          <Container maxWidth="sm">
            <Typography variant='h2' align='center' color='textPrimary' gutterBottom>
              Blog Material
            </Typography>
            <Typography variant='h5' align='center' color='textSecondary' paragraph>
            MUI offers a comprehensive suite of UI tools to help you ship new features faster. Start with Material UI, our fully-loaded component library, or bring your ...
            </Typography>
            <div className={classes.mainButtons}>
              <Grid container spacing={2} justifyContent="center">
                <Grid item>
                  <Button variant='contained' color='primary'>Start now</Button>
                </Grid>
                <Grid item>
                  <Button variant='outlined' color='primary'>Learn more</Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography variant='h5' gutterBottom>
                      Blog post
                    </Typography>
                    <Typography variant='h5' gutterBottom>
                      Blog post. Different some posts
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size='small' color="primary">
                      View
                    </Button>
                    <Button size='small' color="primary">
                      Edit
                    </Button>

                    <LayerIcon />
                    <PlayCircleFilledIcon />
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
  );
}

export default Main;