<template>
    <div class="container">
        <h2 class="text-center my-4">Employees</h2>
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
              <tr v-for="employee in employees.parsedData" :key="employee.id">
                  <td>{{ employee.id }}</td>
                  <td>{{ employee.name }}</td>
                  <td>{{ employee.surname }}</td>
                  <td>{{ employee.address }}</td>
                  <td>{{ employee.phone }}</td>
                  <td>{{ employee.email }}</td>
                  <td>{{ employee.birthday }}</td>
              </tr>
            </tbody>
        </table>
    </div>
</template>

<script>

    export default {
        name: 'Employees',
        props: ['employees']
        
     }
</script>