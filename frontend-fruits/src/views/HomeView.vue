<template>
  <div>
    <h1>Available Services</h1>
    <ul>
      <li v-for="service in services" :key="service" @click="navigateToService(service)">
        {{ service }}
      </li>
    </ul>
  </div>
</template>

<script>
import { useQuery } from '@vue/apollo-composable';
import { gql } from 'graphql-tag';


const GET_MENU = gql`
  query {
    getMenu
  }
`;

export default {
  name: 'HomeView',
  setup() {
    const { result, loading, error } = useQuery(GET_MENU);
    const services = result?.data?.getMenu || [];

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
