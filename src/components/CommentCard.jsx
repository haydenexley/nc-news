import React from 'react'

const CommentCard = ({comment}) => {
  return (
    <section role="comment-card" className='comment-card'>
        <li>
            <p>{comment.created_at}</p>
            <p>{comment.author}</p>
            <p>{comment.body}</p>
            <p>{comment.votes} 🗳</p>
        </li>
    </section>
  )
}

export default CommentCard
