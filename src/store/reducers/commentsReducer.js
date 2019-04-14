const initState = {
  comments: []
};

const commentsReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_COMMENT":
      return state;
    case "CREATE_COMMENT_ERROR":
      return state;
    case "DELETE_COMMENT":
      return state;
    case "DELETE_COMMENT_ERROR":
      return state;
    default:
      return state;
  }
};

export default commentsReducer;
