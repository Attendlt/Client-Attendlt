export const initialState = {
  uid: null,
  features: null,
  name: null,
  collegeId: null,
  finishedSetup: false,
  institutes: [],
};

export const actionTypes = {
  SET_UID: "SET_UID",
  SET_USER: "SET_USER",
  SET_FEATURES: "SET_FEATURES",
  SET_INSTITUTES: "SET_INSTITUTES",
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
        name: action.name,
        collegeId: action.collegeId,
        finishedSetup: action.finishedSetup,
      };

    case actionTypes.SET_FEATURES:
      return {
        ...state,
        features: action.features,
      };

    case actionTypes.SET_INSTITUTES:
      return {
        ...state,
        institutes: action.institutes,
      };

    default:
      return state;
  }
};

export default reducer;
