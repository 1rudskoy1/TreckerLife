<template>
    <Modal/>
    <div class="body-habits">
        <div class="habits">
            <div class="habit" v-for="(task, index) in tasks" :key="index">
                <svg class="progress">
                    <circle class="progress-ring__circle" fill = "transparent" stroke = "#5ED5A8" stroke-width = "4" cx = "60" cy = "60" :r = "radius" :stroke-dashoffset = "offset" :stroke-dasharray = "strokearr" />
                    <circle class="progress-ring__circle" fill = "transparent" stroke = "#5ED5A8" stroke-width = "1" cx = "60" cy = "60" :r = "radius" />
                </svg>
                <div class="habit-info">
                    <span class="habit-info__header">{{task.category}}</span>
                    <span class="habit-info__level">{{task.level}}</span>
                </div>
            </div>
        </div>
        <button @click.prevent="circleProgress(10)">ткни</button>
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
         dayWay: 60,
         currentDay: 0
        }, {
         name: "Развить выносливость",
         level: 2,
         description: "Отжиматься по 4 сотни каждый день",
         category: "Спорт",
         target: 400,
         dayWay: 60,
         currentDay: 0
        }]);
        let pro = ref(0);
        const radius = ref (52);
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
        width: 120px;
        height: 120px !important;
        background-color: transparent !important;

        &-ring__circle{
            transform-origin: center;
            transform: rotate(-90deg);
            transition: stroke-dashoffset 0.3s;
        }
    }
    .habits{
        display: flex;
    }
    .habit{
        position: relative;
        cursor: pointer;
        max-width: 300px;
        &-info{
                color: #5ED5A8;
                position: absolute;
                top: 40px;
                left: 35px;
                text-align: center;
                
            &__header{
                display: block;
                font-size: 18px;
            }
        }
        }

</style>