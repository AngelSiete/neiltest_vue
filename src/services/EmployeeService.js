const axios = require('axios');

export async function getAllEmployees() {

    const response = await axios.get('/api/employees');
    return response.data;
}

export async function createEmployee(data) {
    const response = await axios.post('/api/employees', {employee: data});
    return response.data;
}