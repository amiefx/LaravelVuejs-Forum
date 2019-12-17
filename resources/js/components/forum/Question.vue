<template>
  <v-card
    class="mx-auto mb-1"
    outlined
  >
    <v-list-item tow-line>
      <v-list-item-content>
        <!-- <div class="overline mb-4">OVERLINE</div> -->
        <v-list-item-title class="headline mb-0"> <router-link :to="data.path">{{data.title}}</router-link> </v-list-item-title>
        <v-list-item-subtitle>{{data.user}} asked {{data.create_at}}</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-card-text>
      <p>{{data.body}}</p>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
    props:['data']
}
</script>

<style scoped>

</style>
