import React from 'react'
import PageHeader from '../PageHeader/PageHeader';
import UploadThumbnail from '../../assets/Images/Upload-video-preview.jpg'
import './pageUploadVideo.scss';


 function PageUploadVideo() {
    return (

            <main className="upload">
                <h1 className="upload__header"> Upload Video </h1>

                <section className="upload-section">
                    <p className="upload-section__label"> VIDEO THUMBNAIL </p>
                    <img className="upload-section__image" src={UploadThumbnail} alt='thumbnail'/>

                    <form className="upload-section__form">
                    <label className="upload-section__form-label">TITLE YOUR VIDEO</label>
                    <input className="upload-section__form-title" name="title-input" value="title" placeholder="Add a title to your video"></input>

                    <label className="upload-section__form-label">ADD A VIDEO DESCRIPTION</label>
                    <textarea className="upload-sectopm__form-description" name="description-input" value="description" placeholder="Add a description of your video"></textarea>

                    <button className="upload-section__form-button">PUBLISH</button>
                    <p className="upload-section__form-cancel">CANCEL</p>
                    </form>
                </section>

            </main>

    )
}

export default PageUploadVideo
