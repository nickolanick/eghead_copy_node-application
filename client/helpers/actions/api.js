// import store from "../store/store";
import {
    getAllCoursesErrorAction, getAllCoursesStartAction,
    getAllCoursesSuccessAction, getAllLessonsErrorAction, getAllLessonsStartAction, getAllLessonsSuccessAction
} from "../reducers/reducerConstants";

export const getAllCourses = (store) => {
    let endpoint = '/api/list_courses';
    store.dispatch(getAllCoursesStartAction, {});
    fetch(endpoint, {
        method: 'get',
    }).then(function (response) {
        return response.json()
    }).then(function (data) {
        store.dispatch(getAllCoursesSuccessAction, data);
    }).catch(err => store.dispatch(getAllCoursesErrorAction, err));
};


export const getAllLessons = (store) => {
    let endpoint = '/api/list_lessons';
    store.dispatch(getAllLessonsStartAction, {});
    fetch(endpoint, {
        method: 'get',
    }).then(function (response) {
        return response.json()
    }).then(function (data) {
        store.dispatch(getAllLessonsSuccessAction, data);
    }).catch(err => store.dispatch(getAllLessonsErrorAction, err));
};

