import {
  ADD_LIKE,
  ILikeAction,
  ILikesState,
  REMOVE_LIKE,
} from "../types/likes";

const initialState: ILikesState = {
  likes: [],
};

const likes = (state = initialState, action: ILikeAction) => {
  switch (action.type) {
    case ADD_LIKE:
      return {
        ...state,
        likes: [...action.payload],
        message: "Успешное добавление",
      };
    case REMOVE_LIKE:
      return {
        ...state,
        likes: [...action.payload],
        message: "Успешное удаление",
      };
    default:
      return state;
  }
};

export default likes;
