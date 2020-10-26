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

        <div>
    <table style="width:100%">
  <tr>
    <th>Issue Id</th>
    <th>Status</th>
    <th>Description</th>
    <th> Actions</th>
  </tr>
  <tr v-for="item in list" v-bind:key="item.issueId">
    <td>{{item.issueId}}</td>
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
       
    },


       data() {
      return {
          comment:'',
           list:[],
          id:this.$route.params.id
      }
    }
    
}
</script>

<style  scoped>

.pageComponent{
    text-align:center;
}

</style>