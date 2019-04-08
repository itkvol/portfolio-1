

const initState = {
    comments: [
        {id: '1', title: 'first comment', content: 'good job, man!'},
        {id: '2', title: 'hello', content: 'Hi everyone'},
        {id: '3', title: 'app', content: 'looking forvard to cooperate'},
    ]
};

const commentsReducer = (state = initState, action) => {
    

        switch (action.type){
            
            case 'CREATE_COMMENT':
            console.log('created comment', action.comment);
            return state; 
            
            case 'CREATE_COMMENT_ERROR':
            console.log('create comment error', action.error);
            return state;
            case 'DELETE_COMMENT':
            console.log('comment deleted');
            return state;
            case 'DELETE_COMMENT_ERROR':
            console.log('delete comment error', action.error);
            return state;
            default: 
            return state;           

        }  
}

export default commentsReducer;