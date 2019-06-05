import {
    getAllUsersErrorAction, getAllUsersStartAction,
    getAllUsersSuccessAction
} from "../reducers/reducerConstants";

export const getAllUsers = (store) => {
    let endpoint = '/auth/get_users';
    store.dispatch(getAllUsersStartAction, {});
    fetch(endpoint, {
        method: 'get',
    }).then((response) => {
        return response.json();
    }).then((data) => {
        store.dispatch(getAllUsersSuccessAction, data);
    }).catch(err => store.dispatch(getAllUsersErrorAction, err));
};

export const login = (store,data) => {
    let endpoint = '/auth/login';
    store.dispatch(, {});
    fetch(endpoint, {
        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(function (response) {
        return response.json();
    }).then(function (data) {
        store.dispatch(, data);
    }).catch(err => store.dispatch(, err));
};
