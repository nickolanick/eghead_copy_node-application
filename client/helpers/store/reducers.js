import AllCoursesReducer from "../reducers/AllCoursesReducer";
import AllLessonsReducer from "../reducers/allLessonsReducer";

// concatenation of ALL reducers
export default {...AllCoursesReducer, ...AllLessonsReducer}

