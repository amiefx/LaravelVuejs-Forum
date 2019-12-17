<template>
    <v-container>
        <v-card>
            <v-container>
                <v-form>
                <v-text-field label="Title" v-model="form.title" type="text" required></v-text-field>
                <vue-simplemde v-model="form.body" ref="markdownEditor" />

                <v-card-actions>
                    <v-btn  fab x-small @click="update">
                        <v-icon color="green">mdi-content-save</v-icon>
                    </v-btn>
                    <v-btn  fab x-small @click="cancel">
                        <v-icon color="">mdi-close-circle</v-icon>
                    </v-btn>
                </v-card-actions>
            </v-form>
            </v-container>
        </v-card>
    </v-container>
</template>

<script>
import VueSimplemde from 'vue-simplemde'
export default {
    components: {
      VueSimplemde
    },
    props: ['data'],
    data() {
        return {
            form: {
                title: null,
                body: null
            }
        }
    },
    methods: {
        cancel() {
            EventBus.$emit('cancelEditing')
        },

        update() {
            axios.patch(`/api/question/${this.form.slug}`,this.form)
            .then(res => this.cancel())
        }
    },
    created() {
        this.form = this.data
    }
}
</script>

<style scoped>

</style>
