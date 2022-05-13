import {
  ADD_COMMENT,
  DELETE_COMMENT,
  GET_COMMENTS,
  IActionComment,
  ICommentState,
} from "../types/comments";

const inintialState: ICommentState = {
  comments: [],
};

const comments = (state = inintialState, action: IActionComment) => {
  switch (action.type) {
    case GET_COMMENTS:
      return {
        ...state,
        comments: [...action.payload],
      };

    case ADD_COMMENT:
      return {
        ...state,
        comments: [...state.comments, action.payload],
      };

    case DELETE_COMMENT:
      return {
        ...state,
        comments: [
          ...state.comments.filter((comment) => {
            return comment._id !== action.payload;
          }),
        ],
      };

    default:
      return state;
  }
};

export default comments;
