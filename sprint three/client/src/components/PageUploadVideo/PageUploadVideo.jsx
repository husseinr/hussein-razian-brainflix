import React from 'react'
import UploadThumbnail from '../../assets/Images/Upload-video-preview.jpg'
import './pageUploadVideo.scss';


 function PageUploadVideo(props) {

    return (

        <main className="upload">
            <h1 className="upload__header"> Upload Video </h1>
            <section >
                <form className="upload-form" onSubmit={props.addVideo}>
                    <div className="upload-form-content">
                        <div className="upload-form-content__thumbnail">
                            <p className="upload-form-content__thumbnail-label"> VIDEO THUMBNAIL </p>
                            <img className="upload-form-content__thumbnail-image" src={UploadThumbnail} alt='thumbnail'/>
                        </div>
                        <div className = "upload-form-content-inputs">
                            <label className="upload-form-content-inputs__label">TITLE YOUR VIDEO
                                <input className="upload-form-content-inputs__title" name="title" type="text" placeholder="Add a title to your video"/>
                            </label>

                            <label className="upload-form-content-inputs__label">ADD A VIDEO DESCRIPTION
                                <textarea className="upload-form-content-inputs__description" name="description" type="text"  placeholder="Add a description of your video"></textarea>
                            </label>
                        </div>
                    </div>                       

                    <div className="upload-form-actions">
                        <div className="upload-form-actions__items">
                            <button className="upload-form-actions__items-button" type="submit">PUBLISH</button>
                            <p className="upload-form-actions__items-cancel">CANCEL</p>
                        </div>
                    </div>
                </form>
            </section>
        </main>
    )
}

export default PageUploadVideo
