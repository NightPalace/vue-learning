<template>
  <h2>Vue 2.x 响应式</h2>
  <p>描述：</p>
  <h4>响应信息：{{ msg }}</h4>
  <ul v-if="list && list.length">
    <li v-for="(text, index) in list" :key="index">
      {{ text }}
    </li>
  </ul>
</template>

<script>
export default {
  name: 'ReactiveVue2',
  data() {
    return {
      msg: '信息',
      list: [],
    };
  },
}
</script>
