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
  <tr>
    <td>Jill</td>
    <td>Smith</td>
    <td>50</td>
    <td>8</td>
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

    mounted(){

      axios.get('http://localhost:3000/api/test/projects')
      .then(function(response){
        console.log(response.data);
       
        
        

      }).catch(err=>{
        console.log(err)
      })
      ;
       
    },

       data() {
      return {
       
        x:localStorage.getItem("user"),
      role:localStorage.getItem("role"),
     
      }
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