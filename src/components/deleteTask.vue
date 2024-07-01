<template>
    <div>
        <Button class="colors" @click="deleteTask" icon="pi pi-trash" outlined ></Button>
    </div>
</template>

<script>
import Button from 'primevue/button';

export default {
    data () {
        return {
            visible: false
        }
    },
    components: {
        Button
    },
    props: ['item'],
    methods: {
        async deleteTask() {
            this.$root.emitter.emit('deleteTask', this.item.id);
        }
    }
}
</script>

<style scoped>
div{
    position: relative;
}
.colors{
    background-color: black;
    color: white;
    border: none;
    border-radius: 5px;
    padding: 5px 10px;
    text-align: center;
    text-decoration: none;
    display: flex;
    position: absolute;
    font-size: 16px;
    cursor: pointer;
    right: 50px;
    top: 0px;
}
</style>