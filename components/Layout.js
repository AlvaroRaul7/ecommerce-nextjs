import React, {useContext} from 'react'
import Head from 'next/head';
import NextLink from 'next/link';
import { AppBar, Toolbar, Typography, Container,Link, createTheme, ThemeProvider, CssBaseline, Badge } from '@material-ui/core';
import useStyles from '../utils/styles';


export default function Layout({ title,description, children }) {
  

   
    const theme = createTheme({
        typography:{
            h1:{
                fontSize:'1.6rem',
                fontWeight:400,
                margin:'1rem 0',
            },
            h2:{
                fontSize:'1.4rem',
                fontWeight:400,
                margin:'1rem 0',
            },

            palette:{
                type:'light',
                primary: {
                    main: '#f0c000',

                },
                secondary:{
                    main:'#208080'
                }
            }
        }
    });
    const classes = useStyles();
    return (
        <div>
            <Head>
                <title> {title? `${title} - Shopify ecommerce`: 'Shopify ecommerce'}</title>
                {description && <meta name="description" content={description}/>}
            </Head>
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                  <AppBar position="static" className= {classes.navbar}>
                        <Toolbar>
                            <NextLink href="/" passHref>
                                <Link>
                                    <Typography className={classes.brand}>
                                    Shopify ecommerce app
                                    </Typography>
                                </Link>
                            
                            </NextLink>
                            <div className={classes.grow}></div>
                            <div>
                              <NextLink href="/cart" passHref>
                                  <Link> 
                                  {/* {cart.cartItems.length >0 ?( <Badge badgeContent={cart.cartItems.length}>Cart</Badge>
                                    )  : (

                                        'Cart'
                                    )} */}
                                  
                                  </Link>
                              </NextLink>  
                            </div>
                        </Toolbar>
                  </AppBar>
                  <Container className = {classes.main}> 
                    {children}
                  </Container>
                  <footer className = {classes.footer}>
                      <Typography>
                          Made by Alvaro Valarezo
                        </Typography>
                  </footer>
                  </ThemeProvider>
           
        </div>

    )
}


