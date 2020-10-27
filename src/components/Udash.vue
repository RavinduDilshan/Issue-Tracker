<template>
<div>
    <Header />
    <div class="pageComponent">

        <br>
        <h1>All Projects</h1>
        <div v-if="role=='modular'">
            <b-button v-on:click='redirect' variant="danger">Add Project</b-button>
          </div>
        
       <br>

        <div>
    <table style="width:100%">
  <tr>
    <th>Project Name</th>
    <th>Description</th>
    <th>Status</th>
    <th>Case Count</th>
    <th>Issue Count</th>
    <th> Actions</th>
  </tr>
  <tr v-for="item in list" v-bind:key="item.projectId">
    <td>{{item.projectName}}</td>
    <td>{{item.description}}</td>
    <td>{{state.value}}</td>
    <!-- <td>{{item.status}}</td> -->
    <td>{{item.caseCount}}</td>
    <td>{{item.IssueCount}}</td>
    <td>
      <div v-if="role=='modular'">
       <b-button class="btn" variant="success" size="sm" @click="actionService.send('start')">Start</b-button>
        <b-button class="btn" variant="danger" size="sm" @click="actionService.send('cancel')">Cancel</b-button>
         <b-button class="btn" size="sm" variant="primary" @click="actionService.send('complete')">Complete</b-button>
        <b-button class="btn" variant="info" size="sm" @click="actionService.send('holding')">Hold</b-button>
         <b-button class="btn" variant="warning" size="sm" @click="actionService.send('resume')">Resume</b-button>
      
      </div>
     <a v-bind:href="'/propage/'+item.projectId">View</a>
      
    </td>
  </tr>
</table>

    </div>



    </div>
</div>
    
</template>

<script>
import axios from 'axios'
import Header from './layout/Header'
import {fetchMachine} from './StateMachine/machine'
import {interpret} from 'xstate'

 

export default {
    name:'Udash',
    components:{
        Header
    },
    methods:{
      redirect:function(){
         window.location.href = '/addpro';
      }
    },

     mounted(){

      axios.get('http://localhost:3000/api/test/projects')
      .then((response)=>{
        console.log(response.data);
        this.list=response.data;
       
      
        
        

      }).catch(err=>{
        console.log(err)
      })
      ;
       
    },
       data() {
      return {


       list:[],
        x:localStorage.getItem("user"),
        role:localStorage.getItem("role"),
        id:'2',

        actionService:interpret(fetchMachine),
        state:fetchMachine.initialState
    
     
      }
    },

    created(){
      this.actionService
      .onTransition(state => this.state=state)
      .start();
    },

    destroyed(){
      this.actionService.stop();
    }
    
    
}
</script>

<style  scoped>

.pageComponent{
    text-align:center;
}

table, th, td {
  border: 1px solid black;
}

.btn{
  margin-right: 10px;
}



</style>