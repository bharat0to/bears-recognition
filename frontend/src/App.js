import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import DropBox from './DropBox';
import ImageCard from './ImageCard';

const teddyImg = '/img/teddy.png';
const grizzlyImg = '/img/grizzly.png';
const blackImg = '/img/black.png';

const styles = theme => ({
  appBar: {
    position: 'static',
  },
  icon: {
    marginRight: theme.spacing.unit * 2,
  },
  heroUnit: {
    backgroundColor: theme.palette.background.paper,
  },
  heroContent: {
    // maxWidth: 600,
    margin: '0 auto',
    padding: `${theme.spacing.unit * 2}px 0 ${theme.spacing.unit}px`,
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    backgroundColor: theme.palette.background.paper,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  footer: {
    padding: theme.spacing.unit * 3,
    paddingTop: theme.spacing.unit * 6
  },
  mainImage: {
    backgroundColor: '#aaa',
    padding: 20,
    marginBottom: theme.spacing.unit * 5
  }
});


class App extends React.Component {

  render() {
    const { classes } = this.props;

    return (
      <React.Fragment>
        <AppBar position="static" className={classes.appBar}>
          <Toolbar>
            <CameraIcon className={classes.icon} />
            <Typography variant="h6" color="inherit" noWrap>
              Bear Classification
          </Typography>
          </Toolbar>
        </AppBar>
        <main>
          {/* Hero unit */}
          <div className={classes.heroUnit}>
            <div className={classes.heroContent}>
              <Typography component="h2" variant="h2" align="center" color="textPrimary" gutterBottom>
                Teddy | Grizzley | Black
              </Typography>
              <Typography variant="h6" align="center" color="textSecondary" paragraph>
                Classifies given image file to one of the above categories. Go ahead and drop an image below to try it out.
              </Typography>
            </div>
            <div className={classes.mainImage}>
              <Grid container direction="row" alignItems="center" justify="center" spacing={40}>
                <Grid item>
                  <ImageCard image_path={teddyImg} title="Teddy" />
                </Grid>
                <Grid item>
                  <ImageCard image_path={grizzlyImg} title="Grizzly" />
                </Grid>
                <Grid item>
                  <ImageCard image_path={blackImg} title="Black" />
                </Grid>
              </Grid>
            </div>
          </div>
          <div className={classes.layout}>
            <DropBox onImage={this.showImage} />
          </div>
        </main>
        {/* Footer */}
        <footer className={classes.footer}>
          <Typography variant="h6" align="center" gutterBottom>
            &copy; Zero
          </Typography>
        </footer>
        {/* End footer */}
      </React.Fragment>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);