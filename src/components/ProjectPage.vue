<template>
<div>
    <Header />
    <div class="pageComponent">

        <br>
        <h1>Project Name</h1>
        <h2>Cases Of This Project</h2>

        <div>
    <b-table striped hover :items="items"></b-table>
    </div>



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
import Header from './layout/Header'
export default {
    name:'ProjectPage',
    components:{
        Header
    },

       data() {
      return {
          comment:'',
        items: [
          { case: 40, status: 'Dickerson', description: 'Macdonald' ,issue_count:'3'},
          { case: 21, status: 'Larsen', description: 'Shaw',issue_count:'3' },
          { case: 89, status: 'Geneva', description: 'Wilson',issue_count:'3' },
          { case: 38, status: 'Jami', description: 'Carney',issue_count:'3' }
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