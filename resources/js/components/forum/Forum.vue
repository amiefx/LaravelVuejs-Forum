<template>
    <v-container fluid grid-list-md>
        <v-layout>
            <v-flex xs8>
                <!-- <usertb></usertb> -->
                <question v-for="question in questions" :key="question.path" :data=question></question>
            </v-flex>
            Sidebar
        </v-layout>
    </v-container>
</template>

<script>
import question from './Question'
import usertb from './Usertb'
export default {
    data(){
        return {
            questions:{}
        }
    },
    components: {
        question, usertb
    },
    created(){
        axios.get('/api/question')
        .then(res => this.questions = res.data.data)
        .catch(error => console.log(error.response.data))
    }
}
</script>

<style scoped>

</style>
