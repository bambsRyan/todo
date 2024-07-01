<template>
    <div>
        <TopNavbar/>
        <AddTask @addTask="addTask" id="button"/>
        <KBoard v-if="Task.length || {}" :Task="Task"/>
    </div>
</template>

<script>
import axios from 'axios';
import TopNavbar from '@/components/TopNavbar.vue';
import KBoard from '@/components/KBoard.vue';
import AddTask from '@/components/AddTask.vue';

export default {
  components: { TopNavbar, KBoard, AddTask },
    name: 'KanbanBoard',
    data() {
        return {
            Task: []
        };
    },
    methods: {
        async fetchTasks() {
            try {
                const res = await axios.get('http://localhost:3000/Task');
                this.Task = res.data;
            } catch (error) {
                console.log(error);
            }
        },
        async addTask(data) {
            try {
                const newTask = {
                    task_name: data.task_name,
                    Description: data.Description,
                    status_id: data.status_id,
                    due_date: data.due_date
                };
                await axios.post('http://localhost:3000/Task', newTask);
                this.fetchTasks();
            } catch (error) {
                console.log(error);
            }
        },
        async updateTask(data) {
            try {
                await axios.patch(`http://localhost:3000/Task/${data.id}`, data);
                this.fetchTasks();
            } catch (error) {
                console.log(error);
            }
        },
        async deleteTask(id) {
            try {
                await axios.delete(`http://localhost:3000/Task/${id}`);
                this.fetchTasks();
            } catch (error) {
                console.log(error);
            }
        }
    },
    async mounted() {
        this.fetchTasks();
        this.$root.emitter.on('updateTask', this.updateTask)
        this.$root.emitter.on('deleteTask', this.deleteTask)
        this.$root.emitter.on('updater', this.updateTask)
    }
}
</script>
    
<style scoped>
    #button{
        display:flex;
        justify-content: end;
        margin: 10px;
    }
</style>