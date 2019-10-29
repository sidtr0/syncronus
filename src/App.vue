<template>
   <v-app>
    <NavBar />
    <v-content class="grey lighten-4">
      <h1>Home</h1> 
    </v-content>

   </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';
import NavBar from './components/NavBar';

export default {
  name: 'App',
  components: {
    NavBar
  },
  data: () => ({
    //
  }),
};
</script>
