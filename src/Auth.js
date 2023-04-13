import axios from 'axios'

const USER = 'test'
const PASSWORD = 'junkademy2023'
const API_URL = 'http://localhost:8080'
const LOGIN_API_URL = `${API_URL}//${USER}`

class DataService {

    retrieveAllCourses(name) {
        console.log('executed service')
        return axios.get(`${LOGIN_API_URL}/user`,
            { headers: { authorization: 'Basic ' + window.btoa(USER + ":" + PASSWORD) } }
        );
    }
}

export default new DataService()