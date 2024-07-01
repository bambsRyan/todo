<template>
  <div class="updater">
        <Button icon="pi pi-pencil" class="colors" @click="visible = true"/>
        <Dialog v-model:visible="visible" modal header="Update Task" :style="{ width: '25rem' }">
            <div>
                <label for="task_name">Task Name: </label>
                <InputText id="task_name" v-model="item.task_name" autocomplete="off"/>
            </div>
            <div>
                <label for="Description">Description: </label>
                <InputText id="Description" v-model="item.Description" autocomplete="off" placeholder="Description"/>
            </div>
            <div>
                <label for="due_date">Due date: </label>
                <DatePicker id="date" v-model="item.due_date" dateFormat="dd/mm/yy"/>
            </div>
            <template #footer>
                <Button label="Cancel" text severity="secondary" @click="clearFields" autofocus />
                <Button label="Save" outlined severity="secondary" @click="updateTask" autofocus />
            </template>
        </Dialog>
  </div>
</template>

<script>
import  Button  from 'primevue/button';
import Dialog from 'primevue/dialog';
import InputText from 'primevue/inputtext';
import DatePicker from 'primevue/datepicker';
import Select from 'primevue/select';
import 'primeicons/primeicons.css';

export default {
props: ['item'],
data() {
    return {
        visible: false,
        progress: [
                { label: 'To Do', value: 1 },
                { label: 'In Progress', value: 2 },
                { label: 'Done', value: 3 },
                { label: 'Cancelled', value: 4}
            ]

    };
},  
components: {
    Button, 
        Dialog, 
        InputText,
        DatePicker,
        Select
},
methods:{
    updateTask(){
        this.visible = false;
        this.$root.emitter.emit('updateTask', this.item)
    },
    async clearFields(){
            this.task_name = '';
            this.Description = '';
            this.status_id = '';
            this.due_date = new Date();
            this.visible = false;
        }
},
props: ['item'],
}
</script>

<style scoped>
.updater{
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
    right: 0px;
    top: 0px;
}

.colors:hover,
.colors:active {
    background-color: black;
    color: white;
}
div{
    display:flex;
    justify-content: center;
    align-items: center;
}
label{
    margin: 10px;
    width: 40%;
}
#select, #date, input{
    width: 100%;
}
</style>