import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';

const styles = {
   card: {
      maxWidth: 345,
   },
   media: {
      objectFit: 'cover',
   },
};

function ImageCard(props) {
   const { classes, image_path, title } = props;
   return (
      <Card className={classes.card}>
         <CardMedia
            component="img"
            alt={title}
            className={classes.media}
            height="140"
            image={image_path}
            title={title}
         />
      </Card>
   );
}

ImageCard.propTypes = {
   classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ImageCard);
