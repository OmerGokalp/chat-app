<template>
  <div class="welcome container">
    <p>Welcome</p>
    <div v-if="showLogin">
      <h2>Login</h2>
      <LoginForm></LoginForm>
      <p>No account yet? <span @click="showLogin = false">Sign Up</span></p>
    </div>
    <div v-else>
      <h2>Sign Up</h2>
      <SignupForm></SignupForm>
      <p>Already registered? <span @click="showLogin = true">Login</span></p>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import SignupForm from "../components/SignupForm.vue";
import LoginForm from "../components/LoginForm.vue";
export default {
  components: { SignupForm, LoginForm },
  setup() {
    const showLogin = ref("true");
    return { showLogin };
  },
}
</script>

<style>
.welcome {
  text-align: center;
  padding: 20px 0;
}
.welcome form {
  width: 300px;
  margin: 20px auto;
}
.welcome label {
  display: block;
  margin: 20px 0 10px;
}
.welcome input {
  width: 100%;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid #ddd;
  outline: none;
  color: #777;
  margin: 10px auto;
}
.welcome button {
  margin: 20px auto;
  background-color: aquamarine;
  color:#4e4e4e;
  border: none;
  border-radius: 20px;
  font-size: large;
}
.welcome span {
  font-weight: bold;
  text-decoration: underline;
  cursor: pointer;
}
</style>