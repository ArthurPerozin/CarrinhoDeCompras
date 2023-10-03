<template>
  <div>
    <router-link to="/"><button>Produtos</button></router-link>
    <v-table>
      <thead>
        <tr>
          <th class="text-left">Imagem</th>
          <th class="text-left">Nome</th>
          <th class="text-left">Preço</th>
          <th class="text-left">Quantidade</th>
          <th class="text-left">Subtotal</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in produtosCarrinho" :key="item.id">
          <td><img :src="item.imagem" width="30" /></td>
          <td>{{ item.nome }}</td>
          <td>{{ item.preco }}</td>
          <td>
            <input type="number" v-model="item.quantidade" @input="atualizarSubtotal(item)" />
          </td>
          <td>{{ item.subtotal }}</td>
        </tr>
      </tbody>
    </v-table>
    
    <!-- Exibe o preço total de todos os produtos no carrinho -->
    <div>
      <strong>Preço Total:</strong> {{ calcularPrecoTotal }}
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    produtosCarrinho() {
      // Certifique-se de que sua estrutura de dados no Vuex esteja configurada corretamente
      return this.$store.state.produtosCarrinho;
    },
    calcularPrecoTotal() {
      let precoTotal = 0;
      for (const item of this.produtosCarrinho) {
        precoTotal += item.subtotal;
      }
      return precoTotal;
    }
  },
  methods: {
    atualizarSubtotal(item) {
      item.subtotal = item.preco * item.quantidade;
    }
  }
};
</script>
