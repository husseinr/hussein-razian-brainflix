import React from 'react';
import './pageEnteredComments.scss';


function CommentsDisplayed(props) {

    return (
        <div className="comment-entries__card">
            <div className="comment-entries__card-photo"></div>
            <div className="comment-entries__card-content">
                <div className="comment-entries__card-content-info">
                    <p className="comment-entries__card-content-info-name">
                        {props.name}</p>
                    <p className="comment-entries__card-content-info-date">
                        {props.date}</p>
                </div>
                <p className="comment-entries__card-contentcomment">
                    {props.comment}</p>
            </div>
        </div>
    )
}

export default CommentsDisplayed;