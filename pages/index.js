import { Grid, Card, CardActionArea, CardMedia, Typography, CardContent, CardActions, Button } from '@material-ui/core'
import Head from 'next/head'
import Image from 'next/image'
import NextLink from 'next/link'
import Layout from '../components/Layout'
import styles from '../styles/Home.module.css'
import data from '../utils/data'
import getProducts from '../lib/getProducts'
const Home = (props) => {
  const {products} = props
  return (
    <Layout>
      <div>
      <h1> Products</h1>
       <Grid container spacing = {3}>
         {products.map((product) => (
            <Grid item md={4} key = {product.title}>
              <Card>
                <NextLink href={`/product/${product.handle}`} passHref>
                <CardActionArea >
                  <CardMedia 
                  component="img" 
                  image={product.images[0].originalSrc} 
                  title={product.title}>

                  </CardMedia>
                  <CardContent>
                    <Typography>
                       {product.title}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                </NextLink>
                <CardActions>
                  <Typography>
                    {product.variants[0].price}
                  </Typography>
                  <Button size ="small" color="primary">
                    Add to cart
                  </Button>
                </CardActions>
              </Card>
            </Grid>
         ))}
       </Grid>
    </div>
    </Layout>
  );
}

export default Home;
export async function getServerSideProps(context) {
  
  
  
   let products = await getProducts();
   
  return {
    props: {
      products
    }
  }
}