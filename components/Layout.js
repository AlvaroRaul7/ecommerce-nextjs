import React from 'react'
import Head from 'next/head';
import { AppBar, Toolbar, Typography, Container } from '@material-ui/core';
export default function Layout({ children }) {
    return (
        <div>
            <Head>
                <title> Shopify ecommerce app </title>
            </Head>
                  <AppBar position="static">
                        <Toolbar>
                            <Typography>
                                Shopify ecommerce app
                            </Typography>
                        </Toolbar>
                  </AppBar>
                  <Container> 
                    {children}
                  </Container>
                  <footer>
                      <Typography>
                          Made by Alvaro Valarezo
                        </Typography>
                  </footer>
           
        </div>

    )
}
