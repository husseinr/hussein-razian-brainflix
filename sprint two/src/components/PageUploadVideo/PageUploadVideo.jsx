import React from 'react'
import UploadThumbnail from '../../assets/Images/Upload-video-preview.jpg'
import './pageUploadVideo.scss';


 function PageUploadVideo() {
    return (

        <main className="upload">
            <h1 className="upload__header"> Upload Video </h1>

            <section >
                <div className="upload-section">
                    <div className="upload-section__thumbnail">
                        <p className="upload-section__thumbnail-label"> VIDEO THUMBNAIL </p>
                        <img className="upload-section__thumbnail-image" src={UploadThumbnail} alt='thumbnail'/>
                    </div>

                    <form className="upload-section__form">
                        <div>
                            <label className="upload-section__form-label">TITLE YOUR VIDEO</label>
                            <input className="upload-section__form-title" name="title-input" value="Add a title to your video" placeholder="Add a title to your video"></input>
                        </div>

                        <div>
                            <label className="upload-section__form-label">ADD A VIDEO DESCRIPTION</label>
                            <textarea className="upload-section__form-description" name="description-input" value="Add a description of your video" placeholder="Add a description of your video"></textarea>
                        </div>
                    </form>
                </div>

                <div className="upload-section__actions">
                    <div className="upload-section__actions-items">
                        <button className="upload-section__actions-items-button">PUBLISH</button>
                        <p className="upload-section__actions-items-cancel">CANCEL</p>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default PageUploadVideo
