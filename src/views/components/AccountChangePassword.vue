<template>

        <form @submit.prevent="setData">
          <div class="p-3 py-5">
            <div class="d-flex justify-content-between align-items-center mb-3">
              <h4 class="text-right">Profile Settings</h4>
            </div>

            <div class="row mt-3">

              <div class="col-md-12">
                <label class="labels">Password</label
                ><input
                  type="text"
                  name="password"
                  class="form-control"
                  placeholder="password"
                  value=""
                />
              </div>
              <div class="col-md-12">
                <label class="labels">Confirmed password</label
                ><input
                  type="text"
                  name="confirmed_password"
                  class="form-control"
                  placeholder="confirmed password"
                  value=""
                />
              </div>
            </div>
         
            <div class="mt-5 text-center">
              <button class="btn btn-primary profile-button" @click="setData">
                Save Profile
              </button>
            </div>
          </div>
        </form>

</template>
<style scoped>
.add-experience:hover {
  background: #7d0b39;
  color: #fff;
  cursor: pointer;
  border: solid 1px #ba68c8;
}
a:hover {
  color: #fff !important;
  cursor: pointer;
  text-decoration: none;
}
a {
  text-decoration: underline;
  color: #3c4858 !important;
}
::placeholder {
  color: rgb(126, 67, 67, 0.5);
}
.container {
  background: gold !important;
}
body {
  background: rgb(99, 39, 120);
}
.form-control {
  border: darkred 1px solid;
  border-radius: 5px;
  background: rgba(250, 250, 250, 0.4);
}
.form-control:focus {
  box-shadow: none;
  border-color: #ba68c8;
}

.profile-button {
  background: #e81c46;
  box-shadow: none;
  border: none;
}

.profile-button:hover {
  background: #7d0b39;
}

.profile-button:focus {
  background: #682773;
  box-shadow: none;
}

.profile-button:active {
  background: #682773;
  box-shadow: none;
}

.back:hover {
  color: #682773;
  cursor: pointer;
}

.labels {
  font-size: 11px;
}
</style>
<script>
import axios from 'axios';
export default {
    data(){
        return{

        }
    },
    methods:{
        setData(){
//
        }
    }
}
</script>
