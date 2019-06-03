export const registrate = (data, on_success, on_error) => {
    console.log(data, "DATA");
    fetch('/auth/registration', {
        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(function (response) {
        return response.json()
    }).then(function (data) {
        on_success(data);

    }).catch(err=>on_error());

};


export const login = (data, on_success, on_error) => {
    console.log(data, "DATA");
    fetch('/auth/login', {
        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(function (response) {
        return response.json()
    }).then(function (data) {
        console.log(data);
        document.cookie = "access_token="+data['access_token'];
        on_success(data);

    }).catch(err=>on_error());

};