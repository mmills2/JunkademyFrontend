import axios from 'axios'

const INSTRUCTOR = 'in28minutes'
const PASSWORD = 'dummy'
const API_URL = 'http://localhost:8080'
const LOGIN_API_URL = `${API_URL}/instructors/${INSTRUCTOR}`

class CourseDataService {

    retrieveAllCourses(name) {
        console.log('executed service')
        return axios.get(`${LOGIN_API_URL}/courses`,
            { headers: { authorization: 'Basic ' + window.btoa(INSTRUCTOR + ":" + PASSWORD) } }
        );
    }
}

export default new CourseDataService()