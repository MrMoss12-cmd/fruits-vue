<template>
  <div>
    <h1>Available Services</h1>
    <ul v-if="!loading && !error">
      <li 
        v-for="service in services" :key="service">
        <button @click="navigateToService(service)">
          {{ service }}
        </button>
      </li>
    </ul>
    <p v-else-if="loading">Loading services...</p>
    <p v-else-if="error">Error: {{ error.message }}</p>
  </div>
</template>

<script>
import { ref, watch } from 'vue';
import { useQuery } from '@vue/apollo-composable';
import { useRouter } from 'vue-router'; 

import {gql} from 'graphql-tag';

const GET_MENU = gql`
  query {
    getMenu
  }
`;

export default {
  name: 'HomeView',
  setup() {
    const { result, loading, error } = useQuery(GET_MENU);
    const services = ref([]);
    const router = useRouter(); // Crea una instancia del router

    watch(
      () => result.value,
      (newResult) => {
        if (newResult && newResult.getMenu) {
          services.value = newResult.getMenu;
        }
      }
    );

    const navigateToService = (service) => {
      if (service === 'Saludame') {
        router.push('/Saludame');
      } else {
        alert(`El servicio ${service} no está disponible actualmente.`);
      }
    };

    return {
      services,
      loading,
      error,
      navigateToService,
    };
  },
};
</script>

<style>
/* Opcional: Estilo para los botones */
button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 8px 16px;
  margin: 4px;
  border-radius: 4px;
  cursor: pointer;
}
button:hover {
  background-color: #0056b3;
}
</style>
