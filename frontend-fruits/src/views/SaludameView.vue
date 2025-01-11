<template>
  <div>
    <h1>Saludame</h1>
    <div>
      <label for="name">Escribe tu nombre:</label>
      <input id="name" v-model="name" type="text" placeholder="Tu nombre" />
      <button @click="sendName" :disabled="loading">Enviar</button>
    </div>
    <div v-if="loading">Enviando...</div>
    <div v-if="error">Error: {{ error.message }}</div>
    <div v-if="response">Respuesta del servidor: {{ response }}</div>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useLazyQuery } from '@vue/apollo-composable';
import { gql } from 'graphql-tag';

// Definimos la consulta GraphQL
const SAY_HELLO = gql`
  query ($name: String!) {
    sayHello(name: $name)
  }
`;

export default {
  name: 'SaludameView',
  setup() {
    const name = ref(''); // Nombre ingresado por el usuario
    const response = ref(''); // Respuesta del servidor
    const { load, loading, error, onResult } = useLazyQuery(SAY_HELLO); // LazyQuery para consultas dinámicas

    // Manejamos el resultado de la consulta
    onResult((result) => {
      if (result && result.data) {
        response.value = result.data.sayHello;
      }
    });

    // Enviamos el nombre al servidor
    const sendName = () => {
      if (name.value) {
        load({ name: name.value }); // Enviamos el nombre como variable
      }
    };

    return {
      name,
      response,
      loading,
      error,
      sendName,
    };
  },
};
</script>

<style>
/* Estilo opcional */
button {
  margin-top: 10px;
}
div {
  margin-bottom: 10px;
}
</style>
