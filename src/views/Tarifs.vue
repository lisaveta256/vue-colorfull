<template>
  <div>
    <table>
      <thead>
        <tr>
          <td>Tarif</td>
          <td>Users</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="one in tarif_user" :key="one.id">
          <td :class="one.id">
            <a :href="'/#/tarifs/info/' + one.id">{{ one.name }}</a>
          </td>
          <td>
            <span v-if="one.user_info">
              <span v-for="(user, key) in one.user_info" :key="key">
                {{ user.email }},
              </span>
            </span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      tarif_user: [],
      more_info: [],
    };
  },
  methods: {
    getTarifs: function () {
      axios.get("/api/tarif_user").then((data) => {
        this.tarif_user = data["data"]["data"];
        console.log(this.tarif_user);
      });
    },
    showMoreAboutTarif: function (id) {
      axios.get(`/api/tarif_user/${id}`).then((data) => {
        this.more_info = data["data"]["data"];
        console.log(this.more_info);
      });
    },
  },
  created() {
    this.getTarifs();
  },
};
</script>
<style scoped>
div {
  text-align: center;
}
table {
  display: inline-block;
  margin: 19px;
  box-shadow: 2px 2px 5px gray;
}
td{
   border: 1px gray solid; 
} 
tbody td {
 
  padding: 5px 12px;
}
thead td {
  font-family: "Courier New", Courier, monospace;
  background: #5e72e4;
  color: white;
}
a {
  padding: 8px;
}
</style>