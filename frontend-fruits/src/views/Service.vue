<template>
    <div>
      <div>
        <h1>{{ service }}</h1>
        <input
          type="text"
          placeholder="Ingrese su nombre"
          v-model="name"
        />
      </div>
      <div>
        <h2>Respuesta</h2>
        <p>{{ response }}</p>
      </div>
    </div>
  </template>
  
  <script>
  import { watch } from 'vue';
  import { useLazyQuery } from '@vue/apollo-composable';
  import gql from 'graphql-tag';
  
  const SAY_HELLO = gql`
    query ($name: String!) {
      sayHello(name: $name)
    }
  `;
  
  export default {
    data() {
      return {
        name: '',
        response: '',
        service: this.$route.params.service,
      };
    },
    setup() {
      const { execute, result } = useLazyQuery(SAY_HELLO);
  
      return {
        execute,
        result,
      };
    },
    watch: {
      name(newName) {
        this.execute({ name: newName });
      },
      result(newValue) {
        this.response = newValue?.data?.sayHello || '';
      },
    },
  };
  </script>
  