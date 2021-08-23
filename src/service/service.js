import axios from 'axios'

const ListeUser = () => {
  return axios.get("https://infliyonce.herokuapp.com/api/users");
};

const UpdateEtat = (data,id) => {
  return axios.put("https://infliyonce.herokuapp.com/api/users/"+id,data);
};

const ListeCompanie = () =>{
  return axios.get('https://infliyonce.herokuapp.com/api/campagne')
}

const AddCompanier = (data,id) =>{
  return axios.post('https://infliyonce.herokuapp.com/api/campagne/'+id,data)
}
const Signup = (data) => {
  return axios.post("https://infliyonce.herokuapp.com/api/auth/signup",data);
};

const Signin = (data) => {
  return axios.post("https://infliyonce.herokuapp.com/api/auth/signin", data)
}

const ForgetPassword = (data) => {
    return axios.post("https://infliyonce.herokuapp.com/api/auth/changepassword", data)
  }

export {
    ListeUser,
    UpdateEtat,
    ListeCompanie,
    AddCompanier,
    Signup,
    Signin,
    ForgetPassword
};