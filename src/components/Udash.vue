<template>
<div>
    <Header />
    <div class="pageComponent">

        <br>
        <h1>All Projects</h1>

        <div>
    <b-table striped hover :items="items"></b-table>
    </div>



    </div>
</div>
    
</template>

<script>
import Header from './layout/Header'
export default {
    name:'Udash',
    components:{
        Header
    },

       data() {
      return {
        items: [
          { project_name: 40, status: 'Dickerson', cases_count: 'Macdonald' ,issue_count:'3'},
          { project_name: 21, status: 'Larsen', cases_count: 'Shaw',issue_count:'3' },
          { project_name: 89, status: 'Geneva', cases_count: 'Wilson',issue_count:'3' },
          { project_name: 38, status: 'Jami', cases_count: 'Carney',issue_count:'3' }
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