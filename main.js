const app = Vue.createApp({
     data() {
          return {
               product: "Socks",
               image: './assets/images/socks_blue.jpg ',
               inStock: 0,
               cart: 0,
               variants: [
                    {id: 2234, color: 'green', image: './assets/images/socks_green.jpg'},
                    {id: 2234, color: 'darkblue', image: './assets/images/socks_blue.jpg'},
               ]
          }
     },
     methods: {
         updateImage(variantImage){
              this.image = variantImage
         }
     }
     
})