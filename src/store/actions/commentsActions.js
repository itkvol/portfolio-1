export const createComment = (comment) => {
    return (dispatch, getState) => {
       
        // make async call to database
        dispatch({ type: 'CREATE_COMMENT', comment: comment });
    }
};