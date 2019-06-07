import {
    getAllCoursesErrorAction,
    getAllCoursesStartAction,
    getAllCoursesSuccessAction,
    getAllUsersErrorAction,
    getAllUsersStartAction,
    getAllUsersSuccessAction,
    userLoginErrorAction,
    userLoginStartAction,
    userLoginSuccessAction,
    userRegistrationErrorAction,
    userRegistrationStartAction,
    userRegistrationSuccessAction
} from "../reducers/reducerConstants";
import {get_token} from "../cookies";

export const getAllUsers = store => {
    let endpoint = "/auth/users";
    store.dispatch(getAllUsersStartAction, {});
    fetch(endpoint, {
        method: "get",
        headers: {Authorization: "bearer " + get_token()}
    })
        .then(response => {
            return response.json();
        })
        .then(data => {
            store.dispatch(getAllUsersSuccessAction, data);
        })
        .catch(err => store.dispatch(getAllUsersErrorAction, err));
};

export const login = (store, data) => {
    let endpoint = "/auth/login";
    store.dispatch(userLoginStartAction, {});
    fetch(endpoint, {
        method: "post",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            store.dispatch(userLoginSuccessAction, data);
        })
        .catch(err => store.dispatch(userLoginErrorAction, err));
};

export const registrate = (store, data) => {
    let endpoint = "/auth/users";
    store.dispatch(userRegistrationStartAction, {});
    fetch(endpoint, {
        method: "post",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            store.dispatch(userRegistrationSuccessAction, data);
        })
        .catch(err => store.dispatch(userRegistrationErrorAction, err));
};


export const getUser = async (store, user_id, post_data = false) => {
    try {
        let endpoint = "/auth/users/" + user_id;
        store.dispatch(userLoginStartAction, {});
        const method = post_data?"post":"get";
        const body = post_data?JSON.stringify(post_data):null;
        const response = await fetch(endpoint, {
            method:  method,
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: "bearer " + get_token()},
            body:body
        });
        // const response = await fetch(endpoint, {
        //     method:  "get",
        //     headers: {
        //         Authorization: "bearer " + get_token()},
        // });
        const data = await response.json();
        store.dispatch(userLoginSuccessAction, data);
    } catch (err) {
        store.dispatch(userLoginErrorAction, err);
    }

};
