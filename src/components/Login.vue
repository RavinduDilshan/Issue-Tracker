
<template>
  <div id="About">
    <b-container>
      <b-row class="justify-content-md-center mt-4">
        <b-col col md="8">
          <b-card header="Login Form"
            header-bg-variant="primary"
            header-text-variant="white"
          >
            <b-card-text>
              <b-form @submit="onSubmit">
                
                <!-- username -->
                <b-form-group 
                
                label="User Name"
                >
                <b-form-input v-model="username" required></b-form-input>
                </b-form-group>
                
                <!-- password -->
                 <b-form-group 
                
                label="Password"
                >
                <b-form-input v-model="password" required type="password"></b-form-input>
                </b-form-group>

                <!-- submit -->
                <b-form-group>
                  <b-button type="submit" variant="outline-primary">Login</b-button>
                </b-form-group>

              </b-form>
            </b-card-text>
          
          
          </b-card>
        </b-col>
      </b-row>




    </b-container>



  </div>
  
</template>

<script>
import axios from 'axios';
export default {
  data(){
    return{
      username:'',
      password:'',
      apidata:''
    }
  },

  methods:{

    onSubmit(event){
      event.preventDefault()
      alert(this.username + ' ' + this.password)

      axios.post('http://localhost:3000/api/test/auth',{
        username:this.username,
        password:this.password
      }).then(function(response){
        console.log(response.data);

        if(response.data.message=='success'){
         window.location.href = '/userdash'

        }
        

      }).catch(err=>{
        console.log(err)
      });

    }
  }
  
}
</script>