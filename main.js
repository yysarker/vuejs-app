const app = Vue.createApp({
     data() {
          return {
               product: "Socks",
               brand: 'Vue Mastery',
               selectedVariant: 0,
               cart: 0,
               onSale: true,
               variants: [
                    {id: 2234, color: 'green', image: './assets/images/socks_green.jpg', quantity: 50},
                    {id: 2234, color: 'darkblue', image: './assets/images/socks_blue.jpg', quantity: 0},
               ]
          }
     },
     methods: {
          updateVariant(index) {
               this.selectedVariant = index
             }
     },
     computed:{
          title(){
               return this.brand + ' ' + this.product
          },
          image() {
               return this.variants[this.selectedVariant].image
             },
             inStock() {
               return this.variants[this.selectedVariant].quantity
             },
           //    code solution 
             saleMessage(){
                  if(this.onSale){
                         return this.brand + ' ' + this.product + ' is on sale'
                  }
             }
             //End code solution 

     }
})