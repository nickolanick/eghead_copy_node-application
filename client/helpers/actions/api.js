// import store from "../store/store";
import {
    getAllCoursesErrorAction, getAllCoursesStartAction,
    getAllCoursesSuccessAction, getAllLessonsErrorAction, getAllLessonsStartAction, getAllLessonsSuccessAction
} from "../reducers/reducerConstants";
import {get_token} from "../cookies";

export const getAllCourses = (store) => {
    let endpoint = '/api/list_courses';
    store.dispatch(getAllCoursesStartAction, {});
    fetch(endpoint, {
        method: 'get',
        headers: {'Authorization': 'bearer ' + get_token()}
    }).then((response) => {
        return response.json()
    }).then((data) => {
        store.dispatch(getAllCoursesSuccessAction, data);
    }).catch(err => store.dispatch(getAllCoursesErrorAction, err));
};


export const getAllLessons = (store) => {
    let endpoint = '/api/list_lessons';
    store.dispatch(getAllLessonsStartAction, {});
    fetch(endpoint, {
        method: 'get',
        headers: {'Authorization': 'Bearer' + get_token()}
    }).then((response) => {
        return response.json()
    }).then((data) => {
        store.dispatch(getAllLessonsSuccessAction, data);
    }).catch(err => store.dispatch(getAllLessonsErrorAction, err));
};

