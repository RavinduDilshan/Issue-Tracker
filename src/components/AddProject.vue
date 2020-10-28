<template>
  <div>
    <Header />

    <!-- add project form -->
    <div>
      <b-container>
        <b-row class="justify-content-md-center mt-4">
          <b-col col md="8">
            <b-card
              header="Add Project"
              header-bg-variant="primary"
              header-text-variant="white"
            >
              <b-card-text>
                <b-form @submit="onSubmit">
                  <!-- projectname -->
                  <b-form-group label="Project Name">
                    <b-form-input v-model="projectname" required></b-form-input>
                  </b-form-group>

                  <!-- description -->
                  <b-form-group label="Description">
                    <b-form-input v-model="description" required></b-form-input>
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
      </b-container>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Header from "./layout/Header";
export default {
  name: "AddProject",
  components: {
    Header,
  },
  data() {
    return {
      projectname: "",
      description: "",
    };
  },

  methods: {
    onSubmit() {
      event.preventDefault();
      alert(this.projectname + " " + "Added Succesfully");

      // add project api call
      axios
        .post("http://localhost:3000/api/test/addpro", {
          projectname: this.projectname,
          description: this.description,
        })
        .then(function (response) {
          console.log(response.data);
        })
        .catch((err) => {
          console.log(err);
        });

      window.location.href = "/userdash";
    },
  },
};
</script>

<style scoped>
</style>