<template>
    <div>
      <h1>Welcome to the Admin Portal</h1>
      <button @click="goToLogin">Login</button>
      <button @click="getStarted">Get Started</button>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      goToLogin() {
        this.$router.push("/login");
      },
      getStarted() {
        alert("Feature not implemented yet!");
      },
    },
  };
  </script>
  
  <style>
  button {
    margin: 10px;
    padding: 10px;
    cursor: pointer;
  }
  </style>
  