<template>
  <main>
    <form  @submit.prevent="setData">
      <div class="p-3 py-5">
        <div class="d-flex justify-content-between align-items-center mb-3">
          <h4 class="text-right">Profile Settings</h4>
        </div>

        <div class="row mt-2">
          <div class="col-md-6">
            <label class="labels">Name</label
            ><input
              type="text"
              class="form-control"
              placeholder="first name"
              name="name"
              v-model="accountData.data.name"
            />
          </div>
          <div class="col-md-6">
            <label class="labels">Surname</label
            ><input
              type="text"
              class="form-control"
              value=""
              placeholder="surname"
            />
          </div>
        </div>
        <div class="row mt-3">
          <div class="col-md-12">
            <label class="labels">Mobile Number</label
            ><input
              type="text"
              name="phone"
              class="form-control"
              placeholder="enter phone number"
              v-model="accountData.data.acccount.phone"
            />
          </div>
          <div class="col-md-12">
            <label class="labels">Address Line 1</label
            ><input
              type="text"
              name="address"
              class="form-control"
              placeholder="enter address line 1"
              v-model="accountData.data.acccount.address"
            />
          </div>
          <div class="col-md-12">
            <label class="labels">Bio graph</label
            ><textarea
              name="bio"
              class="form-control"
              placeholder="biography"
              v-model="accountData.data.acccount.bio"
            ></textarea>
          </div>
          <div class="col-md-12">
            <label class="labels">Email ID</label
            ><input
              type="text"
              name="email"
              class="form-control"
              placeholder="enter email id"
              value=""
            />
          </div>
        </div>
        <div class="row mt-3">
          <div class="col-md-6">
            <label class="labels">Country</label>
            <select
              name="country"
              class="form-control"
              v-model="accountData.data.acccount.country_id"
            >
              <option v-for="el in countryData" :value="el.id" :key="el">
                {{ el.country_name }}
              </option>
            </select>
          </div>
          <div class="col-md-6">
            <label class="labels">City</label
            ><input
              type="text"
              class="form-control"
              placeholder="city"
              name="city"
              v-model="accountData.data.acccount.city"
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
  </main>
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
import axios from "axios";

export default {
  data() {
    return {
      // accountData:null,

      accountData: { data: { acccount: { city: "f" } } },

      countryData: null,
      // countryData: [{ id: 1, country_name: "Belarus" }],
      newDataArr: {},
    };
  },
  methods: {
    getData() {
      axios.get("/api/account").then((data) => {
        this.accountData = {};
        this.$set(this.accountData, "data", data.data.data);
        //this.accountData['data'] = data.data.data;
       // console.log(data.data.data, "acc");
      });
      axios.get("/api/country").then((data) => {
        this.countryData = data.data.data;
        console.log(this.countryData);
      });
    },
    setData() {
      let dataArr = $("form input").toArray();
      dataArr.map((el) => {
        console.log(el);
        if (el.getAttribute("name")) {
          this.newDataArr[el.getAttribute("name")] = el.value;
          return el;
        }
        this.newDataArr["bio"] = $('textarea[name*="bio"]').val();
        this.newDataArr["country_id"] = $('select[name*="country"]').val();
        console.log(this.newDataArr);
      });
      axios.post("/api/account", this.newDataArr).then((data1) => {
        console.log(data1);
      });
    },
  },
  mounted() {
    this.getData();
  },
};
</script>