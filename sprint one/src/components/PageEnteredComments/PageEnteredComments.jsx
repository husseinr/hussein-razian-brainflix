import React from 'react';
import './pageEnteredComments.scss';

// const videoComments = (comments) => {

//     return (
//         <div className="comment-entries__card">
//             <div className="comment-entries__card-photo"></div>
//             <div className="comment-entries__card-content">
//                 <div className="comment-entries__card-content-info">
//                     <p className="comment-entries__card-content-info-name">{comments.name}</p>
//                     <p className="comment-entries__card-content-info-date">{comments.date}</p>
//                 </div>
//                 <p className="comment-entries__card-contentcomment">{comments.comment}</p>
//             </div>
//         </div>
//     )
// }

// function CommentsDisplayed() {
//     const pageComments = enteredComments.map((comment) =>
//     videoComments(comment));
//     return <section className="comment-entries">{pageComments}</section>;
    
// }

//================================================ Using Props
// const CommentsDisplayed = ({commentEntry}) => {

//     const enteredComments = [

//         {
//             name: "Michael Lyons",
//             date: "12/18/2018",
//             comment:`They BLEW the ROOF off at their
//             last show, once everyone started
//             figuring out they were going. This is
//             still simply the greatest opening of a
//             concert I have EVER witnessed.`,
//             id: '001'
//         },
        
//         {
//             name: "Gary Wong",
//             date: "12/12/2018",
//             comment:`Every time I see him shred I feel so
//             motivated to get off my couch and
//             hop on my board. He’s so talented! I
//             wish I can ride like him one day so I
//             can really enjoy myself!`,
//             id: '002'
//         },
    
//         {
//             name: "Theodore Duncan",
//             date: "11/15/2018",
//             comment:`How can someone be so good!!!
//             You can tell he lives for this and
//             loves to do it every day. Everytime I
//             see him I feel instantly happy! He’s
//             definitely my favorite ever!`,
//             id: '003'
//         },    
//     ];
    
//     return (
//         enteredComments.map(comment => {
//         return <div className="comment-entries__card" key={comment.id}>
//                     <div className="comment-entries__card-photo"></div>
//                     <div className="comment-entries__card-content">
//                         <div className="comment-entries__card-content-info">
//                             <p className="comment-entries__card-content-info-name">{comment.name}</p>
//                             <p className="comment-entries__card-content-info-date">{comment.date}</p>
//                         </div>
//                         <p className="comment-entries__card-contentcomment">{comment.comment}</p>
//                     </div>
//                 </div>
//         })
//     )
// }

// export default CommentsDisplayed;

//================================================ Using State

class CommentsDisplayed extends React.Component { 

    state = {
        enteredComments: [

            {
                name: "Michael Lyons",
                date: "12/18/2018",
                comment:`They BLEW the ROOF off at their
                last show, once everyone started
                figuring out they were going. This is
                still simply the greatest opening of a
                concert I have EVER witnessed.`,
                id: '001'
            },
            
            {
                name: "Gary Wong",
                date: "12/12/2018",
                comment:`Every time I see him shred I feel so
                motivated to get off my couch and
                hop on my board. He’s so talented! I
                wish I can ride like him one day so I
                can really enjoy myself!`,
                id: '002'
            },
        
            {
                name: "Theodore Duncan",
                date: "11/15/2018",
                comment:`How can someone be so good!!!
                You can tell he lives for this and
                loves to do it every day. Everytime I
                see him I feel instantly happy! He’s
                definitely my favorite ever!`,
                id: '003'
            },    
        ]
    }

    render() {

    return (
       this.state.enteredComments.map(comment => {
        return <div className="comment-entries__card" key={comment.id}>
                    <div className="comment-entries__card-photo"></div>
                    <div className="comment-entries__card-content">
                        <div className="comment-entries__card-content-info">
                            <p className="comment-entries__card-content-info-name">{comment.name}</p>
                            <p className="comment-entries__card-content-info-date">{comment.date}</p>
                        </div>
                        <p className="comment-entries__card-contentcomment">{comment.comment}</p>
                    </div>
                </div>
        })
    )
};
}

export default CommentsDisplayed;