import React from 'react';
import "./commentsList.css";


const CommentsList = (props) => {
    
    let list = null;
    
    console.log(props)
    list = props.comments && props.comments.map(item => {
        
        return (
            
            <li className="collection-item avatar" key={item.id}>
            <div className="message-hover">
            <i className="material-icons">highlight_off</i>
            </div>
                 <span className="circle center white-text red darken-3" >{item.authorFirstName[0]}{item.authorLastName[0]}</span>
                <strong>{item.authorFirstName} {item.authorLastName}</strong> 
                {/* <span>Author ID: {item.authorId}</span> */}
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
