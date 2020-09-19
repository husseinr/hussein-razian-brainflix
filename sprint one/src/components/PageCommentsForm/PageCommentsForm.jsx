import React from 'react';
import './pageCommentsForm.scss';
import UserLogo from '../../assets/Images/Mohan-muruge.jpg'

const PageCommentsForm = () => {

    return (
    <section className="comments">
        <h3 className="comments__header">3 Comments</h3>
        <form className="comments__form">
            <img className="comments__form-user-image" src={UserLogo} alt="user-image"></img>
            <div className="comments__form-input">
                <label className="comments__form-comment-label" name="comment-entry-field">JOIN THE CONVERSATION</label>
                <textarea className="comments__form-comment-field" placeholder="Write comment here"></textarea>
                <button className="comments__form-button"> COMMENT</button>
            </div>
        </form>

        <div className="comments__posted">

        </div>

    </section>
    )}




export default PageCommentsForm;
