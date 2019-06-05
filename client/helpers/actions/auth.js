import {
    getAllUsersErrorAction, getAllUsersStartAction,
    getAllUsersSuccessAction
} from "../reducers/reducerConstants";

export const getAllUsers = (store) => {
    let endpoint = '/auth/get_users';
    store.dispatch(getAllUsersStartAction, {});
    fetch(endpoint, {
        method: 'get',
    }).then(function (response) {
        return response.json();
    }).then(function (data) {
        store.dispatch(getAllUsersSuccessAction, data);
    }).catch(err => store.dispatch(getAllUsersErrorAction, err));
};