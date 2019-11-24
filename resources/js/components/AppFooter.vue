<template>

<div>
      <v-footer padless>
        <v-col
            class="centered-input"
            cols="12"
            >
            {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
        </v-col>
    </v-footer>

</div>

</template>

<script>
export default {

}
</script>

<style scoped>
.centered-input {
  text-align: center
}
</style>
