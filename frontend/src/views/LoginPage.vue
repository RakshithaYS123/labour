<template>
    <div>
      <h1>Admin Login</h1>
      <form @submit.prevent="login">
        <div>
          <label>Username:</label>
          <input type="text" v-model="username" required />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" v-model="password" required />
        </div>
        <button type="submit">Login</button>
      </form>
      <p v-if="error">{{ error }}</p>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  
  export default {
    data() {
      return {
        username: "",
        password: "",
        error: null,
      };
    },
    methods: {
      async login() {
        try {
          this.error = null;
          const response = await axios.post("http://localhost:5000/api/login", {
            username: this.username,
            password: this.password,
          });
          if (response.status === 200) {
            this.$router.push("/admin-dashboard");
          }
        } catch (err) {
          this.error = "Invalid username or password";
        }
      },
    },
  };
  </script>
  
  <style>
  form div {
    margin-bottom: 10px;
  }
  </style>
  