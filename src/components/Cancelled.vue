<template>
    <div class="pending">
        <div class="inside">
            <hr>
            <h1>Cancelled Task</h1>
            <hr>
        </div>
        <div class="content">
            <div class="card" v-for="(item, index) in cancelled" :key="index">
                <p class="title">{{ item.task_name}}</p>
                <p class="desc">{{ item.Description }}</p>
                <p class="date"> Due Date: {{ formattedDate(item.due_date) }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default{
    name: 'PendingTask',
    props: ['cancelled'],
    methods: {
        formattedDate(date) {
            return new Date(date).toLocaleDateString('en-US');
        
    }
}
}
</script>

<style scoped>
.date{
    text-align: right;
}
.title{
    font-size: 1.3em;
    font-weight: bold;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    color: #8b791f;
    margin-bottom: 10px;
}
.desc {
    font-size: 1em;
    font-weight: normal;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    color: white;
    margin-bottom: 10px
}
div > p {
    font-size: 0.8  em;
    font-weight: bold;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    color: white;   
}
.card{
    width: 90%;
    height: 10%;
    background-color: #FFDC2E;
    border-radius: 10px;
    margin: 10px auto;
    padding: 10px;
    height: min-content;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
}
.pending{
    width: 25%;
    height: 100%;
}
.inside{
    width: 100%;
    height: 10%;
    /* background-color: #ee6055; */
    border-radius: 10px 10px 0px 0px;
    display: flex; 
    align-items: center;
    justify-content: center;
}
hr{
    width: 100%;
    border: 1px solid #FFDC2E;
    max-width: 30%;
}
h1{
    font-size: 1.5em;
    font-weight: bold;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    color: #FFDC2E;
    margin: 0;
    padding: 0;
    text-align: center;
    width: 100%;
    font-style: italic;
}
.content{
    width: 100%;
    height: 90%;
    background-color: #ffEA76;
    border-radius: 10px 10px 10px 10px;
    padding: 10px;
}
</style>