<template>
  <div>
    <p>Durchschnitt über alle Fächer: {{ avg }}</p>
    <p>Mangelpunkte: {{ punkte }}</p>
    </div>
</template>

<script>
export default {
  name: 'Summary',
  props: {
    avg: String,
    punkte: String
  },
  methods: {
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
