<template>
  <div>
    <table>
    <tr>
        <th>Fach</th>
        <th>Noten</th>
        <th>Durchschnitt</th>
    </tr>
    <tr>
        <td>{{ title }}</td>
        <td>{{ grades.toString() }}</td>
        <td>{{ avg }}</td>
    </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'Subject',
  props: {
    title: String,
    grades: Array,
    avg: String
  },
  methods: {

    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
