import React from 'react';
import "./commentsList.css";



const CommentsList = (props) => {
    let list = null;
    
    
    list = props.comments && props.comments.map(item => {
        
        return (

            <li className="collection-item avatar" key={item.id}><i className="material-icons circle">folder</i>
                <strong>{item.title}</strong>
                <p>{item.content}</p>
            </li>
   
        )

    }) 
   
    return (
        
            <div className="comments-list-wrapper">
                <h4 className="grey-text text-darken-3 center">Comments List</h4>
                <ul className="collection">
                    {list}
                </ul>
            </div>
        
    )
}

export default CommentsList;
