<template>
    <div class="main">
        <ol>
            <li v-for="item in todos" :key="item">
                <span v-bind:class="{ done: item.completed }" class="item">
                    <span>
                        <input
                            type="checkbox"
                            name=""
                            id=""
                            @change="item.completed = !item.completed"
                            v-bind:checked="item.completed"
                        />
                        {{ uppercase(item.title) }}
                    </span>
                    <button
                        class="del-btn"
                        @click="$emit('remove-todo', item.id)"
                    >
                        &times;
                    </button>
                </span>
            </li>
        </ol>
    </div>
</template>

<script>
export default {
    props: {
        todos: {
            type: Object,
            required: true,
        },
    },
    methods: {
        removeTodo(id) {
            this.$emit("remove-todo", id);
        },
        uppercase(v){
            return v.toUpperCase();
        }
    }
};
</script>

<style scoped>

.item {
    border: 1px solid;
    border-radius: 4px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 1.5em;
    padding: 0.7em;
}

ol {
    margin: 0;
    padding: 0;
    min-width: 270px;
}

.del-btn {
    width: 22px;
    height: 22px;
    border: 1px solid red;
    color: red;
    border-radius: 50%;
    background-color: transparent;
}

.done span {
    text-decoration: line-through;
}
</style>
