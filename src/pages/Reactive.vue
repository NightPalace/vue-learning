<template>
  <reactive-vue-2/>
  <br/>
  <reactive-vue-3/>
</template>

<script>
import ReactiveVue2 from '../components/reactive/vue2.vue';
import ReactiveVue3 from '../components/reactive/vue3.vue';

export default {
  name: 'Reactive',
  components: {
    ReactiveVue2,
    ReactiveVue3,
  }
}
</script>
