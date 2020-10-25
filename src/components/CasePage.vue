<template>
<div>
    <Header />
    <div class="pageComponent">

        <br>
        <h1>Case Name</h1>
        <b-container>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro veritatis maxime similique ipsa illo voluptatibus unde fugiat vitae fuga. Itaque aspernatur ducimus, alias dicta repellat nam ab fugit quasi enim!</p>
        </b-container>
        <h1>Issues of this case of this project</h1>

        <div>
    <b-table striped hover :items="items"></b-table>
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
import Header from './layout/Header'
export default {
    name:'CasePage',
    components:{
        Header
    },

       data() {
      return {
          comment:'',
        items: [
          { issue: 40, status: 'Dickerson', type:'type',description: 'Macdonald'},
          { issue: 21, status: 'Larsen',type:'type', description: 'Shaw'},
          { issue: 89, status: 'Geneva', type:'type',description: 'Wilson' },
          { issue: 38, status: 'Jami', type:'type',description: 'Carney' }
        ]
      }
    }
    
}
</script>

<style  scoped>

.pageComponent{
    text-align:center;
}

</style>