import React from 'react';
import {Container, AppBar, Typography, Grid, Grow} from "@material-ui/core";
import Posts from "./components/Post/Posts";
import Form from "./components/Form/Form";
import memories from "./images/memories.jpg";

export default function App() {
    return (
      <Container maxWidth="lg">
          <AppBar position="static" color="inherit">
              <Typography variant="h2" align="center">
                    Memories
              </Typography>
              <img src={memories} alt="memories" height="300"/>
          </AppBar>
          <Grow in>
            <Container>
                <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                    <Grid item xs={12} sm={7}>
                        <Posts/>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Form/>
                    </Grid>
                </Grid>
            </Container>
          </Grow>
      </Container>
    )
}
