<template>
    <div class="kboard">
        <PendingTask :pending="pending"/>
        <OnGoing :ongoing="ongoing"/>
        <CompletedTask :completed="completed"/>
        <CancelledTasks :cancelled="cancelled"/>
    </div>
</template>

<script>
import PendingTask from './PendingTask.vue';
import OnGoing from './OnGoing.vue';
import CompletedTask from './CompletedTask.vue';
import CancelledTasks from './CancelledTasks.vue';
export default {
    props: ['Task'],
    name: 'KBoard',
    components: { PendingTask, OnGoing, CompletedTask, CancelledTasks},
    data() {
        return {
            pending: [],
            ongoing: [],
            completed: [],
            cancelled: []
        };
    },
    methods: {
        spreadTasks(){
            this.pendingTasks();
            this.OngoingTasks();
            this.completedTasks();
            this.cancelledTasks();
        },
        pendingTasks(){
            this.pending = this.Task.filter(task => task.status_id === 1);
        },
        OngoingTasks(){
            this.ongoing = this.Task.filter(task => task.status_id === 2);
        },
       completedTasks(){
            this.completed = this.Task.filter(task => task.status_id === 3);
        },
        cancelledTasks(){
            this.cancelled = this.Task.filter(task => task.status_id === 4);
        }
    },
    mounted(){
        this.spreadTasks();
    },
    watch: {
        Task(){
            this.spreadTasks();
        }
    }
}

</script>

<style scoped>
    .kboard{
        width: 100%;
        height:83vh;
        background-color: white;
        color: white;
        align-items: center;
        display: flex;
        flex-direction: row;
        gap: 20px;
        padding: 10px;
        font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    }
</style>