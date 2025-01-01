<template>
  <div>
    <h1>Available Services</h1>
    <ul v-if="!loading && !error">
      <li
        v-for="service in services"
        :key="service"
        @click="navigateToService(service)"
        style="cursor: pointer;"
      >
        {{ service }}
      </li>
    </ul>
    <p v-else-if="loading">Loading services...</p>
    <p v-else-if="error">Error: {{ error.message }}</p>
  </div>
</template>

<script>
import { ref, watch } from 'vue';
import { useQuery } from '@vue/apollo-composable';
import gql from 'graphql-tag';

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

    // Reactively update `services` when the query result changes
    watch(
      () => result.value,
      (newResult) => {
        if (newResult && newResult.getMenu) {
          services.value = newResult.getMenu;
        }
      }
    );

    const navigateToService = (service) => {
      window.location.href = `/service/${service}`;
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
/* Opcional: Estilos personalizados */
</style>
