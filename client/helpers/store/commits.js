export default {
    getAllCoursesStart(context, payload) {
        context.commit('getAllCoursesStart', payload);
    },
    getAllCoursesSuccess(context, payload) {
        context.commit('getAllCoursesSuccess', payload);
    },
    getAllCoursesError(context, payload) {
        context.commit('getAllCoursesError', payload);
    },

    getAllLessonsStart(context, payload) {
        context.commit('getAllLessonsStart', payload);
    },
    getAllLessonsSuccess(context, payload) {
        context.commit('getAllLessonsSuccess', payload);
    },
    getAllLessonsError(context, payload) {
        context.commit('getAllLessonsError', payload);
    },
};
