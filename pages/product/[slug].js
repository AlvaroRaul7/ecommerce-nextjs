import React, {useContext} from 'react'
import {useRouter} from 'next/router';
import data from '../../utils/data';
import Layout from '../../components/Layout';
import NextLink from 'next/link';
import {Link, Grid, List, ListItem, Typography, Card, Button} from '@material-ui/core'
import useStyles from '../../utils/styles';
import Image from 'next/image'
import getProducts from '../../lib/getProducts';
import axios from 'axios';

import Cookies from 'js-cookie';
const  ProductScreen = (props) => {
    
    const {products} = props
    const classes = useStyles();
    const router = useRouter();
    const {slug} = router.query;
    console.log(products);

    console.log(router.query)
    const product = products.find(a=> a.handle === slug);
    if (!product){
        return <div> Product not found</div>
    }
    const addToCartHandler = async () => {
        console.log("anadido al carrito")
       
        if (product.variants[0].quantityAvailable <= 0) {
            window.alert('Sorry: Product is out of stock')
            return;
        }
       
        router.push('/cart');

        }
    return (
        <Layout title = {product.title} description={product.handle}>
            <div className={classes.section}>
                <NextLink href="/" passHref>
                    <Link> 
                    <Typography> Back to products </Typography>
                    </Link>
                </NextLink>
            </div>
            <Grid container spacing={1}>
                <Grid item md={6} xs={12}>
                    <Image 
                    src={product.images[0].originalSrc} 
                    alt={product.title} 
                    width={640} 
                    height={640}>

                    </Image>
                </Grid>
                <Grid item md={3} xs={12}>
                    <List>
                        <ListItem> 
                            <Typography component="h1" variant="h1"> {product.name} </Typography>
                        </ListItem>
                        <ListItem> 
                            <Typography>  Category: {product.tags[0]}  </Typography>
                        </ListItem>
                        <ListItem> 
                           <Typography> Shipping: {product.variants[0].requiresShipping ? 'Yes' : 'No'} </Typography>
                           
                        </ListItem>
                        {/* <ListItem> 
                           <Typography> Rating: {product.rating} stars ({product.numReviews} reviews) </Typography>
                        </ListItem> */}
                        {/* <ListItem>
                            <Typography>
                                Requires shipping {product.variants[0].quantityAvailable ? ': Yes' : ': No'}
                            </Typography>
                        </ListItem> */}
                    </List>

                </Grid>
                <Grid item md={3} xs={12}>
                    <Card>
                        <List>
                            <ListItem>
                                <Grid container>
                                    <Grid item xs={6}> 
                                    <Typography>Price</Typography>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Typography>{product.variants[0].price}</Typography>
                                    </Grid>
                                </Grid>
                            </ListItem>
                            <ListItem>
                                <Grid container>
                                    <Grid item xs={6}> 
                                    <Typography>Status</Typography>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Typography>{product.variants[0].quantityAvailable>0?'In stock':'Unavailable'}</Typography>
                                    </Grid>
                                </Grid>
                            </ListItem>
                            <ListItem>
                                <Button fullWidth variant="contained" color="primary"  onClick={addToCartHandler}>
                                    Add to cart
                                </Button>
                            </ListItem>
                        </List>
                    </Card>
                </Grid>

            </Grid>

        </Layout>
    )
}

export default ProductScreen;

export async function getServerSideProps(context) {

    let products = await getProducts();
   return {
     props: {
       products
     }
   }
 }