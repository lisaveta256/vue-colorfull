
<template>
  <div>
    <nav>
      <a href="/#/" id="">Home</a>
      |
      <a href="/#/gallery/" id="">Gallery</a>
      |
      <a href="/#/about/" id="">About</a>
      |
      <a href="/#/clients/" id="">Clients</a>
      |
      <a v-if="!ifToken" href="/#/registration/" id="">Registration</a>
      |
      <a href="/#/lessons/" id="">Lessons</a>
      |
      <a href="/#/tarifs/" id="">Tarifs users</a>
      |
      <a href="/#/buy/" id="">Buy</a>
      |
      <ul v-if="ifToken">
        <li><i class="fa fa-user" aria-hidden="true" @click="show=!show"></i></li>
        <li v-if='show'><a href="/#/account/">Account</a></li>
        <li v-if='show'><a href="#" @click="logOut">Log out</a></li>
        <li v-if="(currentTarif == 'premium' && show == true)">
          <a href="/#/addons/" id="">Addons</a>
        </li>
      </ul>
    </nav>
  </div>
</template>
<style scoped>
/* eslint-disable */
ul {
  display: inline-block;
  vertical-align: top;
}
li{
  min-width: 120px;

}
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
      show:false
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
      window.location.reload();
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