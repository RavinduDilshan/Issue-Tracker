<template>
<div>
    <Header />
    <div class="pageComponent">

        <br>
        <h1>Case Id {{id}}</h1>
        <b-container>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro veritatis maxime similique ipsa illo voluptatibus unde fugiat vitae fuga. Itaque aspernatur ducimus, alias dicta repellat nam ab fugit quasi enim!</p>
        </b-container>
        <h1>Issues of this case </h1>
        <b-button v-on:click='redirect' variant="danger">Add Issue</b-button>

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
    <td>{{item.status}}</td>
    <td>{{item.description}}</td>
    
    <td>
      <div v-if="role=='modular'">Start
        Cancel
      </div>
      
     <a v-bind:href="'/issue/'+item.issueId">View</a>
    

      

    
    
    
    </td>
  </tr>
</table>
    </div>



    </div>

   <br>

    <!-- comment section -->
    
    <div class="commentbox">
        <b-container>
           <b-card header="Add comment about this Case"
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
export default {
    name:'CasePage',
    components:{
        Header
    },

    mounted(){

      axios.get('http://localhost:3000/api/test/issues/'+this.id
       
      )
      .then((response)=>{
        console.log(response.data);
        this.list=response.data;
        console.log(this.id);
      
        
        

      }).catch(err=>{
        console.log(err)
      })
      ;

        axios.get('http://localhost:3000/api/test/getcasecomments/'+this.id
       
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
        window.location.href = '/addissue/'+this.id;
        
      },

       onSubmit(){
          event.preventDefault()
          alert(this.comment + ' ' + 'Added Succesfully')

        axios.post('http://localhost:3000/api/test/addcasecomment/'+this.id,{
        comment:this.comment,
        commenter:this.commenter
        
      }).then(function(response){
        console.log(response.data);
        

      }).catch(err=>{
        console.log(err)
      });

     window.location.href = '/case/'+this.id;

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