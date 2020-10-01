import React from 'react';
import './pageCommentsForm.scss';
import UserLogo from '../../assets/Images/Mohan-muruge.jpg'

function PageCommentsForm  (props) {

    const submit = (e) => {
        e.preventDefault();
    }

    let commentsQty = props.currentVideo.comments && props.currentVideo.comments.length;

    return (
    <section className="comments">
        <h3 className="comments__header"> {commentsQty} Comments</h3>
        <form className="comments__form" onSubmit={submit}>
            <img className="comments__form-user-image" src={UserLogo} alt="profile-pic"></img>
            <div className="comments__form-input">
                <div className="comments__form-input-box">
                    <label className="comments__form-comment-label" name="comment-entry-label">JOIN THE CONVERSATION</label>
                    <textarea className="comments__form-comment-field" name="entry" type="text" placeholder="Write comment here"></textarea>
                </div>
                <button className="comments__form-button"> COMMENT</button>
            </div>
        </form>

        <div className="comments__posted">

        </div>
    </section>
    )
}

export default PageCommentsForm;
