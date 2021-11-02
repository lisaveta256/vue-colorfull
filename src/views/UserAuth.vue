<template>
  <div>
    <h2>Here is user initialization</h2>
    <button @click="getVK">Vk</button>
    <button @click="getVK">Google</button>
     <iframe src="" width="468" height="60" align="left">
    Ваш браузер не поддерживает плавающие фреймы!
 </iframe>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {};
  },
  methods: {
    getVK: function () {
      var window1 = window.open(
        "http://localhost:8001/api/vk",
        "example",
        "width=600,height=400"
      );

//localStorage.setItem('token',token);
     /* window1.document.write(
        "<script>window.opener.document.body.innerHTML = 'Test'</scr" + "ipt>"
      );*/
      var timer = setInterval(function () {
       //   console.log(window1.location.href);
        //  console.log(window1.document.body);
          
        if (window1.closed) {
          clearInterval(timer);
          alert("closed");
          //this.$router.go('http://localhost:8080/registration');
          window.location.href = "/#/registration";
          //  window.location.reload();
        }
      }, 1000);

      /* window1.document.write(
        "rhtrhtyj"
      );*/
      let path = "http://localhost:8001/api/vk";
      axios.get(path).then((data) => {
        console.log(data, "userAuth");
      });
    },
  },
};
</script>