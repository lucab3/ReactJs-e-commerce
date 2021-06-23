import React, {useState} from 'react';
import {ItemDetailContainer} from '../ItemDetailContainer.js';
import {makeStyles, useTheme} from "@material-ui/core/styles";
import {ItemDetailStyle} from './ItemDetailStyle.js';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { Typography, Grid,Paper } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import IconButton from '@material-ui/core/IconButton';
import {ItemCount} from '../../../components/Counter/ItemCounter.js'
import {Link} from "react-router-dom";
import {Button} from '@material-ui/core';

const useStyle = makeStyles((theme) => ItemDetailStyle(theme));




export const ItemDetail = props => {
    const {sampleData} = props;
    const classes = useStyle();
    const theme = useTheme();
    const [cart, setCart] = useState(0)
     
    const onAdd = count => {
    setCart (count)
    console.log ('Tenes ' + count + ' samples en tu carrito')
    
    }
    console.log (cart)
    return <>
       <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid className = {classes.paperContainer} container spacing={2}>
          <Grid item>
            <CardActionArea className = {classes.cardAction}>
              <CardMedia 
               component = 'img'
               image = {sampleData.picture.pictureUrl}
               width ="50%"
               title = {sampleData.title}/>
             </CardActionArea>
          </Grid>
          <Grid item xs container direction="column" spacing={2}>
            <Grid className = {classes.info}  item xs>
              <Typography gutterBottom variant="subtitle1">
                {sampleData.title} 
              </Typography>
              <div className = {classes.detalle}>
              <Typography variant="body2" gutterBottom>
                 Detalle
              </Typography>
              <Typography variant="body2" color="textSecondary">
                {sampleData.description}
              </Typography>
              </div>
            </Grid>
            <Grid item className= {classes.reproductor}>
              <IconButton aria-label="previous">
              {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
              </IconButton>
              <IconButton aria-label="play/pause">
              <PlayArrowIcon className={classes.playIcon} />
              </IconButton>
              <IconButton aria-label="next">
              {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
              </IconButton>
            </Grid>
            <div className = {classes.counter}>
            {cart === 0 ? <ItemCount onAdd = {onAdd} stock = '10' initial = {1} /> : 
            <Link to = {'/cart'}>
            <Button >Terminar mi compra </Button> 
            </Link>} 
            </div>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1">${sampleData.price}</Typography>
          </Grid>
      </Grid>
      
   </Paper>
      
    </div>
    </>
};
