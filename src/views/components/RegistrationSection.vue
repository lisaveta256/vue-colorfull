<template>
  <main>
    <form @submit.prevent="submit">
      <div id="login">
        <h2>Registration</h2>
      </div>

      <i class="md-icon md-icon-font md-theme-default"> face </i>
      <input type="text" placeholder="Name" v-model="nameField" /><br />
      <i class="md-icon md-icon-font md-theme-default"> face </i>
      <input type="email" placeholder="Email" v-model="email" /><br />
      <md-icon>lock_outline</md-icon>
      <input type="password" placeholder="Password" v-model="password" /><br />
      <md-icon>lock_outline</md-icon>
      <input
        type="password"
        placeholder="Confirm password"
        v-model="password_confirmation"
      /><br />
      <label for="">Country</label>
      <select v-model="country">
        <option value="1">Belarus</option>
        <option value="2">USA</option>
        <option value="3">Poland</option>
        <option value="4">Russia</option>
      </select>
      <br />
      <label for="">Send to </label>
      <br />
      <span>Email</span>
      <input
        type="checkbox"
        name="mess"
        value="email"
        v-model="message"
      /><br />
      <span>SMS</span>
      <input type="checkbox" name="mess" value="sms" v-model="message" /><br />
      <button>Submit</button>
    </form>
  </main>
</template>
<script>
import axios from "axios";
export default {
  name: "Registration",
  data() {
    return {
      nameField: "",
      email: "",
      password: "",
      password_confirmation: "",
      country: "",
      message: [],
    };
  },
  methods: {
    submit: function () {
      axios
        .post("/api/register", {
          name: this.nameField,
          email: this.email,
          password: this.password,
          password_confirmation: this.password_confirmation,
          country: this.country,
          message: this.message,
        })
        .then((res) => {
          console.log(res);
          this.$router.go('registration');
          // window.location.href='/#/clients';
        //  window.location.reload();
        });
    },
  },
};
</script>
