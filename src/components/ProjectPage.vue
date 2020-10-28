<template>
<div>
    <Header />
    <div class="pageComponent">

        <br>
        <h1>Project Id : {{this.id}}</h1>
        <h2>Cases Of This Project</h2>
        <b-button v-on:click='redirect' variant="danger">Add Case</b-button>

        

        <div>
    
    </div>



    </div>
    <br>
    <br>
    
        <div>
    <table style="width:100%">
  <tr>
    <th>Case Name</th>
    <th>Status</th>
    <th>Description</th>
    <th>Issue Count</th>
    <th> Actions</th>
  </tr>
  <tr v-for="item in list" v-bind:key="item.projectId">
    <td>{{item.caseName}}</td>
    <td>{{item.status}}</td>
    <td>{{item.description}}</td>
    <td>{{item.issueNo}}</td>
    <td>
      <!-- <div v-if="role=='modular'">Start
        Cancel
      </div> -->
  <a v-bind:href="'/case/'+item.caseId">View</a>

      

    
    
    
    </td>
  </tr>
</table>

    </div>

   <br>
   <br>

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
                <div>
    <table style="width:100%">
  <tr>
    <th>Commenter</th>
    <th>Comment</th>
  </tr>
  <tr v-for="item in commentlist" v-bind:key="item.projectcmtId">
    <td>{{item.commenter}}</td>
    <td>{{item.comment}}</td>
  </tr>
</table>

    </div>
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

      axios.get('http://localhost:3000/api/test/cases/'+this.id
       
      )
      .then((response)=>{
        console.log(response.data);
        this.list=response.data;
        console.log(this.id);
      
        
        

      }).catch(err=>{
        console.log(err)
      })
      ;


      axios.get('http://localhost:3000/api/test/getprojcomments/'+this.id
       
      )
      .then((response)=>{
        console.log(response.data);
        this.commentlist=response.data;
        console.log(this.id);
      
        
        

      }).catch(err=>{
        console.log(err)
      })
      ;





       
    },

       data() {
      return {
          comment:'',
          list:[],
          id:this.$route.params.id,
          commenter:localStorage.getItem("user"),
          commentlist:[]
      
      }
    },
    methods:{
      redirect:function(){
        window.location.href = '/addcase/'+this.id;
        
      },
      onSubmit(){
          event.preventDefault()
          alert(this.comment + ' ' + 'Added Succesfully')

        axios.post('http://localhost:3000/api/test/addprojectcomment/'+this.id,{
        comment:this.comment,
        commenter:this.commenter
        
      }).then(function(response){
        console.log(response.data);
        

      }).catch(err=>{
        console.log(err)
      });

     window.location.href = '/propage/'+this.id;

      }
    },
    
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