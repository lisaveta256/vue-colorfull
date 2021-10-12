<template>
<main>
    <div>
        <h1>
{{more_info.name}}
        </h1>
        
        <strong>
            {{more_info.price}}
        </strong>
        <h2>
            Bought yet
        </h2>
        <ul>
            <li v-for='one in more_info.user_info' :key='one.id'>
                {{one.email}}
                
            </li>
        </ul>
        <hr>
        <p class='description_main' v-html='more_info.description'></p>
    </div>
    <a href="/#/tarifs"> Back </a>
</main>
    
</template>
<style scoped>
h1{
    color:#5e72e4;
    text-transform: capitalize;
}
div{
    margin: 15px;
}
.description_main{
    border:#5e72e4 1px solid;
    border-radius: 5px;
    padding: 6px;
}

body{
    background-color: bisque;
}


main{
    background-color: white;
    border-radius: 9px;
    margin: -56px 27px 27px 27px;
    padding: 20px 30px;
}

</style>
<script>
import axios from "axios";
export default {
    props:['id'],
  data() {
    return {
      more_info:[]
    };
  },
  methods: {
    getTarifInfo: function () {
        console.log(this.id);
      axios.get("/api/tarif_user/"+this.id).then((data) => {
        this.more_info = data["data"]["data"];
        console.log(this.more_info);
        
      });
    }
  },
  created() {
    this.getTarifInfo();
  },
};
</script>