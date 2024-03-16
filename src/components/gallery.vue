<template>
  <div class="px-4">
    Image
    <div>
      <div class="mx-auto">
        <v-img
          class="mx-auto"
          style="margin-left: auto; margin-right: auto"
          height="100px"
          width="100px"
          :src="image"
        >
        </v-img>
      </div>
      <v-col cols="3">
        <!-- <v-text-field outlined> </v-text-field> -->
        <!-- <v-select> </v-select> -->
        {{ model }}
        <v-autocomplete
          label="search image"
          v-model="model"
          :search-input.sync="search"
          :items="items"
          item-text="items"
          item-value="id"
        >
        </v-autocomplete>
      </v-col>
      <div>dada</div>
    </div>

    <div>Large Page Layout</div>
    <v-container> </v-container>
    <v-row class="">
      <!-- {{ forms }} -->
      <!-- <v-col cols="3"> -->
      <v-col cols="4" v-for="img in items" :key="img.id">
        <div @click="putImage(img.label)" class="sub-grid" style="color: white">
          <div style="margin-top: 10px">Image Title: {{ img }}</div>
          <h3 class="text">Click here to see Image from API</h3>
        </div>
      </v-col>
      <!-- </v-col> -->
    </v-row>
  </div>
</template>

<script>
export default {
  name: "GalleryComponent",
  data() {
    return {
      search: null,
      model: "",
      formSchema: {
        name: "",
        email: "",
        phone: "",
      },

      forms: [
        { name: "Name", field: "" },
        { name: "Email", field: "" },
        { name: "Phone", field: "" },
      ],

      name: "",
      phone: null,
      email: null,
      items: [],
      image: null,
    };
  },
  mounted() {
    this.getAPI();
    //  this.getUserData(1, () => {
    //   //   console.log("getting user id...");
    //   //   this.getUserData(2, () => {
    //   //     console.log("getting user id...");
    //   //     this.getUserData(3);
    //   //   });
    //   // });
    //   // console.log(this.getLeadId(2));
    //   console.log("Fetchng....");
    //   // this.getLeadId(1).then(() => {
    //   //   this.getLeadId2(2).then(() => {});
    //   // });

    //   // second methods of promise chain
    //   this.getLeadId(1)
    //     .then((res) => {
    //       return this.getLeadId2(2);
    //     })
    //     .then((res) => {
    //       console.log(res);
    //     });
    //   this.getLeadId(1).catch((error) => {
    //     console.log("Network", error);
    //   });
  },
  methods: {
    generateField() {
      this.email = "sabdjkf";

      if (this.email) {
        this.forms.push(this.formSchema.email);
      }
    },

    submitFormField() {
      this.email = "sabdjkf";
    },

    // getUserData(id, getNextData) {
    //   setTimeout(() => {
    //     console.log("user id is ", id);
    //     if (getNextData) {
    //       getNextData();
    //     }
    //   }, 2000);
    // },

    // callback function
    // addMinus(a, b, callBack) {
    //   setTimeout(() => {
    //     console.log("hi");
    //   }, 2000);
    // },

    addplus() {
      console.log("hi again");
    },

    // addMinus(1, b, addPlus)
    //  promise has a three state pending, rejected and fulfilled
    // promise has a two handler resolve and reject
    // getLeadId(id) {
    //   return new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //       console.log("user id is ", id);
    //       // resolve("success");
    //       resolve("resolve");
    //     }, 5000);
    //   });
    // },
    // getLeadId2(id) {
    //   return new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //       console.log("user id is ", id);
    //       // resolve("success");
    //       resolve("resolve");
    //     }, 5000);
    //   });
    // },
    putImage(url) {
      this.image = url;
    },
    async getAPI() {
      //   console.log("this");
      await fetch(
        "https://s3.eu-west-2.amazonaws.com/assets-test.fast-thinking.co.uk/recruitment/data.json",
        {
          method: "GET",

          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      )
        .then(function (response) {
          return response.json();
        })
        .then((data) => {
          this.items = data;
          // console.log(this.items);
        })
        .catch((error) => console.error("Error:", error));
    },
  },
};
</script>
<style scoped>
.text {
  margin-top: 20px;
  cursor: pointer;
}
.sub-grid {
  height: 80px;
  font-size: 10px;
  min-width: 80px;
  background-color: rgb(119, 117, 117);
}
</style>