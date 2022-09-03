<template>
    <div class="display-board">
        <div class="btn">
            <button @click='getAllUsers()' type="button" class="btn btn-warning">Get all Users</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'DisplayBoard',
        methods: {
            getAllUsers() {
                this.$emit('getAllUsers')
            }
        }
    }
</script>