<template>
  <div class="wrapper registration">
    <main>
      <div id="section5">
        <login-section v-if="registered"></login-section>
        <registration-section v-else></registration-section>
        <h2 v-if="registered">
          Not registering yet?
          <a href="#/registration" @click="chageRegistered(false)">Registration</a>
        </h2>
        <h2 v-else>
          <a href="#/registration" @click="chageRegistered(true)">Back to login</a>
        </h2>
      </div>
    </main>
  </div>
</template>

<style lang="scss">
.registration.wrapper {
  button {
    background: #ffffff;
    padding: 8px 22px;
    border: 1px solid #808080b8;
    border-radius: 5px;
    margin-left: 50%;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
    color: #4caf50;
    -webkit-box-shadow: 2px 2px 4px #808080b8;
    box-shadow: 2px 2px 4px #8080805c;
    margin-top: 34px;
  }
  label,
  span {
    width: 120px;
    display: inline-block;
  }
  form {
    padding-top: 107px !important;
    padding: 23px;
    background: white;
    min-width: 420px;
    width: 40%;
    margin-left: 50%;
    transform: translateX(-50%);
    margin-top: 20px;
    border-radius: 8px;
    box-shadow: -1px -1px 4px gray;
    margin-top: 45px;
    margin-bottom: 45px;
  }
  #login {
    display: inline-block;
    text-align: center;
    width: calc(100% - 20px);
    background: linear-gradient(60deg, #66bb6a, #388e3c);
    color: white;
    padding: 7px 15px;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    margin-top: -12px;
    box-shadow: 0 5px 20px 0 rgb(0 0 0 / 20%),
      0 13px 24px -11px rgb(76 175 80 / 60%);
  }
  input {
    display: inline-block;
    margin: 4px;
  }
  input[type="text"],input[type="email"], input[type="password"] {
    width: 90%;
    line-height: 23pt;
    background: none;
    border: none;
    border-bottom: 1px solid gray;
    color: gray;
  }
  select {
    border: none;
    border-bottom: 1px gray solid;
    border-right: 1px gray solid;
    line-height: 23pt;
    margin: 4px;
    padding: 4px 22px;
    width: 65%;
  }
  h2 {
    font-family: Courier New, monospace;
  }
}
</style>
<style >
</style>


<script>
import LoginSection from "./components/LoginSection.vue";
import RegistrationSection from "./components/RegistrationSection.vue";

export default {
  components: {
    LoginSection,
    RegistrationSection,
  },
  bodyClass: "login-registration-page",
  data() {
    return {
      registered: true,
    };
  },
  methods: {
    chageRegistered(value) {
      this.registered = value;
    },
  },
};
</script>

<style lang="css"></style>
