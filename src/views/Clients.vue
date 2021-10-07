<template>
  <main>
    <section id="">
      <input
        type="number"
        id="userId"
        v-model="usersNumber"
        @input="getUsers"
      />
      <div class="container">
        <div class="row">
          <div class="col-3 photo md-1" v-for="user in users" :key="user.id">
            <user-card :user="user"></user-card>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
<style scoped>
.container {
  padding-top: 34px;
  padding-bottom: 34px;
}
.row {
  width: 100%;
}
div[class*="col"] {
  padding-top: 4px;
  padding-bottom: 4px;
}
div[class*="col"] div {
  text-align: center;
  border: 1px solid gray;
  padding: 12px;
  box-shadow: 1px 3px 6px grey;
  border-radius: 5px;
  height: 100%;
}
</style>
<script>
import UserCard from "./components/UserCard.vue";
import onMounted from "vue";
//import ref from '@vue/composition-api'
import axios from "axios";
//import VueCompositionAPI from '@vue/composition-api';

export default {
  name: "Clients",
  components: {
    UserCard,
  },
  data() {
    return {
      users: [],
      usersNumber: 10,
    };
  },
  methods: {
    getUsers: async function () {
      var response = await axios.get(
        "https://randomuser.me/api?results=" + this.usersNumber
      );
      this.users = response.data.results;
      console.log(this.users);
    },
  },
  mounted() {
    this.getUsers();
  },

  /*
  setup() {
      const users=ref([]);
      onMounted(async ()=>{
            const response = await axios.get('https://randomuser.me/api?results=10');
            users.value = response.data.results;
            console.log(users.value);
          }
      )
  },*/
};
</script>
