<template>
    <div>
      <router-link to="/Cart"><button>Carrinho</button></router-link>
      <div class="lista">
        <v-card class="mx-auto" max-width="300px" v-for="product in products" :key="product.id">
          <v-img width="100%"
            class="align-end text-white"
            max-width="33%"
            :src="product.imagem"
            cover
          >
          </v-img>
  
          <v-card-subtitle max-width="80%" class="pt-4"> {{product.nome}} </v-card-subtitle>
  
          <v-card-text max-width="80%" >
            <div>10x de apenas {{product.parcela}}</div>
          </v-card-text>
          <v-card-actions max-width="80%" >
              <v-btn color="blue" @click="adicionarProduto(product)">
              Comprar
            </v-btn>
          </v-card-actions>
        </v-card>
      </div>
    </div>
  </template>
  
  <script>
  import { mapActions } from 'vuex';
  import axios from 'axios';
  
  export default {
    data() {
      return {
        products: [],
        produtosCarrinho: [],
      };
    },
    mounted() {
      this.loadProducts();
    },
    methods: {
      ...mapActions(['adicionarProduto']), 
      loadProducts() {
        axios({
          url: 'http://localhost:3000/produtos',
          method: 'GET'
        })
        .then((response) => {
            this.products = response.data;
          })
          .catch(() => {
            alert('Desculpe, não foi possível recuperar os produtos');
          });
      },
      adicionarProduto(product) { 
        this.$store.dispatch('adicionarProduto', { product });
      }
    }
  };
  </script>
  
  <style>
  .lista {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
    margin-top: 30px;
  }
  
  .v-card {
    display: flex;
    flex-direction: column;
    width: 200px;
    align-items: center;
    text-align: center;
    justify-content: center;
    padding: 15px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .v-card-subtitle {
    font-size: 1.2rem;
    margin-top: 10px;
  }
  
  .v-card-text {
    font-size: 1rem;
    color: #666;
    margin-top: 10px;
  }
  
  .v-card-actions {
    margin-top: 15px;
  }
  </style>
  