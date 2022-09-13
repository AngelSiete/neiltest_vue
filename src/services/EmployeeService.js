const axios = require('axios');

export async function getAllEmployees() {

    const response = await axios.get('/api/employees');
    return response.data;
}


export async function getEmployeeById(id) {

    const response = await axios.get('/api/employees/'+ id);
    return response.data;
}

export async function createEmployee(data) {
    const response = await axios.post('/api/employees', {id: data.id, name: data.name, surname:data.surname,address:data.address,phone:data.phone,email:data.email,birthday:data.birthday});
    return response.data;
}