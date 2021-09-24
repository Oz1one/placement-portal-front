import axios from "axios";

const USER_API_BASE_URL = 'http://localhost:8080/student';


class ApiService {

    fetchStudent() {
        return axios.post(USER_API_BASE_URL+'/allStudent');
    }

    fetchStudentById(Id) {
        return axios.get(USER_API_BASE_URL + '/profile/'+Id);
    }

   fetchPhotoById(id){
       return axios.get(USER_API_BASE_URL+'/photo/'+id);
   }

    addStudent(student) {
        return axios.post(""+USER_API_BASE_URL+'/registration',student);

    }

    addLink(link) {
        return axios.post(""+USER_API_BASE_URL, link);
    }

    loginUser(user) {
        return axios.post(""+USER_API_BASE_URL+'/login', user);
    }
    
    editUser(user) {
        return axios.put(USER_API_BASE_URL + '/' + user.id, user);
    }
    addCred(cred){
        return axios.post(""+USER_API_BASE_URL+'/credential/1', cred);
    }

    fetchResume(id){
        return axios.post(""+USER_API_BASE_URL+'/download/resume/'+id);
    }

    uploadResume(id, formData){
        return axios({
            method: "post",
            url: ""+USER_API_BASE_URL+'/resume/'+id,
            data: formData,
            headers: { "Content-Type": "multipart/form-data" },
          });
    }
    

    

}

export default new ApiService();