import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageCard from './ImageCard';
import products from '../static/products';
import useWindowPosition from '../hook/useWindowPosition';
const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    maxHeight: '200vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
    },
  },
}));
export default function () {
  const classes = useStyles();
  const checked = useWindowPosition('header');
  return (
    <div className={classes.root} id="products">
      <ImageCard product={products[0]} checked={checked} />
      <ImageCard product={products[1]} checked={checked} />
      <ImageCard product={products[2]} checked={checked} />
      <ImageCard product={products[3]} checked={checked} />
    </div>
  );
}
