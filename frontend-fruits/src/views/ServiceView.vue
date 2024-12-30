<template>
  <div>
    <h1>{{ serviceName }}</h1>
    <div>
      <label for="input-name">Introduce el valor:</label>
      <input
        id="input-name"
        v-model="userName"
        type="text"
        placeholder="Escribe el valor"
      />
    </div>
    <div v-if="responseData">
      <h2>Respuesta del servicio:</h2>
      <p>{{ responseData }}</p>
    </div>
    <p v-else-if="loading">Cargando respuesta...</p>
    <p v-else-if="error">Ocurrió un error: {{ error.message }}</p>
  </div>
</template>

<script>
import { ref, watch } from 'vue';
import { useLazyQuery } from '@apollo/client';
import gql from 'graphql-tag';

export default {
  name: 'ServiceView',
  props: {
    serviceName: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const userName = ref('');
    const responseData = ref(null);

    const SAY_HELLO = gql`
      query ($name: string!){
        ${props.serviceName}(name: $name)
      }
    `;
    const { load, loading, error, onResult } = useLazyQuery(SAY_HELLO);

    watch(userName, (newName) => {
      if (newName) {
        load({ name: newName });
      }
    });

    onResult((result) => {
      responseData.value = result.data[props.serviceName];
    });

    return {
      userName,
      responseData,
      loading,
      error,
    };
    },

};
</script>

<style>
#input-name {
  margin: 10px 0;
  padding: 5px;
  font-size: 1rem;
}
</style>
