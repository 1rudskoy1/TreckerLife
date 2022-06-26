<template>
    <div class="body-habits">
        <div class="habits">
            <div class="habit" v-for="(task, index) in tasks" :key="index" :tabindex="index" >
                <svg class="progress">
                    <circle class="progress-ring__circle" fill = "transparent" stroke = "#5ED5A8" stroke-width = "4" cx = "60" cy = "60" :r = "radius" :stroke-dashoffset = "offset" :stroke-dasharray = "strokearr" />
                    <circle class="progress-ring__circle" fill = "transparent" stroke = "#7fdfba" stroke-width = "1" cx = "60" cy = "60" :r = "radius"/>
                </svg>
                <div class="habit-info">
                    <span class="habit-info__header">{{task.category}}</span>
                    <span  class="habit-info__level">{{task.level}}</span>
                </div>
                 <Modal :task = 'task'/>
            </div>
        </div>
    </div>
</template>

<script>

import Modal from "../components/Modal.vue"

import { reactive, ref } from '@vue/reactivity';

export default {
    components:{
        Modal
    },
    setup(){
        const tasks = reactive([{
         name: "Развить выносливость",
         level: 1,
         description: "Отжиматься по три сотни каждый день",
         category: "Спорт",
         target: 300,
         currentCount: 50,
         dayWay: 60,
         currentDay: 5
        }, {
         name: "Развить выносливость",
         level: 2,
         description: "Отжиматься по 4 сотни каждый день",
         category: "Спорт",
         target: 400,
         currentCount: 50,
         dayWay: 60,
         currentDay: 2
        },
        {
         name: "Развить выносливость",
         level: 3,
         description: "Отжиматься по 6 сотен каждый день",
         category: "Спорт",
         target: 600,
         currentCount: 50,
         dayWay: 60,
         currentDay: 22
        },
        {
         name: "Разговаривать на английсском",
         level: 2,
         description: "Выучить 400 основных слов",
         category: "Личный рост",
         target: 400,
         currentCount: 50,
         dayWay: 40,
         currentDay: 5
        },
        {
         name: "Разговаривать на английсском",
         level: 1,
         description: "Выучить 900 основных слов",
         category: "Личный рост",
         target: 900,
         currentCount: 50,
         dayWay: 90,
         currentDay: 10
        },
        ]);
        let pro = ref(0);
        const radius = ref (60);
        const circumference = ref( 2 * Math.PI * radius.value); 
        let offset = ref (circumference.value);
        const strokearr = `${circumference.value} ${circumference.value}`;
        function circleProgress(procent){
            pro.value = pro.value + procent;
            offset.value = circumference.value - pro.value / 100 * circumference.value;
        }

        return{
            radius,
            tasks,
            offset,
            strokearr,
             circleProgress
        }
    }
}
</script>

<style lang="scss">
    .progress{
        width: 130px;
        height: 130px !important;
        background-color: transparent !important;

        &-ring__circle{
            transform-origin: center;
            transform: rotate(-90deg);
            transition: stroke-dashoffset 0.3s;
        }
    }
    .body-habits{
        min-height: 70vh;
        display: flex;
        align-items: flex-end;
    }
    .habits{
        display: flex;
        width: 100%;
        justify-content: space-around;
    }
    .habit{
        position: relative;
        cursor: pointer;
        max-width: 300px;
        &-info{
                color: #5ED5A8;
                position: absolute;
                top: 50px;
                left: 10px;
                text-align: center;
                width: 104px;
                
            &__header{
                display: block;
                font-size: 15px;
            }
        }
        }
        .red{
            color:blue;
        }
        .habit:focus > .body-modal{
            right: 15px;
        }

</style>