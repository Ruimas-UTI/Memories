import React, {useState, useEffect} from 'react';
import {useDispatch} from "react-redux";
import {getPosts} from "./actions/posts";
import {Container, AppBar, Typography, Grid, Grow} from "@material-ui/core";
import Posts from "./components/Post/Posts";
import Form from "./components/Form/Form";
import memories from "./images/memories.jpg";
import useStyles from "./styles";

export default function App() {
    const [currentId, setcurrentId] = useState(null);
    const classes = useStyles();
    const dispatch = useDispatch();
    useEffect(() => {dispatch(getPosts())}, [currentId,dispatch]);
    return (
      <Container maxWidth="lg">
          <AppBar className={classes.appBar} position="static" color="inherit">
              <Typography className={classes.heading} variant="h2" align="center">
                    Memories
              </Typography>
              <img className={classes.image} src={memories} alt="memories" height="60"/>
          </AppBar>
          <Grow in>
            <Container>
                <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                    <Grid item xs={12} sm={7}>
                        <Posts setcurrentId={setcurrentId}/>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Form setcurrentId={setcurrentId} currentId={currentId} />
                    </Grid>
                </Grid>
            </Container>
          </Grow>
      </Container>
    )
}
