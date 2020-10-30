<template>
  <div>
    <Header />

    <!-- Reply Form -->
    <div>
      <b-container>
        <b-row class="justify-content-md-center mt-4">
          <b-col col md="8">
            <b-card
              header="Add Reply"
              header-bg-variant="primary"
              header-text-variant="white"
            >
              <b-card-text>
                <b-form @submit="onSubmit">
                  <!-- comment -->
                  <b-form-group label="Comment">
                    <h2>{{this.comment}}</h2>
                  </b-form-group>

                  <!-- reply -->
                  <b-form-group label="Reply">
                    <b-form-input v-model="reply" required></b-form-input>
                  </b-form-group>

                  <!-- submit -->
                  <b-form-group>
                    <b-button type="submit" variant="outline-primary"
                      >Add</b-button
                    >
                  </b-form-group>
                </b-form>
              </b-card-text>
            </b-card>
          </b-col>
        </b-row>

        <br>
       <!-- reply table -->

        <table style="width: 100%" class="pageComponent">
          <tr>
            <th>Reply</th>
            <th>Action</th>
          </tr>
          <td>1</td>
          <td>2</td>
        </table>
      </b-container>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Header from "./layout/Header";
export default {
  name: "projectReply",
  components: {
    Header,
  },
  data() {
    return {
      reply: "",
      id: this.$route.params.id,
      comment:""
    };
  },

  mounted(){
     axios
      .get("http://localhost:3000/api/test/getprojectcomment/"+this.id)
      .then((response) => {
        console.log(response.data);
        this.comment = response.data[0].comment;
      })
      .catch((err) => {
        console.log(err);
      });
  },

  methods: {
    onSubmit() {
      event.preventDefault();
      alert(this.reply + " " + "Added Succesfully");

//add reply to project comment
      axios
        .post("http://localhost:3000/api/test/addprojectcommentreply/" + this.id, {
          reply: this.reply,
        })
        .then(function (response) {
          console.log(response.data);
        })
        .catch((err) => {
          console.log(err);
        });

      window.location.href = "/proreply/" + this.id;
    },
  },
};
</script>

<style scoped>
table,
th,
td {
  border: 1px solid black;
}

.pageComponent {
  text-align: center;
}
</style>