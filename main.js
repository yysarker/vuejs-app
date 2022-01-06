const app = Vue.createApp({
     data() {
          return {
               product: "Socks",
               image: './assets/images/socks_blue.jpg ',
               url: 'http://yeahyea.netlify.app',
               inStock: 0,
               details: ['50% cotton', '30% wool', '20% polyester'],
               names: ['Yeahyea Saker', 'Sumaya Hamida','Morium Jamila', 'Tahmina Yeasmin'],
               variants: [
                    {id: 2234, color: 'green'},
                    {id: 2235, color: 'blue'},
               ]
          }
     }
})