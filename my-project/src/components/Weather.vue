<template>
  <div id="app5">
    <b-table striped hover :items="items"></b-table>
      <div class="car1">
        <div class="to">Tổng Tiền: {{ tongtien }} </div>
        <div class="to">Giảm giá: {{ gg }} % </div>
        <div class="to1">Thanh toán: {{ tongtien-tongtien*(gg/100)  }} </div>
        <button class="btn-warning"><router-link tag="a" class="nav-link" to="/login"
              >thanh toán</router-link></button>
      </div>   
  </div>
</template>

<script>
  export default {
    name: "app5",
    data() {
      return {
        items: [
          { stt: 1, name: 'iphone',pic: 'iphone.jpg', total: 150, quantity: 2 },
          { stt: 2, name: 'macbook',pic: 'mac.jpg', total: 290, quantity: 1 },
          { stt: 3, name: 'earpot',pic: 'iphone.jpg',total: 90,quantity: 3 },
          { stt: 4, name: 'car',pic: 'mac.jpg',total: 15000, quantity: 1 }, 
        ],
        gg: Math.ceil(Math.random()*10)
      }
    },
   computed: {
    tongtien: function (){
        let total1 = 0;
        for(let i = 0; i < this.items.length; i++){
           total1 += parseInt(this.items[i].total);
            }
            return total1;
        }
    },
    
  }
</script>
<style scoped>
  .car1{
    width: 200px;
    height: 150px;
   border: 2px solid #333;
  }
  .to, .to1{
    text-align: left;
    padding: 4px;
  }
  .to1{
    border-top: 1px solid rgb(39, 37, 37);
    padding: 5px;
  }
</style>