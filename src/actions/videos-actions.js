import { GET_ALL_VIDEOS } from '../types';


export const getAllVideo = () => {
    return (dispatch) => {
        var videos = [];
        firestore.collection("videos")
            .orderBy("updatedAt", "desc")
            .get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    videos.push(doc.data());
                });
                dispatch({
                    type: GET_ALL_VIDEOS,
                    payload: videos
                });
            });
    }
}