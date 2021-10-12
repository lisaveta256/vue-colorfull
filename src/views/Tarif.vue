<template>
  <div class="container tarif">
    <div class="row">
      <div class="col-4"  v-for="item in description['data']" :key="item.id" >
        <div v-html="item['description']">
        </div>
        <button @click='activate1(item.id)' :id='item.id'>Buy</button>
      </div>
    </div>
  </div>
</template>
<style scoped>
.col-4 div {
  border: 1px solid rgb(50 50 93 / 11%);
  box-shadow: 0 4px 6px rgb(50 50 93 / 11%), 0 1px 3px rgb(0 0 0 / 8%);
  padding: 10px;
  border-radius: 8px;
  height: 100%;
}

</style>
<style>
.container.tarif button {
  border: none;
  padding: 0.75rem 1rem;
  font-weight: 500;
  font-size: 0.875rem;
  -webkit-box-shadow: 0 4px 6px rgb(50 50 93 / 11%), 0 1px 3px rgb(0 0 0 / 8%);
  box-shadow: 0 4px 6px rgb(50 50 93 / 11%), 0 1px 3px rgb(0 0 0 / 8%);
  color: #fff;
  background: #5e72e4;
  -webkit-transition: all 0.15s ease;
  transition: all 0.15s ease;
  margin: 7px;
  width: 178px;
  display: inline-block;
  border-radius: 8px;
  margin-left: 50%;
  transform: translateX(-50%);
}
</style>
<script>
import axios from 'axios';
export default {
  data() {
    return {

    };
  },
  props: ["description"],
  methods:{
    activate1:function(id){
      axios.post(`/api/tarif_user/${id}`)
      .then((mes)=>{
        console.log(mes);
      });
    }
  },
};
</script>