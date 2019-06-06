import AllCoursesReducer from "../reducers/AllCoursesReducer";
import AllLessonsReducer from "../reducers/allLessonsReducer";
import AllUsersReducer from "../reducers/AllUsersReducer";
import UserLoginReducer from "../reducers/LoginReducer";
import UserRegistrationReducer from "../reducers/RegistrationReducer";

// concatenation of ALL reducers
export default {...AllCoursesReducer, ...AllLessonsReducer, ...AllUsersReducer, ...UserLoginReducer, ...UserRegistrationReducer}

