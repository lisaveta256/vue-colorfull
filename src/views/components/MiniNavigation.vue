
<template>
  <div>
    <nav>
      <a href="/#/" id="">Home</a>
      |
      <a href="/#/gallery/" id="">Gallery</a>
      |
      <a href="/#/clients/" id="">Clients</a>
      |
      <a href="/#/registration/" id="">Registration</a>
      | or <a href="#" @click="logOut">Log out</a>
      <a href="/#/about/" id="">About</a>
      |
      <a href="/#/lessons/" id="">Lessons</a>
      |
      <a href="/#/buy/" id="">Buy</a>
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
      axios
        .get("/api/tarif_user/current")
        .then((data) => {
          this.currentTarif =
            data["data"]["tarif_info"]["tarif_user_tarif_name"];
        });
    },
    logOut(){
      axios.post("/api/logout/");
    }
  },
  created() {
    this.getTarif();
  },
};
</script>