<template>
<v-container fluid grid-list-md>
    <v-layout>
    <v-flex xs12>
        <v-card
            class="mx-auto mt-2"
        >
            <v-card-text>
            <div>
                <p class="display-1 text--primary"> {{data.title}} </p>
                <span>{{data.user}} asked {{data.create_at}}</span>
            </div>
            <v-spacer></v-spacer>
            <div>
                <v-btn color="teal">5 Replies</v-btn>
            </div>
            </v-card-text>

            <v-card-text class="text--parimary" v-html="body"></v-card-text>

            <v-card-actions v-if="own">
                <v-btn  fab x-small @click="edit">
                    <v-icon color="orange">mdi-pencil</v-icon>
                </v-btn>
                <v-btn  fab x-small @click="destroy">
                    <v-icon color="red">mdi-delete</v-icon>
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-flex>
    </v-layout>
</v-container>
</template>

<script>

export default {
    props: ['data'],
    data(){
        return {
            own : User.own(this.data.user_id)
        }
    },
    computed: {
        body() {
            return md.parse(this.data.body)
        }
    },
    methods:{
        destroy(){
            axios.delete(`/api/question/${this.data.slug}`)
            .then(res => this.$router.push('/forum'))
            .catch(error => console.log(error.response.data))
        },

        edit(){
            EventBus.$emit('startEditing')
        }
    }
}
</script>

<style scoped>

</style>
