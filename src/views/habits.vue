<template>
    <div class="body-habits">
        <div class="habits">
            <div class="habit" v-for="(task, index) in tasks" :key="index" @click="modalMove(index)">
                <svg class="progress">
                    <circle class="progress-ring__circle" :class="task.complead ? `progress-ring__circle-active` : ``" fill = "transparent" stroke = "#5ED5A8" stroke-width = "4" cx = "62" cy = "62" :r = "radius" :stroke-dashoffset = "task.offset" :stroke-dasharray = "strokearr" />
                    <circle class="progress-ring__circle" fill = "transparent" stroke = "#7fdfba" stroke-width = "1" cx = "62" cy = "62" :r = "radius"/>
                </svg>
                <div class="habit-info" :class="task.complead ? `habit-info-active` : ``">
                    <span class="habit-info__header">{{task.category}}</span>
                    <span  class="habit-info__level">{{task.level}}</span>
                </div>
                 <Modal :task = 'task'  @click.stop @proCirckl = "circleProgress(index)"/>
            </div>
        </div>
    </div>
</template>

<script>

import Modal from "../components/Modal.vue"

import { reactive, ref } from '@vue/reactivity';
import {onMounted} from "vue"

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
         dayWay: 10,
         currentDay: 5,
         click: false,
         offset: 100,
         complead: false
        }, {
         name: "Бог отжиманий",
         level: 2,
         description: "Отжиматься по 4 сотни каждый день",
         category: "Спорт",
         target: 400,
         currentCount: 50,
         dayWay: 5,
         currentDay: 2,
         click: false,
         offset: 0
        },
        {
         name: "Мистер поцелуй пол",
         level: 3,
         description: "Отжиматься по 6 сотен каждый день",
         category: "Спорт",
         target: 600,
         currentCount: 50,
         dayWay: 60,
         currentDay: 22,
         click: false,
         offset: 0
        },
        {
         name: "Разговаривать на английсском",
         level: 2,
         description: "Выучить 400 основных слов",
         category: "Личный рост",
         target: 400,
         currentCount: 50,
         dayWay: 40,
         currentDay: 5,
         click: false,
         offset: 0
        },
        {
         name: "Я слышу тебя",
         level: 1,
         description: "Выучить 900 основных слов",
         category: "Личный рост",
         target: 900,
         currentCount: 50,
         dayWay: 90,
         currentDay: 10,
         click: false,
         offset: 0
        }, ]);

        let pro = ref(0);
        const radius = ref (60);
        const circumference = ref( 2 * Math.PI * radius.value); 
        let offset = ref (circumference.value);
        const strokearr = `${circumference.value} ${circumference.value}`;
        function circleProgress(i){
            if(event.target.checked){
                tasks[i].currentDay++;
            }else{
                tasks[i].currentDay--;
            }
            const currentProgress = ref((100 / tasks[i].dayWay) * tasks[i].currentDay);
            tasks[i].offset = circumference.value - currentProgress.value / 100 * circumference.value;
            if(tasks[i].offset == 0){
                tasks[i].complead = true;
            }else{
                tasks[i].complead = false;
            }
        }
        function modalMove(index){
            if(tasks[index].click === true){
            tasks[index].click = false
         }else{
            tasks.forEach((task) =>{
                task.click = false
            });
            tasks[index].click = true
         }

        }
        onMounted(() => { 
            tasks.forEach((task) =>{
                const currentProgress = ref((100 / task.dayWay) * task.currentDay);
                task.offset = circumference.value - currentProgress.value / 100 * circumference.value;
            })

         })

        return{
            radius,
            tasks,
            offset,
            strokearr,
            circleProgress,
            modalMove
        }
    }
}

</script>

<style lang="scss">
    .progress{
        width: 130px;
        height: 130px !important;
        background-color: transparent !important;
        cursor: pointer;

        &-ring__circle{
            transform-origin: center;
            transform: rotate(-90deg);
            transition: stroke-dashoffset 0.3s;

            &-active{
                fill: rgb(94, 213, 168);
            }
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
        max-width: 300px;
        &-info{
                color: #5ED5A8;
                position: absolute;
                top: 50px;
                left: 10px;
                text-align: center;
                width: 104px;
                cursor: pointer;

                &-active{
                    color: #1b232a;
                    font-weight: bold;
                }
                
            &__header{
                display: block;
                font-size: 15px;
            }
        }
        }

</style>