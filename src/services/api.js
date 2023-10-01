import axios from 'axios';

const API_BASE_URL = "https://ap-southeast-2.aws.data.mongodb-api.com/app/data-xvgdi/endpoint/data/v1/action"
const API_KEY = "v8LMUYXdIxg7iniEG5mLrcaiS6sXl6MjwfbGLiMjdVTQbxXkBfe5fr9wpP3gRUTx"
const jsonBody = 
    {
        "collection":"movies", 
        "database":"sample_mflix", 
        "dataSource":"HubCluster"
    }


export const fetchMovies =  async () => {
    const response = await axios.post(`${API_BASE_URL}/findOne`,
    // const response = await axios.post('/findOne',
    jsonBody,
    {
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Request-Headers': '*',
            'api-key':API_KEY
        }
    }
    );
    console.log(response.data)
    // return response.data;
};

// axios.post('/user', {
//     firstName: 'Fred',
//     lastName: 'Flintstone'
//   })
//   .then(function (response) {
//     console.log(response);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });