import React from 'react';
import {Card, CardMedia, CardContent, CardActions, Typography, IconButton} from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';
import useStyles from './styles';

const Product = ({ product, onAddToCart }) => { //don't repeat yourself principle
    const classes = useStyles();
    const productDescrip = product.description.length > 100 ? product.description.slice(0, 47)+'...' : product.description 
    return ( 
        <Card className={classes.root}>
            <CardMedia className={classes.media} image={product.image.url} title={product.name} />
            <CardContent>
                <div className={classes.cardDescription}>
                    <section className={classes.cardContent}>
                        <Typography variant="h5" gutterBottom>
                            {product.name}
                        </Typography>
                        <Typography variant="h5">
                            {product.price.formatted_with_symbol}
                        </Typography>
                    </section>
                    <Typography className={classes.descripText} dangerouslySetInnerHTML={{ __html: productDescrip }} variant="body2" color="textSecondary" />
                </div>
            </CardContent>
            <CardActions disableSpacing className = {classes.cardActions}>
                <IconButton onClick={()=>onAddToCart(product.id, 1)} aria-label="Add to Cart">
                    <AddShoppingCart />
                </IconButton>
            </CardActions>
        </Card>
     );
}
 
export default Product;