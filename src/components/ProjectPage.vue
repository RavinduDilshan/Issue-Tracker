<template>
  <div>
    <Header />
    <div class="pageComponent">
      <br />
      <h1>Project Id : {{ this.id }}</h1>
      <h2>Cases Of This Project</h2>
      <b-button v-on:click="redirect" variant="danger">Add Case</b-button>

      <div></div>
    </div>
    <br />
    <br />

    <div class="pageComponent">
      <!-- cases table -->
      <table style="width: 100%">
        <tr>
          <th>Case Name</th>
          <th>Status</th>
          <th>Description</th>
          <th>Issue Count</th>
          <th>Actions</th>
        </tr>
        <tr v-for="item in list" v-bind:key="item.projectId">
          <td>{{ item.caseName }}</td>
          <td>{{ state.value }}</td>
          <td>{{ item.description }}</td>
          <td>{{ item.issueNo }}</td>
          <td>
            <!-- <div v-if="role=='modular'">Start
        Cancel
      </div> -->
            <a v-bind:href="'/case/' + item.caseId">View</a>

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
          </td>
        </tr>
      </table>
    </div>

    <br />
    <br />

    <!-- comment section -->

    <div class="commentbox">
      <b-container>
        <b-card
          header="Add comment about this project"
          header-bg-variant="primary"
          header-text-variant="white"
        >
          <b-card-text>
            <b-form @submit="onSubmit">
              <!-- comment -->
              <b-form-group label="Comment Here">
                <b-form-input v-model="comment" required></b-form-input>
              </b-form-group>

              <!-- submit -->
              <b-form-group>
                <b-button type="submit" variant="outline-primary"
                  >Submit</b-button
                >
              </b-form-group>
            </b-form>
          </b-card-text>
        </b-card>
      </b-container>
    </div>

    <!-- view comments table -->
    <div class="viewcomments">
      <b-container>
        <h3>All Comments here</h3>
        <div>
          <table style="width: 100%">
            <tr>
              <th>Commenter</th>
              <th>Comment</th>
              <th>Actions</th>
            </tr>
            <tr v-for="item in commentlist" v-bind:key="item.projectcmtId">
              <td>{{ item.commenter }}</td>
              <td>{{ item.comment }}</td>
              <td>    <a v-bind:href="'/proreply/' + item.projectcmtId">Reply</a></td>
            </tr>
          </table>
        </div>
      </b-container>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Header from "./layout/Header";
import { fetchMachine } from "./StateMachine/machine";
import { interpret } from "xstate";
export default {
  name: "ProjectPage",
  components: {
    Header,
  },
  mounted() {
    // get cases request
    axios
      .get("http://localhost:3000/api/test/cases/" + this.id)
      .then((response) => {
        console.log(response.data);
        this.list = response.data;
        console.log(this.id);
      })
      .catch((err) => {
        console.log(err);
      });

    // get comments request
    axios
      .get("http://localhost:3000/api/test/getprojcomments/" + this.id)
      .then((response) => {
        console.log(response.data);
        this.commentlist = response.data;
        console.log(this.id);
      })
      .catch((err) => {
        console.log(err);
      });
  },

  data() {
    return {
      comment: "",
      list: [],
      id: this.$route.params.id,
      commenter: localStorage.getItem("user"),
      commentlist: [],

      actionService: interpret(fetchMachine),
      state: fetchMachine.initialState,
    };
  },
  methods: {
    redirect: function () {
      window.location.href = "/addcase/" + this.id;
    },
    onSubmit() {
      event.preventDefault();
      alert(this.comment + " " + "Added Succesfully");

      // add comment request
      axios
        .post("http://localhost:3000/api/test/addprojectcomment/" + this.id, {
          comment: this.comment,
          commenter: this.commenter,
        })
        .then(function (response) {
          console.log(response.data);
        })
        .catch((err) => {
          console.log(err);
        });

      window.location.href = "/propage/" + this.id;
    },
  },

  created() {
    this.actionService.onTransition((state) => (this.state = state)).start();
  },

  destroyed() {
    this.actionService.stop();
  },
};
</script>

<style  scoped>
.pageComponent {
  text-align: center;
}

table,
th,
td {
  border: 1px solid black;
}

.btn {
  margin-right: 10px;
}

a {
  margin-right: 10px;
}
</style>