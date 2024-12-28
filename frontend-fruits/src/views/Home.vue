<template>
    <div>
      <h1>Fruits Disponibles</h1>
      <ul>
        <li v-for="service in services" :key="service" @click="selectService(service)">
          {{ service }}
        </li>
      </ul>
    </div>
  </template>

<script>
import { useQuery } from '@vue/apollo-composable';
import gql from 'graphql-tag';

const GET_MENU = gql`
  query {
    getMenu
  }
`;

export default {
    data() {
        return {
            services: [],
        };
  },
  setup() {
      const { result } = useQuery(GET_MENU);

      return {
          result,
      };
  },
  watch: {
    result(newValue) {
        this.services = newValue?.data?.getMenu || [];
    },
  },
  methods: {
    selectService(service) {
        this.$router.push(`/service/${service}`);
    },
  },
};
</script>
