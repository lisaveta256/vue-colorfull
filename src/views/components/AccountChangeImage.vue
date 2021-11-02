<template>
  <div class="d-flex flex-column align-items-center text-center p-3 py-5">
    <div class="image"></div>
    <!--<img class="rounded-circle mt-5" width="150px" :src="accountPicture" />-->
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

  </div>
</template>
<style scoped>
.image{
  background-image:   url("https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg");
  background-position: center;
  width:180px;
  height:180px;
  border-radius: 100%;

}
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
</style>
<script>
import axios from "axios";

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
            $('.image').css('background-image','url(http://localhost:8001/uploads/' +
            this.accountData.data.id +
            "/" +this.accountData.data.acccount.picture+')')
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
          window.location.reload();
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
