import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import useStyles from "./Styles";
import {TextField, Button, Typography, Paper} from "@material-ui/core";
import FileBase from "react-file-base64";
import {createPost, updatePost} from "../../actions/posts";

export default function Form({currentId,setcurrentId}) {
    const [postData, setpostData] = useState({creator: " ", title:" ", message: " ", tags: " ", selectedFile: " "});
    const dispatch = useDispatch();
    const post = useSelector(state => currentId ? state.posts.find(p => p._id == currentId) : null);
    const classes = useStyles();
    useEffect(() => {
       if(post) {
           setpostData(post)
       }
    }, [post])
    const handleSubmit = e =>{ 
        e.preventDefault();
        if(currentId){
            dispatch(updatePost(currentId, postData))
        } else {
            dispatch(createPost(postData))
        }
        clear();
    }
    const clear = () => {
        setcurrentId(null);
        setpostData({creator: " ", title:" ", message: " ", tags: " ", selectedFile: " "});
    }
    return (
       <Paper className={classes.paper}>
           <form autoComplete="off" noValidate onSubmit={handleSubmit} className={`${classes.root} ${classes.form}`}>
                <Typography variant="h6">{  currentId ? "Editing" : "Creating"   } A Memory</Typography>
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
