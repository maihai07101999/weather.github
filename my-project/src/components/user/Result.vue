<template>
    <div>
        <button class="btn btn-success" @click="increment">tang</button>
         <button class="btn btn-success" @click="decrement">giam</button>
    </div>
</template>
<script>
export default({
    data(){
        return{

        }
    },
    methods: {
        increment(){
            this.$store.state.result++;
        },
        decrement(){
            this.$store.state.result--;
        }
    }
})
</script>
<style scoped>
</style>
