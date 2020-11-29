import * as api from "../api";

export const getPosts = () => async dispatch => {
    try {
        const { data } = await api.fetchPosts();
        const action = {
            type: "FETCH_POSTS",
            payload: data
        }
        return dispatch(action);
    } catch (error) {
        console.log(error.message)
    }

}
export const createPost = post => async dispatch => {
    try {
        const  {data} = await api.createPost(post)
        dispatch({type: "CREATE_POST", payload: data})
    } catch (error) {
        console.log(error.message);
    }
}