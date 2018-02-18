import React from 'react'

// const Post = ({title}) => (
//   <div>{title}</div>
// )
const Post = (props) => {
  console.log('Post props: ', props)
  return (<div><a href={props.url}>{props.title}</a></div>)
}

export default Post
