import React, { PureComponent } from 'react';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core';


const styles = theme => ({
  card: {
    padding: 12,
    borderRadius: 7,
    maxWidth: 640
  },
  cardActions: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  text: {
    width: 'calc(100% - 24px);',
    height: theme.spacing.unit * 40,
    backgroundColor: '#eee',
    borderRadius: 5,
    padding: 10,
  },
  image: {
    maxHeight: '100%',
    maxWidth: '100%'
  },
  imageContainer: {
    backgroundColor: '#eee'
  }
});

class DataCard extends React.Component {
  render(){
    const { data } = this.props;
    return (
      <Grid container direction="column">
        {data.map(d =>
          <Grid item>
            <Typography gutterBottom>
              {d.class} : {d.confidence}
            </Typography>
          </Grid>
        )}
      </Grid>
    )
  }
}


class ImageDataCard extends PureComponent {
  render() {
    const { imageSrc, data, classes } = this.props;

    return (
      <Card className={classes.card}>
        <Grid container direction="column" spacing={24} justify="center">
          <Grid item className={classes.imageContainer}>
            <img className={classes.image} src={imageSrc} alt="Uploaded file" />
          </Grid>
          <Grid item>
            {data.length > 0?
              <DataCard data={data} />
            : <label>No class found in the Image</label> }
          </Grid>
        </Grid>
      </Card>
    )
  }
}

export default withStyles(styles)(ImageDataCard);