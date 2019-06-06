// import store from "../store/store";
import {
    getAllCoursesErrorAction,
    getAllCoursesStartAction,
    getAllCoursesSuccessAction,
    getAllLessonsErrorAction,
    getAllLessonsStartAction,
    getAllLessonsSuccessAction
} from "../reducers/reducerConstants";
import {get_token} from "../cookies";

export const getAllCourses = async store => {
    try {
        let endpoint = "/api/courses";
        store.dispatch(getAllCoursesStartAction, {});

        const response = await fetch(endpoint, {
            method: "get",
            headers: {Authorization: "bearer " + get_token()}
        });
        const data = await response.json();

        store.dispatch(getAllCoursesSuccessAction, data);
    } catch (err) {
        store.dispatch(getAllCoursesErrorAction, err);
    }
};


export const getAllLessons = async store => {
    try {
        let endpoint = "/api/lessons";
        store.dispatch(getAllLessonsStartAction, {});

        const response = await fetch(endpoint, {
            method: "get",
            headers: {Authorization: "bearer " + get_token()}
        });
        const data = await response.json();

        store.dispatch(getAllLessonsSuccessAction, data);
    } catch (err) {
        store.dispatch(getAllLessonsErrorAction, err);
    }
};