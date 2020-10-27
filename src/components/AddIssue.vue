<template>
<div>
<Header />

    <div>
        <b-container>
      <b-row class="justify-content-md-center mt-4">
        <b-col col md="8">
          <b-card header="Add Issue"
            header-bg-variant="primary"
            header-text-variant="white"
          >
            <b-card-text>
              <b-form @submit="onSubmit">
                
                <!-- projectname -->
                <b-form-group 
                
                label="Issue Name"
                >
                <b-form-input v-model="issuename" required></b-form-input>
                </b-form-group>

                  
                <!-- description -->
                <b-form-group 
                
                label="Description"
                >
                <b-form-input v-model="description" required></b-form-input>
                </b-form-group>



                <!-- submit -->
                <b-form-group>
                  <b-button type="submit" variant="outline-primary">Add</b-button>
                </b-form-group>

              </b-form>
            </b-card-text>
          
          
          </b-card>
        </b-col>
      </b-row>




    </b-container>
    </div>




   </div>
</template>

<script>
import axios from 'axios'
import Header from './layout/Header'
export default {
    name:'AddIssue',
     components:{
        Header
    },
    data(){
    return{
      issuename:'',
      description:'',
      id:this.$route.params.id
  
    }
  },

  methods:{
      onSubmit(){
          event.preventDefault()
          alert(this.issuename + ' ' + 'Added Succesfully')

        axios.post('http://localhost:3000/api/test/addissue/'+this.id,{
        issuename:this.issuename,
        description:this.description
      }).then(function(response){
        console.log(response.data);
        

      }).catch(err=>{
        console.log(err)
      });

     window.location.href = '/case/'+this.id;

      }
  }


    
}
</script>

<style scoped>

</style>