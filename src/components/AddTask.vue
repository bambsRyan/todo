<template>
    <div>
        <Button icon="pi pi-plus" label="Add Task" @click="visible = true" />
        <Dialog v-model:visible="visible" modal header="Add Task" :style="{ width: '25rem' }">
            <div>
                <label for="task_name">Task Name: </label>
                <InputText id="task_name" v-model="task_name" autocomplete="off" placeholder="Task 1"/>
            </div>
            <div>
                <label for="Description">Description: </label>
                <InputText id="Description" v-model="Description" autocomplete="off" placeholder="Description"/>
            </div>
            <div>
                <label for="due_date">Due date: </label>
                <DatePicker id="date" v-model="due_date" dvateFormat="dd/mm/yy"/>
            </div>
            <template #footer>
                <Button label="Cancel" text severity="secondary" @click="clearFields" autofocus />
                <Button label="Save" outlined severity="secondary" @click="addTask" autofocus />
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
    components:{
        Button, 
        Dialog, 
        InputText,
        DatePicker,
        Select
    },
    data() {
        return {
            visible: false,
            task_name: '',
            Description: '',
            status_id: 1,
            prog: null,
            due_date: new Date(),
            progress: [
                { label: 'To Do', value: 1 },
                { label: 'In Progress', value: 2 },
                { label: 'Done', value: 3 },
                { label: 'Cancelled', value: 4}
            ]
        };
    },
    methods: {
        async addTask() {
            this.$emit("addTask",{
                task_name: this.task_name,
                Description: this.Description,
                status_id: this.status_id,
                due_date: this.due_date
            });
            this.clearFields();
        },
        async clearFields(){
            this.task_name = '';
            this.Description = '';
            this.status_id = '';
            this.due_date = new Date();
            this.visible = false;   
        }
    },
    watch: {
        prog: {
            handler: function (val) {
                this.status_id = val.value;
            }
        }
    }
};  
</script>

<style scoped>
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