import { GET_SAVES, ISavesAction, IStartState } from "../types/saves";

const initialState: IStartState = {
  saves: [],
};

const saves = (state = initialState, action: ISavesAction) => {
  switch (action.type) {
    case GET_SAVES:
      return {
        ...state,
        loadingSaves: true,
        error: null,
      };
    default:
      return state;
  }
};

export default saves;
