import React from 'react'
import UploadThumbnail from '../../assets/Images/Upload-video-preview.jpg'
import './pageUploadVideo.scss';


 function PageUploadVideo(props) {
    return (

        <main className="upload">
            <h1 className="upload__header"> Upload Video </h1>
            <section >
                
                <div className="upload-section">
                    <div className="upload-section__thumbnail">
                        <p className="upload-section__thumbnail-label"> VIDEO THUMBNAIL </p>
                        <img className="upload-section__thumbnail-image" src={UploadThumbnail} alt='thumbnail'/>
                    </div>

                    <form className="upload-section__form" onSubmit={props.addVideo}>
                        <label className="upload-section__form-label">TITLE YOUR VIDEO
                            <input className="upload-section__form-title" name="title" type="text" placeholder="Add a title to your video"/>
                        </label>
            
                        <label className="upload-section__form-label">ADD A VIDEO DESCRIPTION
                            <textarea className="upload-section__form-description" name="description" type="text"  placeholder="Add a description of your video"></textarea>
                        </label>

                        <div className="upload-section__form-actions">
                            <div className="upload-section__form-actions-items">
                                <button className="upload-section__form-actions-items-button" type="submit">PUBLISH</button>
                                <p className="upload-section__form-actions-items-cancel">CANCEL</p>
                            </div>
                        </div>
                    </form>
                </div>

            </section>
        </main>

    )
}

export default PageUploadVideo
