import {LOAD_COMMENT, LOAD_COMMENT_SUCCESS, LOAD_COMMENT_ERROR} from './type';

const loadComment = () => {
  return {
    type: LOAD_COMMENT
  }
}

const loadCommentSuccess = comments => {
  return {
    type: LOAD_COMMENT_SUCCESS,
    payload: comments
  }
}

const loadCommentError = error => {
  return {
    type: LOAD_COMMENT_ERROR,
    payload: error
  }
}



export const ApiCall = () => {

  return dispatch => {

    dispatch(loadComment())



    const fetchData = async url => {
      try {
        const response = await fetch(url)

        if(!response.ok) {
          throw new Error(response.message)
        }
        const fetchedData = await response.json()

        dispatch(loadCommentSuccess(fetchedData))
      }
      catch (error) {

        dispatch(loadCommentError(error.message))
      }
    }

    fetchData('https://jsonplaceholder.typicode.com/comments')
  }
}
