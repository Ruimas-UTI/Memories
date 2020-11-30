import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import useStyles from "./Styles";
import {TextField, Button, Typography, Paper} from "@material-ui/core";
import FileBase from "react-file-base64";
import {createPost} from "../../actions/posts";

export default function Form() {
    const [postData, setpostData] = useState({creator: " ", title:" ", message: " ", tags: " ", selectedFile: " "});
    const dispatch = useDispatch();
    const classes = useStyles();
    const handleSubmit = e =>{ 
        e.preventDefault();
        // console.log(postData);
        dispatch(createPost(postData))
    }
    const clear = () => {

    }
    return (
       <Paper className={classes.paper}>
           <form autoComplete="off" noValidate onSubmit={handleSubmit} className={`${classes.root} ${classes.form}`}>
                <Typography variant="h6">Creating A Memory</Typography>
                <TextField name="creator" label="Creator"variant="outlined" fullWidth value={postData.creator} onChange={ e => setpostData({...postData, creator: e.target.value})}/>
                <TextField name="title" label="Title"variant="outlined" fullWidth value={postData.title} onChange={ e => setpostData({...postData, title: e.target.value})}/>
                <TextField name="message" label="Message"variant="outlined" fullWidth value={postData.message} onChange={ e => setpostData({...postData, message: e.target.value})}/>
                <TextField name="tags" label="Tags"variant="outlined" fullWidth value={postData.tags} onChange={ e => setpostData({...postData, tags: e.target.value})}/>
                <div className={classes.fileInput}><FileBase type="file" multiple={false} onDone={({base64}) => setpostData({...postData, selectedFile: base64})}/></div>
                <Button className={classes.buttonSubmit} color="primary" variant="contained" type="submit" size="large">Submit</Button>           
                <Button color="secondary" variant="contained" onClick={clear} size="small" fullWidth>Clear</Button>
            </form>        
       </Paper>
    )
}
