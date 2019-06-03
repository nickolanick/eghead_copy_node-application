import CourseCart from "../../components/course_cart";
import {registrate} from "../../actions/auth";


const registration_success = (root, result) => {
    const success = document.createElement("div");
    success.innerHTML = `
    SUCCESS !!!)!)!)
    `;
    root.appendChild(success);
};
const registration_fail = (root, result) => {

};
const handle_registration = (e, root) => {
    e.preventDefault();
    console.log(e);
    let inputs = Array.prototype.slice.call(root.getElementsByTagName("input"));
    let data_collect = {}
    let data = {}
    inputs.map(input => console.log(data_collect[input.name] = input.value));
    data['email'] = data_collect['email'];
    data['password'] = data_collect['psw'];
    data['name'] = "kolia";
    console.log(data);
    registrate(data, (result) => registration_success(root, result), registration_fail);
};

const create_input_label = (label) => {
    // const input = document.createElement("input");
    // const label = document.createElement("label");
};
const registration = (data) => {


    const registration_root = document.createElement("div");

    const button = document.createElement("button");
    button.addEventListener("click", () => handle_registration(registration_root));
    // button.innerHTML = "register"
    // registration_root.className = 'registration';
    registration_root.innerHTML = `
   <form>
  <div class="container">
    <h1>Register</h1>
    <p>Please fill in this form to create an account.</p>
    <hr>

    <label for="email"><b>Email</b></label>
    <input type="text" placeholder="Enter Email" name="email" required>

    <label for="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="psw" required>
    <button class="button">submit</button>
    <label for="psw-repeat"><b>Repeat Password</b></label>
    <input type="password" placeholder="Repeat Password" name="psw-repeat" required>
    <hr>
    <p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p>
     <button id="tmp"></button>
  </div>

  <div class="container signin">
    <p>Already have an account? <a href="#">Sign in</a>.</p>
  </div>
</form>
    `;

    registration_root.getElementsByClassName("button")[0].addEventListener("click", (e) => handle_registration(e, registration_root));
    // console.log(registration_root.innerHTML);
    // registration_root.replaceChild(button, registration_root.getElementById("tmp"))

    // button.addEventListener("click", (e) => handle_registration(e, registration_root));

    return registration_root

};
export default registration;
