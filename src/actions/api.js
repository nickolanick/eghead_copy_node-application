export const lessons_for_course = (course_id, res, rej) => {
    let endpoint = '/api/lessons_for_course/' + course_id;
    fetch(endpoint, {
        method: 'get',
    }).then(function (response) {
        return response.json()
    }).then(function (data) {
        res(data);

    }).catch(err => rej());
};
