<template>
    <div class="container">
      <div class="row">
          <div class="col-md-12 mrgnbtm my-4">
          <h2>Create Employee</h2>
          <div class="formContainer d-flex">
            <form>
                  <div class="row">
                      <div class="form-group col-md-6">
                          <label htmlFor="exampleInputEmail1">Name</label>
                          <input type="text" class="form-control" v-model="name" name="name" id="name" aria-describedby="emailHelp" placeholder="Name" />
                      </div>
                      <div class="form-group col-md-6">
                          <label htmlFor="exampleInputPassword1">Surname</label>
                          <input type="text" class="form-control" v-model="surname" name="surname" id="surname" placeholder="Surname" />
                      </div>
                  </div>
                  <div class="row mb-4">
                      <div class="form-group col-md-12">
                          <label htmlFor="exampleInputEmail1">Email</label>
                          <input type="text" class="form-control" v-model="email" name="email" id="email" aria-describedby="emailHelp" placeholder="Email" />
                      </div>
                  </div>
              </form>
              <form class="mx-4">
                  <div class="row">
                      <div class="form-group col-md-6">
                          <label htmlFor="exampleInputEmail1">Address</label>
                          <input type="text" class="form-control" v-model="address" name="address" id="address" aria-describedby="emailHelp" placeholder="Address" />
                      </div>
                      <div class="form-group col-md-6">
                          <label htmlFor="exampleInputPassword1">Phone</label>
                          <input type="text" class="form-control" v-model="phone" name="surname" id="phone" placeholder="Phone" />
                      </div>
                  </div>
                  <div class="row mb-4">
                      <div class="form-group col-md-12">
                          <label htmlFor="exampleInputEmail1">Birthday</label>
                          <input type="text" class="form-control" v-model="date" name="date" id="date" aria-describedby="emailHelp" placeholder="Date" />
                      </div>
                  </div>
              </form>
          </div>
          <button type="button" @click='createEmployee()' class="btn btn-danger m-auto d-flex">Create</button>
          </div>
      </div>
      </div>
  </template>
  
  <script>
  export default {
    name: 'CreateEmployee',
    data() {
      return {
        name: '',
        surname: '',
        email: '',
        address: '',
        phone: '',
        date: ''
      }
    },
    methods: {
        createEmployee() {
            console.log(this.name)
            const payload = {
                name: this.name,
                surname: this.surname,
                email: this.email,
                address : this.address,
                phone : this.phone,
                date : this.date,
            }
            this.$emit('createEmployee', payload)
            this.clearForm();
        },
        clearForm() {
            this.name = "";
            this.lastName = "";
            this.email = "";
        }
    }
  }
  </script>