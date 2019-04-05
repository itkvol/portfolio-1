
export const createComment = (comment) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        
        // make async call to database
        const firestore = getFirestore();
        firestore.collection('comments').add({
            ...comment,
            authorFirstName: 'Booger',
            authorLastName: 'Man',
            authorId: 333,
            createdAt: new Date()
        }).then(() => {
            dispatch({ type: 'CREATE_COMMENT', comment: comment });
        }).catch((error) => {
            dispatch({ type: 'CREATE_COMMENT_ERROR', error})
        })
    }
};