export const initialState = {
  user: null,
  uid: null,
  features: null,
  name: null,
  collegeId: null,
};

export const actionTypes = {
  SET_USER: "SET_USER",
  SET_USERDATA: "SET_USERDATA",
  SET_FEATURES: "SET_FEATURES",
};

const reducer = (state, action) => {
  // console.log(action);

  switch (action.type) {
    case actionTypes.SET_USER:
      return {
        ...state,
        user: action.user,
        uid: action?.user?.uid || null,
      };

    case actionTypes.SET_USERDATA:
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
      };

    default:
      return state;
  }
};

export default reducer;
