import CourseCart from "../../components/course_cart";
import {login, registrate} from "../../actions/auth";


const registration_success = (root, result) => {
    const success = document.createElement("div");
    success.innerHTML = `
    SUCCESS !!!)!)!)
    `;
    history.pushState({
        id: 'homepage'
    }, 'Home | My App', "/");
    location.reload();
    root.appendChild(success);
};
const registration_fail = (root, result) => {

};
const handle_login = (e, root) => {
    e.preventDefault();
    console.log(e);
    let inputs = Array.prototype.slice.call(root.getElementsByTagName("input"));
    let data_collect = {}
    let data = {}
    inputs.map(input => console.log(data_collect[input.name] = input.value));
    data['email'] = data_collect['email'];
    data['password'] = data_collect['psw'];
    login(data, (result) => registration_success(root, result), registration_fail);
};

const login_component = (data) => {


    const registration_root = document.createElement("div");

    const button = document.createElement("button");
    button.addEventListener("click", () => handle_login(registration_root));
    registration_root.innerHTML = `
   <form>
  <div class="container">
    <h1>Lgoin</h1>
    <p>Please fill in this form to login</p>
    <hr>

    <label for="email"><b>Email</b></label>
    <input type="text" placeholder="Enter Email" name="email" required>

    <label for="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="psw" required>
    <button class="button">submit</button>
  </div>
</form>
    `;

    registration_root.getElementsByClassName("button")[0].addEventListener("click", (e) => handle_login(e, registration_root));

    return registration_root

};
export default login_component;
