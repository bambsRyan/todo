<template>
    <div class="ongoing">
        <div class="inside">
            <hr>
            <h1>On Going Task</h1>
            <hr>    
        </div>
        <div class="content">
            <vue-draggable-next :list="ongoing"
            group="items"
            @start="drag = true"
            @end="drag = false"
            item-key="item"
            @change="updateTask"
            class="min over">
            <div class="card" v-for="(item, index) in ongoing" :key="index">
                <updateTask :item="item"></updateTask>
                <deleteTask :item="item"></deleteTask>
                <p class="title">{{ item.task_name}}</p>
                <p class="desc">{{ item.Description }}</p>
                <p class="date"> Due Date: {{ formattedDate(item.due_date) }}</p>
            </div>
            </vue-draggable-next>
        </div>
    </div>
</template>


<script>
import { VueDraggableNext } from 'vue-draggable-next';
import updateTask from './updateTask.vue';
import deleteTask from './deleteTask.vue';
export default {
    name: 'OnGoing',
    props: ['ongoing'],
    components: {
        VueDraggableNext, updateTask, deleteTask
    },
    methods: {
        formattedDate(date) {
            return new Date(date).toLocaleDateString('en-US');
        },
        async updateTask(item) {
            let itemToUpdate;
                if(item.removed){
                    itemToUpdate = item.removed.element;
                } else if(item.added){
                    item.added.element.status_id = 2;
                    itemToUpdate = item.added.element;
                }
               
                this.$root.emitter.emit('updateTask', itemToUpdate);
        }
    }
}
</script>

<style scoped>
.min{
    min-height: 100%;
}
.date{
    text-align: right;
}
.title{
    font-size: 1.3em;
    font-weight: bold;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    color: #254e10;
    margin-bottom: 10px;
}
.desc {
    font-size: 1em;
    font-weight: normal;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    color: white;
    margin-bottom: 10px
}
.content{
    width: 100%;
    height: 90%;
    background-color: #aaf683;
    border-radius: 10px 10px 10px 10px;
}
.over{
    width: 100%;
    height: 90%;
    overflow-y: auto;
    padding: 10px;
    border-radius: 10px 10px 10px 10px;
}
.over::-webkit-scrollbar-track
{
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
	border-radius: 10px;
	background-color: #F5F5F5;
}
.over::-webkit-scrollbar
{
	width: 12px;
	background-color: #F5F5F5;
}

.over::-webkit-scrollbar-thumb
{
	border-radius: 10px;
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
	background-color: #867c7c;
}
.ongoing{
    width: 25%;
    height: 100%;
}
.card{
    width: 90%;
    height: 10%;
    background-color: #63d52a;
    border-radius: 10px;
    margin: 10px auto;
    padding: 10px;
    height: min-content;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    cursor: grab;
}
.inside{
    width: 100%;
    height: 10%;
    color: #ee6055;
    /* background-color: #ee6055; */
    border-radius: 10px 10px 0px 0px;
    display: flex; 
    align-items: center;
    justify-content: center;
}
h1{
    font-size: 1.5em;
    font-weight: bold;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    color: #63d52a;
    margin: 0;
    padding: 0;
    text-align: center;
    width: 100%;
    font-style: italic;
}
hr{
    width: 100%;
    border: 1px solid #63d52a;
    max-width: 30%;
}
</style>