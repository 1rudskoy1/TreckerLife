<template>
    <div class="body-modal">
        <ul class="task-desc">
            <li class="task-desc__fild" :class=" task.currentDay > i ? 'task-desc__fild-check' : ''" v-for="(count, i) in task.dayWay" :key="i"> 
                <span>{{count}}</span> {{task.target}} / {{task.currentCount}} 
                <input type="checkbox" class="task-desc__check" :checked = "task.currentDay > i ? true : false" :disabled = "task.currentDay < i ? true : false"/>
                <div class="fild">
                    <div class="fild__overflow"></div>
                </div>    
            </li>
        </ul>
    </div>
</template>

<script>
export default{
    props: ['task'],

    data(){
        return{

        }
    },
    methods:{
    }

}
</script>

<style lang="scss">
    .body-modal{
        height: 97vh;
        width: 300px;
        position: fixed;
        right: -500px;
        top: 25px;
        background-color: #24303a;
        color: #5ED5A8;
        border: 1px solid #5ED5A8;
        transition: 1s;
        z-index: 10;

        .task-desc{
            width: 95%;
            margin: 0 2.5%;
            &__fild{
                display: flex;
                justify-content: space-around;
                align-items: center;
                font-size: 16px;
                margin: 35px 0;
                list-style-type: none;
                position: relative;
                
                &-check{
                    color: #616d69;
                    text-decoration: line-through;
                }
            
            }
        }
    }
    .task-desc__check:checked ~ .fild > .fild__overflow{
        background-color: #57ffdb;
        width: 100%;
        height: 5px;
    }
    .fild{
        width: 100%;
        height: 5px;
        background-color: #bbc4c1;
        opacity: 0.3;
        position: absolute;
        top: 35px;
    }
</style>