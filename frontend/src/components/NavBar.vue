<template>
    <nav>
      <ul>
        <li>
          <router-link to="/admin-dashboard">Admin Dashboard</router-link>
        </li>
        <li>
          <router-link to="/add-supervisor">Add Supervisor</router-link>
        </li>
      </ul>
    </nav>
  </template>
  
  <style scoped>
  nav {
    background-color: #333;
    color: white;
    padding: 1em;
  }
  ul {
    display: flex;
    list-style: none;
    gap: 1em;
    padding: 0;
    margin: 0;
  }
  li {
    padding: 0.5em 1em;
    background: #555;
    border-radius: 5px;
  }
  li a {
    color: white;
    text-decoration: none;
  }
  li a:hover {
    text-decoration: underline;
  }
  </style>
  