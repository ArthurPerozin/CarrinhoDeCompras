<template>
  <router-link to = "/"><button>Produtos</button></router-link>
    <v-table>
      <thead>
        <tr>
          <th class="text-left">Imagem</th>
          <th class="text-left">Nome</th>
          <th class="text-left">Preço</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in this.$store.state.produtosCarrinho" :key="item.id">
          <td><img :src="item.imagem" width="30" /></td>
          <td>{{ item.nome }}</td>
          <td>{{ item.preco }}</td>
        </tr>
      </tbody>
    </v-table>
  </template>