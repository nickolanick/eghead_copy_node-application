const UserLoginReducer = {
    userLoginStart(state, payload) {
        state.allUsers.fetching = true;
        return state;
    },
    userLoginSuccess(state, payload) {
        state.allUsers.data = payload;
        state.allUsers.fetching = false;
        state.allUsers.fetched = true;
        return state;
    },
    userLoginError(state, payload) {
        state.allUsers.error = payload;
        state.allUsers.fetching = false;
        return state;
    },
};
export default UserLoginReducer;