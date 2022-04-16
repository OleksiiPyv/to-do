<template>
    <form @submit.prevent="onSubmit">
        <input type="text" name="" id="" v-model="title">
        <button type="submit">
            add
        </button>
    </form>
</template>

<script>
    export default {
        data() {
            return {
                title: ''
            }
        },

        methods: {
            onSubmit() {
                if (this.title.trim()) {
                    const newTodo = {
                        name: this.title,
                        completed: false,
                        id: Date.now()
                    }

                    this.$emit('newTodo', newTodo);
                    this.title = '';
                }
            }
        }
    }
</script>

<style>
    form {
        display: flex;
        justify-content: center;
        margin-bottom: 1em;
    }
</style>