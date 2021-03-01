export const initialState = {
  user: null,
  uid: null,
};

export const actionTypes = {
  SET_USER: "SET_USER",
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
    default:
      return state;
  }
};

export default reducer;
