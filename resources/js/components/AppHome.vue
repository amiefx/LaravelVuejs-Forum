<template>
    <v-app>
        <toolbar></toolbar>
        <router-view></router-view>
        <app-footer></app-footer>
    </v-app>
</template>

<script>
import toolbar from './Toolbar.vue'
import AppFooter from './AppFooter.vue'
import Login from './login/Login.vue'
export default {
    components: {
        toolbar,
        AppFooter,
        Login,
    }
}
</script>

<style scoped>

</style>
