export const createComment = comment => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // make async call to database
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;

    firestore
      .collection("comments")
      .add({
        ...comment,
        authorFirstName: profile.firstName,
        authorLastName: profile.lastName,
        authorId: authorId,
        createdAt: new Date()
      })
      .then(() => {
        dispatch({ type: "CREATE_COMMENT", comment: comment });
      })
      .catch(error => {
        dispatch({ type: "CREATE_COMMENT_ERROR", error });
      });
  };
};

export const deleteComment = id => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();

    firestore
      .collection("comments")
      .doc(id)
      .delete()
      .then(() => {
        dispatch({ type: "DELETE_COMMENT" });
      })
      .catch(error => {
        dispatch({ type: "DELETE_COMMENT_ERROR", error });
      });
  };
};
