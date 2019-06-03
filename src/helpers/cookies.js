export const get_cookie = (cookie_name)=>document.cookie.split(";").filter(item=>item.split("=")[0].trim()===cookie_name)
export const get_token = ()=>get_cookie("access_token").length ? get_cookie("access_token")[0].split("=")[1]:null;
// export const get_token = ()=>{let res = get_cookie("access_token")
//     res.isEmpty()?console.log("True"):console.log("false")
// };