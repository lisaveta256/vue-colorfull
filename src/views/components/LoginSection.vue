<template>
  <form @submit.prevent="submit">
    <div id="login">
      <h2>Login</h2>
      <md-button
        slot="buttons"
        href="javascript:void(0)"
        class="md-just-icon md-simple md-white"
      >
        <i class="fab fa-facebook-square"></i>
      </md-button>
      <md-button
        slot="buttons"
        href="javascript:void(0)"
        class="md-just-icon md-simple md-white"
      >
        <i class="fab fa-twitter"></i>
      </md-button>
      <md-button
        slot="buttons"
        href="javascript:void(0)"
        class="md-just-icon md-simple md-white"
      >
        <i class="fab fa-google-plus-g"></i>
      </md-button>
    </div>

    <i class="md-icon md-icon-font md-theme-default"> face </i>
    <input type="text" placeholder="Email" v-model="email" /><br />
    <md-icon>lock_outline</md-icon>
    <input type="password" placeholder="Password" v-model="password" /><br />
    <button>Submit</button>
  </form>
</template>
<style lang="scss" scoped>
.registration.wrapper {
  form {
    padding-top: 200px !important;
  }
}
</style>
<script>
import axios from "axios";
//import useRouter from 'vue-router';

export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: ""
      
    };
  },
  methods: {
    submit: function () {
     // var router=useRouter();
      axios
        .post("/api/login",{
            email: this.email,
            password: this.password
          //,
         // headers: {"Accept": "application/json"}
        })
        .then((res) => {
          var token = res.data.token;
          localStorage.setItem('token',token);
          //console.log(res);
          this.$router.push('/')
        });
    },
  },
};
</script>