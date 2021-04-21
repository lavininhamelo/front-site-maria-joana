<template>
  <div class="q-mt-lg column text-primary full-width">
      <span class="text-bold q-mb-sm" style="font-size: 24px">{{title}}</span>
      <p>{{subtitle}}</p>
  </div>
</template>

<script>
  export default {
    props: {
      title: String,
      subtitle: String
    }
  }
</script>
