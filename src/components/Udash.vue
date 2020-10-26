<template>
<div>
    <Header />
    <div class="pageComponent">

        <br>
        <h1>All Projects</h1>
        <div v-if="role==modular">
            <b-button variant="danger">Add Project</b-button>
          </div>
        
       

        <div>
    <table style="width:100%">
  <tr>
    <th>Project Name</th>
    <th>Status</th>
    <th>Case Count</th>
    <th>Issue Count</th>
  </tr>
  <tr v-for="item in list" v-bind:key="item.projectId">
    <td>{{item.projectName}}</td>
    <td>{{item.status}}</td>
    <td>{{item.caseCount}}</td>
    <td>{{item.IssueCount}}</td>
  </tr>
</table>

    </div>



    </div>
</div>
    
</template>

<script>
import axios from 'axios'
import Header from './layout/Header'

 

export default {
    name:'Udash',
    components:{
        Header
    },
       data() {
      return {


       list:[],
        x:localStorage.getItem("user"),
      role:localStorage.getItem("role"),
     
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

</style>