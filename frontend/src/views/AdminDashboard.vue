<template>
  <div>
    <h1>Admin Dashboard</h1>
    <p>Welcome to the Admin Dashboard!</p>
    <button @click="goToAddSupervisor">Add Supervisor</button>
  </div>
</template>

<script>
export default {
  methods: {
    goToAddSupervisor() {
      this.$router.push("/add-supervisor");
    },
  },
};
</script>
