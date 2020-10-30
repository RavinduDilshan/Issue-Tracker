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
                    <h2>this is the comment</h2>
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
          <tr v-for="item in list" v-bind:key="item.projectId">
            <td>{{ item.projectName }}</td>
            <td>{{ item.description }}</td>
            <td>{{ state.value }}</td>
            <!-- <td>{{item.status}}</td> -->
            <td>{{ item.caseCount }}</td>
            <td>{{ item.IssueCount }}</td>
            <td>
              <div v-if="role == 'modular'">
                <b-button
                  class="btn"
                  variant="success"
                  size="sm"
                  @click="actionService.send('start')"
                  >Start</b-button
                >
                <b-button
                  class="btn"
                  variant="danger"
                  size="sm"
                  @click="actionService.send('cancel')"
                  >Cancel</b-button
                >
                <b-button
                  class="btn"
                  size="sm"
                  variant="primary"
                  @click="actionService.send('complete')"
                  >Complete</b-button
                >
                <b-button
                  class="btn"
                  variant="info"
                  size="sm"
                  @click="actionService.send('holding')"
                  >Hold</b-button
                >
                <b-button
                  class="btn"
                  variant="warning"
                  size="sm"
                  @click="actionService.send('resume')"
                  >Resume</b-button
                >
              </div>
              <a v-bind:href="'/propage/' + item.projectId">View</a>
            </td>
          </tr>
        </table>
      </b-container>
    </div>
  </div>
</template>

<script>
//import axios from "axios";
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
    };
  },

  methods: {
    onSubmit() {
      event.preventDefault();
      alert(this.reply + " " + "Added Succesfully");

      window.location.href = "/propage/" + this.id;
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