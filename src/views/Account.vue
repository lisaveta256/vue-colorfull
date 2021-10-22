<template>
  <main>
    <div class="container rounded bg-white mt-5 mb-5">
      <div class="row">
        <div class="col-md-3 border-right">
          <div
            class="d-flex flex-column align-items-center text-center p-3 py-5"
          >
            <img
              class="rounded-circle mt-5"
              width="150px"
              :src="accountPicture"
            />
            <span class="font-weight-bold">{{ accountData.data.name }}</span
            ><span class="text-black-50">edogaru@mail.com.my</span>

            <form enctype="multipart/form-data" @submit.prevent="loadImage">
              <div class="example-1">
                <div class="form-group">
                  <label class="label">
                    <i class="material-icons">attach_file</i>
                    <span class="title">Добавить файл</span><br />
                    <span class="js-value"></span>
                    <input type="file" name="picture1" id="file" />
                  </label>
                </div>
                <input
                  type="submit"
                  class="btn btn-primary profile-button"
                  value="Change img"
                />
              </div>
            </form>
            <hr />
            <ul>
              <li
                @click="view = 'info'"
                :class="view == 'info' ? 'active' : ''"
              >
                Info
              </li>
              <li
                @click="view = 'password'"
                :class="view == 'password' ? 'active' : ''"
              >
                Password
              </li>
            </ul>
          </div>
        </div>
        <div class="col-md-5 border-right" @submit.prevent="setData">
          <account-change-info v-if="view == 'info'"></account-change-info>
          <account-change-password v-else></account-change-password>
        </div>

        <div class="col-md-4">
          <div class="p-3 py-5">
            <h2>
              You tarif is
              <span class="blue">{{ accountData.data.last_tarif_name }}</span>
            </h2>
            <div
              class="
                d-flex
                justify-content-between
                align-items-center
                experience
              "
            >
              <span>Change tarif</span
              ><a href="/#/buy/" class="border px-3 p-1 add-experience"
                ><i class="fa fa-plus"></i>&nbsp;Change</a
              >
            </div>
            <br />
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<script>
/*
(function() {
   
  'use strict';
 
  $('.input-file').each(function() {
    var $input = $(this),
        $label = $input.next('.js-labelFile'),
        labelVal = $label.html();
     
   $input.on('change', function(element) {
      var fileName = '';
      if (element.target.value) fileName = element.target.value.split('\\').pop();
      fileName ? $label.addClass('has-file').find('.js-fileName').html(fileName) : $label.removeClass('has-file').html(labelVal);
   });
  });
 
})();*/
</script>
<style scoped>
.js-value {
  font-size: 8pt;
}
.example-1 .form-group {
  padding: 1em;
  margin: 1em;
}
.example-1 input[type="file"] {
  outline: 0;
  opacity: 0;
  pointer-events: none;
  user-select: none;
}
.example-1 .label {
  width: 120px;
  border: 2px dashed grey;
  border-radius: 5px;
  display: block;
  padding: 1.2em;
  transition: border 300ms ease;
  cursor: pointer;
  text-align: center;
}
.example-1 .label i {
  display: block;
  font-size: 42px;
  padding-bottom: 16px;
}
.example-1 .label i,
.example-1 .label .title {
  color: grey;
  transition: 200ms color;
}
.example-1 .label:hover {
  border: 2px solid #000;
}
.example-1 .label:hover i,
.example-1 .label:hover .title {
  color: #000;
}
li.active {
  border-left: rgb(133, 67, 59) 3px solid;
  color: rgb(133, 67, 59);
  background: rgba(240, 128, 128, 0.384);
}
ul {
  list-style-type: none;
  padding: 0;
  width: 100%;
  text-align: left;
}
li {
  padding: 8px;
}
.row {
  width: 100%;
}
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
  background: rgba(255, 217, 0, 0.342) !important;
  min-height: 840px;
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
import axios from "axios";

import AccountChangePassword from "./components/AccountChangePassword.vue";
import AccountChangeInfo from "./components/AccountChangeInfo.vue";

export default {
  data() {
    return {
      view: "info",
      // accountData:null,
      accountData: { data: { acccount: { city: "f" } } },
      countryData: null,
      // countryData: [{ id: 1, country_name: "Belarus" }],
      newDataArr: {},
      accountPicture:
        "https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg",
    };
  },
  components: {
    AccountChangePassword,
    AccountChangeInfo,
  },
  methods: {
    getData() {
      axios.get("/api/account").then((data) => {
        this.accountData = {};
        this.$set(this.accountData, "data", data.data.data);
        console.log(this.accountData.data.acccount.picture, "1232435456");
        if (this.accountData.data.acccount.picture != "") {
          this.accountPicture =
            "http://localhost:8001/uploads/" +
            this.accountData.data.id +
            "/" +
            this.accountData.data.acccount.picture;
        }

        //this.accountData['data'] = data.data.data;
      });
      axios.get("/api/country").then((data) => {
        this.countryData = data.data.data;
        console.log(this.countryData);
      });
    },
    loadImage() {
      var path = "/api/image";
      var formData = new FormData();
      var imagefile = document.querySelector("#file");
      console.log(imagefile.files[0]);
      formData.append("picture1", imagefile.files[0]);
      axios
        .post(path, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((data) => {
          this.$set(this.accountData, "data", data.data.data);
        });
    },
  },
  created() {
    this.getData();
    $(document).ready(function () {
      $('input[type="file"]').change(function () {
        var value = $("input[type='file']").val();
        $(".js-value").text(value);
      });
    });
  },
};
</script>