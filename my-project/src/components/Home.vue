<template>
  <div class="app3">
    <div class="menu">
     <h3>DASHBOARD</h3>
      <ul>
        <li>Components</li>
        <li>Admin Profile</li>
        <li>Page</li>
        <li>Table</li>
      </ul>
      <h3>INTERFACE</h3>
      <ul>
        <li>Components</li>
        <li>Admin Profile</li>
        <li>Page</li>
        <li>Table</li>
      </ul>
     </div> <!-- end menu -->
     .<div class="newitem">Add New Item</div>
     <div class="form-search">
       <input  class="inp" type="search" placeholder="tìm kiếm">
       <button class="btn-primary but" type="button">search</button>
     </div> <!-- end search-->
      <div class="nd">
       <ul>
         <li v-for="todo in todos" :key="todo.id"> {{todo.name}} : {{ todo.address}}</li>
       </ul>
     </div>
  </div>
</template>
<script>
export default {
  name: "#app6",
  computed: {
    todos(){
      return this.$store.state.todos
    }
  }
}
</script>
<style scoped>
  .menu{
    width: 13%;
    float: left;
    height: auto;
    background-color:rgb(66, 120, 238);
    margin-top: 2px;
  }
  h3{
    color:aliceblue;
    font-size: 15px;
    font-weight: 400;
     padding: 10px 20px;
    border-bottom: 1px solid aliceblue ;
     border-top: 1px solid aliceblue ;

  }
 
  .logo{
    color: aliceblue;
  }
  .newitem{
    float: left;
    margin: 10px 0 0 30px;  
    color:rgb(51, 107, 228);
    cursor: pointer;
    font-size: 20px;
    font-weight: 400;
  }
  .newitem:hover{
   color:blue;
   font-weight: 550;
  }
  .form-search{
    float: left;
    margin: 7px 0 0 30px;
    padding-left: 5px;
    
  }
  .inp{
    border-top-left-radius: 10px;
    padding: 3px;
    border-bottom-left-radius: 10px;
  }
  .but{
    display: inline;
    padding: 3px;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    transform: translateX(-5px) !important;
  }
  .nd{
    width: 80%;
    height: 579px;
    margin: 25px;
    float: left;
    background-color:antiquewhite;
  }
</style>
