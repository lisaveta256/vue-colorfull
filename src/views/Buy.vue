<template>
  <main>
    <h3>
      Hello,
      <b class="user-info"
        >{{ userData["user_info"] }}</b
      >!
    </h3>
    <span>
      Your tarif is
      <b class="user-info"
        >{{ userData["tarif_info"]["tarif_user_tarif_name"] }}</b
      >.</span
    ><br />
    <span>
      Data of activation is
      <b class="user-info"
        >{{ userData["tarif_info"]["tarif_user_tarif_updated_at"] }}</b
      >.</span
    >
    <hr />
    <span> You can view <a href="#" id="/#/lessons/">lessons</a> </span>
    <h3 class="blue">Change tarif</h3>

    <tarif-div :description="descriptionArray"></tarif-div>
  </main>
</template>
<style scoped>
main {
  background-color: white;
  border-radius: 9px;
  margin: -56px 27px 27px 27px;
  padding-bottom: 12px;
  padding: 56px;
}
.user-info {
  color: #d92a9c;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-size: 18pt;
}
</style>
<script>
import TarifDiv from "@/views/Tarif.vue";
import axios from "axios";

export default {
  components: {
    TarifDiv,
  },
  name: "buy",
  data() {
    return {
      descriptionArray: [],
      userData: {}
    };
  },
  methods: {},
  created() {
    axios.get("/api/tarif").then((data) => {
      this.descriptionArray = data["data"];
    });
    axios
      .get("/api/tarif_user/current")
      .then((data) => {
        this.userData = data["data"];
        console.log(this.userData);
      });
  },
};
</script>
