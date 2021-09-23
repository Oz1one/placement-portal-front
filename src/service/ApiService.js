import axios from "axios";

const USER_API_BASE_URL = 'http://localhost:8080/student';


class ApiService {

    fetchUsers() {
        return axios.get(USER_API_BASE_URL);
    }

    fetchUserById(userId) {
        return axios.get(USER_API_BASE_URL + '/' + userId);
    }

    deleteUser(userId) {
        return axios.delete(USER_API_BASE_URL + '/' + userId);
    }

    addStudent(student, course) {
        return axios.post(""+USER_API_BASE_URL+'/registration'+'/'+ course.year+'/'+course.batch +'/'+course.course,student);

    }

    addLink(link) {
        return axios.post(""+USER_API_BASE_URL, link);
    }

    addUser(user) {
        return axios.post(""+USER_API_BASE_URL+'/login', user);
    }
    
    editUser(user) {
        return axios.put(USER_API_BASE_URL + '/' + user.id, user);
    }
    addCred(cred){
        return axios.post(""+USER_API_BASE_URL+'/credential/1', cred);
    }

}

export default new ApiService();