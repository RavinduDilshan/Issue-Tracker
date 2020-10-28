<template>
<div>
    <Header />
    <div class="pageComponent">

        <br>
        <h1>Issue Id:{{id}}</h1>
        <br>
        <div>
   <table style="width:100%">
  <tr>
    <th>Issue Name</th>
    <th>Description</th>
    <th>Status</th>
    <th> Actions</th>
  </tr>
  <tr v-for="item in list" v-bind:key="item.issueId">
    <td>{{item.issueName}}</td>
    <td>{{item.description}}</td>
    <td>{{state.value}}</td>
    <td>
      <!-- <div v-if="role=='modular'">Start
        Cancel
      </div> -->
  <!-- <a v-bind:href="'/case/'+item.caseId">View</a> -->
  delete
      <b-button class="btn" variant="success" size="sm" @click="actionService.send('start')">Start</b-button>
      <b-button class="btn" variant="danger" size="sm" @click="actionService.send('cancel')">Cancel</b-button>
      <b-button class="btn" size="sm" variant="primary" @click="actionService.send('complete')">Complete</b-button>
      <b-button class="btn" variant="info" size="sm" @click="actionService.send('holding')">Hold</b-button>
      <b-button class="btn" variant="warning" size="sm" @click="actionService.send('resume')">Resume</b-button>
    


      

    
    
    
    </td>
  </tr>
</table>
    </div>



    </div>

   <br>

    <!-- comment section -->
    
    <div class="commentbox">
        <b-container>
           <b-card header="Add comment about this Issue"
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
<br>
    <div class="viewcomments">
        <b-container>
            <div>
    <table style="width:100%">
  <tr>
    <th>Commenter</th>
    <th>Comment</th>
    <th>Actions</th>
  </tr>
  <tr v-for="item in commentlist" v-bind:key="item.projectcmtId">
    <td>{{item.commenter}}</td>
    <td>{{item.comment}}</td>
    <td>Reply</td>
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
import {fetchMachine} from './StateMachine/machine'
import {interpret} from 'xstate'
export default {
    name:'IssuePage',
    components:{
        Header
    },
    mounted(){

      axios.get('http://localhost:3000/api/test/getissue/'+this.id
       
      )
      .then((response)=>{
        console.log(response.data);
        this.list=response.data;
        console.log(this.id);
      
        
        

      }).catch(err=>{
        console.log(err)
      })
      ;

      
        axios.get('http://localhost:3000/api/test/getissuecomments/'+this.id
       
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
          commentlist:[],
          
          actionService:interpret(fetchMachine),
          state:fetchMachine.initialState
      }
    },

    methods:{
       onSubmit(){
          event.preventDefault()
          alert(this.comment + ' ' + 'Added Succesfully')

        axios.post('http://localhost:3000/api/test/addissuecomment/'+this.id,{
        comment:this.comment,
        commenter:this.commenter
        
      }).then(function(response){
        console.log(response.data);
        

      }).catch(err=>{
        console.log(err)
      });

     window.location.href = '/issue/'+this.id;

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