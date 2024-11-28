<template>
  <div>
    <h1>Login</h1>
    <form @submit.prevent="login">
      <div>
        <label for="username">Username:</label>
        <input type="text" v-model="username" id="username" />
      </div>
      <div>
        <label for="password">Password:</label>
        <input type="password" v-model="password" id="password" />
      </div>
      <div>
        <label for="role">Role:</label>
        <select v-model="role" id="role">
          <option value="admin">Admin</option>
          <option value="supervisor">Supervisor</option>
        </select>
      </div>
      <button type="submit">Login</button>
    </form>
    <p v-if="errorMessage">{{ errorMessage }}</p>
  </div>
</template>

<script>
import axios from 'axios';
import { ref } from 'vue'; // Import ref from Vue
import { useRouter } from 'vue-router';

export default {
  setup() {
    const username = ref('');
    const password = ref('');
    const role = ref('admin');
    const errorMessage = ref('');
    const router = useRouter();

    const login = async () => {
      try {
        const endpoint = role.value === 'admin'
          ? 'http://localhost:5000/api/admin/login'
          : 'http://localhost:5000/api/supervisor/login';

        const response = await axios.post(endpoint, { username: username.value, password: password.value });

        if (response.data.success) {
          if (role.value === 'admin') router.push('/admin-dashboard');
          else if (role.value === 'supervisor') router.push('/supervisor-dashboard');
        } else {
          errorMessage.value = response.data.message;
        }
      } catch (error) {
        console.error('Login error:', error);
        errorMessage.value = 'An error occurred while trying to log in.';
      }
    };

    return { username, password, role, errorMessage, login };
  },
};
</script>
