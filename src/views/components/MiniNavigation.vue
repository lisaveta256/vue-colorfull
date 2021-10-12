
<template>
  <div>
    <nav>
      <a href="/#/" id="">Home</a>
      |
      <a href="/#/gallery/" id="">Gallery</a>
      |
      <a href="/#/clients/" id="">Clients</a>
      |
      <a v-if="ifToken" href="#" @click="logOut">Log out</a>
      <a v-else href="/#/registration/" id="">Registration</a>
      |
      <a href="/#/about/" id="">About</a>
      |
      <a href="/#/lessons/" id="">Lessons</a>
      |
      <a href="/#/buy/" id="">Buy</a>
      |
      <a href="/#/tarifs/" id="">Tarifs</a>
      |
      <a href="/#/users/" id="">users</a>
      |
      <a v-if="currentTarif == 'premium'" href="/#/addons/" id="">Addons</a>
    </nav>
  </div>
</template>
<style scoped>
/* eslint-disable */
div {
  position: absolute;
  top: 20px;
  right: 20px;
}
nav a {
  color: white !important;
  padding: 4px;
}
</style>
<script>
import axios from "axios";
export default {
  data() {
    return {
      currentTarif: "",
    };
  },
  methods: {
    getTarif() {
      /* var config = {
        headers: {
          Authorization: "Bearer I5PCiLwf70tkhtaAYgmVEjxiFpa8Q35oSUhsCQMm",
        },
      };*/
      axios.get("/api/tarif_user/current").then((data) => {
        this.currentTarif = data["data"]["last_tarif_name"];
      });
    },
    logOut() {
      localStorage.clear();
      axios.post("/api/logout/");
    },
  },
  computed: {
    ifToken: function () {
      if (localStorage.getItem("token") != null) {
        return true;
      } else {
        return false;
      }
    },
  },
  created() {
    this.getTarif();
  },
};
</script>