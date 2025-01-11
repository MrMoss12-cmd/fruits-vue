import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { DefaultApolloClient } from '@vue/apollo-composable';
import apolloClient from './apollo';

// Crea la aplicación
const app = createApp(App);

// Configura el router
app.use(router);

// Proporciona el cliente Apollo a toda la aplicación
app.provide(DefaultApolloClient, apolloClient);

// Monta la aplicación en el elemento con ID "app"
app.mount('#app');
