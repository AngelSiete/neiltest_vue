<template>
     <div class="container">
      <div class="row">
          <div class="col-md-12 mrgnbtm my-4">
          <h2>Find Employee</h2>
          <div class="form-group col-md-6">
                          <label htmlFor="exampleInputEmail1">ID</label>
                          <input type="text" class="form-control" v-model="id" name="id" id="id" aria-describedby="emailHelp" placeholder="Id" />
                      </div>
          <button type="button" @click='GetEmployeeById()' class="btn btn-danger m-auto d-flex">Find</button>
          </div>
          <table class="table table-bordered w-75 m-auto">
            <thead>
            <tr>
                <th>Id</th>
                <th>Firstname</th>
                <th>Surname</th>
                <th>Adress</th>
                <th>Phone number</th>
                <th>Email</th>
                <th>Birthday</th>
            </tr>
            </thead>
            <tbody>
              <!-- <tr v-bind="employees.userById" :key="employee.id">
                  <td>{{ employee.id }}</td>
                  <td>{{ employee.name }}</td>
                  <td>{{ employee.surname }}</td>
                  <td>{{ employee.address }}</td>
                  <td>{{ employee.phone }}</td>
                  <td>{{ employee.email }}</td>
                  <td>{{ employee.birthday }}</td>
              </tr> -->
            </tbody>
        </table>
      </div>
      </div>
</template>

<script>
    import Employees from './Employees.vue'
    export default {
      name: 'GetEmployeeById',
      data() {
        return {
          id: '',
          name: '',
          surname: '',
          email: '',
          address: '',
          phone: '',
          birthday: ''
        }
      },
      methods: {
        GetEmployeeById(id){

        }
          
      }
    }
    </script>