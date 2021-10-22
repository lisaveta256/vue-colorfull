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
          <div
            class="col-12 col-sm-6 col-lg-3"
            v-for="user in users"
            :key="user.id"
          >
            <user-card :user="user"></user-card>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
<style scoped>
input{
  margin: 40px 12px 23px 66px;
  border: #99547a 1px solid;
  border-radius: 4px;
}
body {
  margin-top: 20px;
  background: #eee;
}
</style>
<style>
.single_advisor_profile {
  position: relative;
  margin-bottom: 50px;
  -webkit-transition-duration: 500ms;
  transition-duration: 500ms;
  z-index: 1;
  border-radius: 15px;
  -webkit-box-shadow: 0 0.25rem 1rem 0 rgba(234, 47, 209, 0.125);
  box-shadow: 0 0.25rem 1rem 0 rgba(47, 91, 234, 0.125);
}
.single_advisor_profile .advisor_thumb {
  position: relative;
  z-index: 1;
  border-radius: 15px 15px 0 0;
  margin: 0 auto;
  padding: 30px 30px 0 30px;
  background-color: #aa2558;
  overflow: hidden;
}
.single_advisor_profile .advisor_thumb::after {
  -webkit-transition-duration: 500ms;
  transition-duration: 500ms;
  position: absolute;
  width: 150%;
  height: 80px;
  bottom: -45px;
  left: -25%;
  content: "";
  background-color: #ffffff;
  -webkit-transform: rotate(-15deg);
  transform: rotate(-15deg);
}
@media only screen and (max-width: 575px) {
  .single_advisor_profile .advisor_thumb::after {
    height: 160px;
    bottom: -90px;
  }
}
.single_advisor_profile .advisor_thumb .social-info {
  position: absolute;
  z-index: 1;
  width: 100%;
  bottom: 0;
  right: 30px;
  text-align: right;
}
.single_advisor_profile .advisor_thumb .social-info a {
  font-size: 14px;
  color: #020710;
  padding: 0 5px;
}
.single_advisor_profile .advisor_thumb .social-info a:hover,
.single_advisor_profile .advisor_thumb .social-info a:focus {
  color: #3f43fd;
}
.single_advisor_profile .advisor_thumb .social-info a:last-child {
  padding-right: 0;
}
.single_advisor_profile .single_advisor_details_info {
  position: relative;
  z-index: 1;
  padding: 30px;
  text-align: right;
  -webkit-transition-duration: 500ms;
  transition-duration: 500ms;
  border-radius: 0 0 15px 15px;
  background-color: #ffffff;
}
.single_advisor_profile .single_advisor_details_info::after {
  -webkit-transition-duration: 500ms;
  transition-duration: 500ms;
  position: absolute;
  z-index: 1;
  width: 50px;
  height: 3px;
  background-color: #3f43fd;
  content: "";
  top: 12px;
  right: 30px;
}
.single_advisor_profile .single_advisor_details_info h6 {
  margin-bottom: 0.25rem;
  -webkit-transition-duration: 500ms;
  transition-duration: 500ms;
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .single_advisor_profile .single_advisor_details_info h6 {
    font-size: 14px;
  }
}
.single_advisor_profile .single_advisor_details_info p {
  -webkit-transition-duration: 500ms;
  transition-duration: 500ms;
  margin-bottom: 0;
  font-size: 14px;
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .single_advisor_profile .single_advisor_details_info p {
    font-size: 12px;
  }
}
.single_advisor_profile:hover .advisor_thumb::after,
.single_advisor_profile:focus .advisor_thumb::after {
  background-color: #99547a;
}
.single_advisor_profile:hover .advisor_thumb .social-info a,
.single_advisor_profile:focus .advisor_thumb .social-info a {
  color: #ffffff;
}
.single_advisor_profile:hover .advisor_thumb .social-info a:hover,
.single_advisor_profile:hover .advisor_thumb .social-info a:focus,
.single_advisor_profile:focus .advisor_thumb .social-info a:hover,
.single_advisor_profile:focus .advisor_thumb .social-info a:focus {
  color: #ffffff;
}
.single_advisor_profile:hover .single_advisor_details_info,
.single_advisor_profile:focus .single_advisor_details_info {
  background-color: #99547a;
}
.single_advisor_profile:hover .single_advisor_details_info::after,
.single_advisor_profile:focus .single_advisor_details_info::after {
  background-color: #ffffff;
}
.single_advisor_profile:hover .single_advisor_details_info h6,
.single_advisor_profile:focus .single_advisor_details_info h6 {
  color: #ffffff;
}
.single_advisor_profile:hover .single_advisor_details_info p,
.single_advisor_profile:focus .single_advisor_details_info p {
  color: #ffffff;
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
