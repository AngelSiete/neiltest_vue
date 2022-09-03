<template>
    <div class="hello">
      <Header />
      <div class="container mrgnbtm">
            <div class="row">
              <div class="col-md-8">
                  <CreateEmployee @createEmployee="employeeCreate($event)" />
              </div>
            </div>
      </div>
      <div class="row mrgnbtm">
          <Employees  :employees="employees" />
      </div>
    </div>
  </template>
  
  <script>
  import Header from './Header.vue'
  import CreateEmployee from './CreateEmployee.vue'
  import DisplayBoard from './DisplayBoard.vue'
  import Employees from './Employees.vue'
  import { getAllEmployees, createEmployee } from '../services/EmployeeService'
  
  export default {
    name: 'Dashboard',
    components: {
      Header,
      Employees,
      DisplayBoard,
      CreateEmployee,
    },
    data() {
        return {
            employees: [],
        }
    },
    methods: {
      getAllEmployees() {
        getAllEmployees().then(response => {
          console.log(response)
          this.employees = response
        })
      },
      employeeCreate(data) {
        console.log('data:::', data)
        createEmployee(data).then(response => {
          console.log(response);
          this.getAllEmployees();
        });
      }
    },
    mounted () {
      this.getAllEmployees();
    }
  }
  </script>