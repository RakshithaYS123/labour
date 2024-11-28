<template>
    <div>
      <h1>Add Supervisor</h1>
      <form @submit.prevent="addSupervisor">
        <input v-model="username" type="text" placeholder="Supervisor Username" required />
        <input v-model="password" type="password" placeholder="Supervisor Password" required />
        <button type="submit">Add Supervisor</button>
        <p v-if="error" style="color: red;">{{ error }}</p>
      </form>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        username: '',
        password: '',
        error: ''
      };
    },
    methods: {
      async addSupervisor() {
        try {
          const response = await axios.post('http://localhost:5000/api/supervisor/add', {
            username: this.username,
            password: this.password
          });
          
          // Handle success
          alert(response.data.message);
        } catch (err) {
          // Handle error
          this.error = err.response?.data?.message || 'Failed to add supervisor.';
        }
      }
    }
  };
  </script>
  