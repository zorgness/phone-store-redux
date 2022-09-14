import React, { useEffect, Fragment } from 'react'
import { connect } from 'react-redux'
import { ApiCall } from '../redux/comment/actionComment';

const CommentContainer = ({apiData, apiComment}) => {

  useEffect(() => {

    apiComment()

  }, [apiComment])

  const displayApiData = apiData.isLoading ? (

    <div>Loading...</div>
  )
  : apiData.error ? (

    <p>{apiData.error}</p>
  )
  :
        apiData.comments.map(comment => {
          return (
            <div key={comment.id} className="comments">
              <p>{comment.body}</p>
            </div>
          )
    })



  return (

    <Fragment>
      <div>CommentContainer</div>
        {displayApiData}
    </Fragment>

  )
}

const mapStateToProps = state => {
  return {
    apiData: state.comment
  }
}

const mapDispatchToProps = dispatch => {
  return {
    apiComment: () => dispatch(ApiCall())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentContainer)
