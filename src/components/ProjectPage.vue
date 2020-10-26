<template>
<div>
    <Header />
    <div class="pageComponent">

        <br>
        <h1>Project Name</h1>
        <h2>Cases Of This Project</h2>

        <div>
    
    </div>



    </div>

    
        <div>
    <table style="width:100%">
  <tr>
    <th>Project Name</th>
    <th>Status</th>
    <th>Case Count</th>
    <th>Issue Count</th>
    <th> Actions</th>
  </tr>
  <tr v-for="item in list" v-bind:key="item.projectId">
    <td>{{item.caseId}}</td>
    <td>{{item.status}}</td>
    <td>{{item.description}}</td>
    <td>{{item.issueNo}}</td>
    <td>
      <!-- <div v-if="role=='modular'">Start
        Cancel
      </div> -->
     <a href="/issue">View</a>

      

    
    
    
    </td>
  </tr>
</table>

    </div>

   

    <!-- comment section -->
    
    <div class="commentbox">
        <b-container>
           <b-card header="Add comment about this project"
            header-bg-variant="primary"
            header-text-variant="white"
          >
            <b-card-text>
              <b-form @submit="onSubmit">
                
                <!-- username -->
                <b-form-group 
                
                label="Comment Here"
                >
                <b-form-input v-model="comment" required></b-form-input>
                </b-form-group>
                

                <!-- submit -->
                <b-form-group>
                  <b-button type="submit" variant="outline-primary">Submit</b-button>
                </b-form-group>

              </b-form>
            </b-card-text>
          
          
          </b-card>
        </b-container>

    </div>

    <div class="viewcomments">
        <b-container>
            <h3>All Comments here</h3>
            <p>comment1</p>
            <p>comment2</p>
            <p>comment3</p>
        </b-container>

    </div>

</div>
    
</template>

<script>
import axios from 'axios'
import Header from './layout/Header'
export default {
    name:'ProjectPage',
    components:{
        Header
    },
    mounted(){

      axios.get('http://localhost:3000/api/test/cases')
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
          comment:'',
          list:[]
      
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