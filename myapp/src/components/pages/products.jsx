import React from 'react';
import { Grid, Container } from '@material-ui/core';
import Product from '../products/Product';
import image from "../../assets/surveyors_target.jpg";
import image1 from "../../assets/television_set.jpg";
import useStyles from './styles';

const Products = ({ products, onAddToCart }) => {
    const classes = useStyles()
    return ( 
        <main className={classes.content}>
            <div className={classes.toolbar} />{/*pushes the whole content down with the exact size of the navbar*/}
            <Grid container justifyContent="center" spacing={4} cl>
                {products.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Product product={product} onAddToCart={onAddToCart} />
                    </Grid>
                ))}
            </Grid>
        </main>
     );
}
 
export default Products;