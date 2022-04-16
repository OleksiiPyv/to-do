<template>
    <div>
        <main>
            <AddTodo @newTodo="addTodo" />
            <TodoLoader v-if="this.loading" />
            <div v-else-if="filteredTodos.length">
                <select v-model="filter">
                    <option value="all">all</option>
                    <option value="completed">completed</option>
                    <option value="not completed">not completed</option>
                </select>
                <TodoList
                    v-bind:todos="filteredTodos"
                    @remove-todo="removeTodo"
                />
            </div>

            <p v-else>No data</p>
        </main>
    </div>
</template>

<script>
import TodoList from "@/components/TodoList";
import AddTodo from "@/components/AddTodo";
import TodoLoader from "@/components/TodoLoader";

export default {
    name: "Todos-page",

    data() {
        return {
            todos: [],
            loading: true,
            filter: "all",
        };
    },

    mounted() {
        fetch("https://jsonplaceholder.typicode.com/todos")
            .then((response) => response.json())
            .then((json) => {
                setTimeout(() => {
                    this.todos = json;
                    this.loading = false;
                }, 3000);
            });
    },

    components: {
        TodoList,
        AddTodo,
        TodoLoader,
    },

    methods: {
        removeTodo(id) {
            this.todos = this.todos.filter((x) => x.id !== id);
        },
        addTodo(newTodo) {
            this.todos.push(newTodo);
        },
    },

    computed: {
        filteredTodos() {
            return this.filter === "all"
                ? this.todos
                : this.todos.filter((x) => {
                      if (this.filter === "completed") {
                          return x.completed === true;
                      } else {
                          return x.completed === false;
                      }
                  });
        },
    },
};
</script>
