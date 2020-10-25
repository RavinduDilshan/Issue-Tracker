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
                <b-form-input v-model="user_name" required></b-form-input>
                </b-form-group>
                
                <!-- password -->
                 <b-form-group 
                
                label="Password"
                >
                <b-form-input v-model="Password" required type="password"></b-form-input>
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
export default {
  data(){
    return{
      user_name:'',
      Password:''
    }
  },

  methods:{

    onSubmit(event){
      event.preventDefault()
      alert(this.user_name + ' ' + this.Password)

    }
  }
  
}
</script>