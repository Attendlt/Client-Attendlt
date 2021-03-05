export const initialState = {
  uid: null,
  features: null,
  name: null,
  collegeId: null,
  finishedSetup: false,
};

export const actionTypes = {
  SET_UID: "SET_UID",
  SET_USER: "SET_USER",
  SET_FEATURES: "SET_FEATURES",
};

const reducer = (state, action) => {
  // console.log(action);

  switch (action.type) {
    case actionTypes.SET_UID:
      return {
        ...state,
        uid: action.uid,
      };

    case actionTypes.SET_USER:
      return {
        ...state,
        features: action.features,
        name: action.name,
        collegeId: action.collegeId,
      };

    case actionTypes.SET_FEATURES:
      return {
        ...state,
        features: action.features,
        finishedSetup: true,
      };

    default:
      return state;
  }
};

export default reducer;
