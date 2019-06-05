const allCourses = {
    allCourses: {
        fetching: false,
        fetched: false,
        error: false,
        data: []
    }
};

const allLessons = {
    allLessons: {
        fetching: false,
        fetched: false,
        error: false,
        data: []
    }
};

const allUsers = {
    allUsers: {
        fetching: false,
        fetched: false,
        error: false,
        data: []
    }
};


export default {
    ...allCourses, ...allLessons, ...allUsers

};
