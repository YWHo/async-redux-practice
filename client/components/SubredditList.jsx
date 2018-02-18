import React from 'react'
import {connect} from 'react-redux'

import Post from './Post'

// const Subreddit = ({subreddits}) => (
//   <div>
//     {subreddits.map((post, i) =>
//       <Post
//         key={i}
//         title={post.title}
//       />
//     )}
//   </div>
// )
const Subreddit = (props) => (
  <div>
    {props.subreddits.map((post, i) =>
      <Post
        key={i}
        title={post.title}
        url={post.url}
      />
    )}
  </div>
)

const mapStateToProps = (state) => {
  return {
    subreddits: state.subreddits
  }
}

export default connect(
  mapStateToProps
)(Subreddit)
