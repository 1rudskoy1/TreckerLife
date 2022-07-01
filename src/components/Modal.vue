<template>
    <div class="body-modal" :class = "task.click ? `body-modal_active` : ''">
    <h2 class="modal-header">{{task.name}}</h2>
        <ul class="task-desc">
            <li class="task-desc__fild" :class=" task.currentDay > i ? 'task-desc__fild-check' : ''" v-for="(count, i) in task.dayWay" :key="i"> 
                <span>{{count}}</span><div class="task-desc__target">{{task.target}} / {{task.currentCount}}<span class="material-icons"  @click="popupIsOpen = !popupIsOpen " v-if = "task.currentDay == i ? true : false">add</span></div> 
                
                <input @change="change" type="checkbox" class="task-desc__check" :checked = "task.currentDay > i ? true : false" :disabled = "task.currentDay < i ? true : false"/>
                <div class="fild">
                    <div class="fild__overflow"></div>
                </div>    
            </li>
        </ul>
        <PopupAdd :isOpen="popupIsOpen"> </PopupAdd>    
    </div>
</template>

<script>
import PopupAdd from "./PopupAdd.vue"
export default{
    props: ['task'],
    components:{
        PopupAdd
    },
    data(){
        return{
            popupIsOpen: false,
            open: `right: 15px`,
        }
    },
    methods:{
        change(){
            this.$emit("proCirckl")
        }
    }

}
</script>

<style lang="scss">
    .body-modal{
        height: 97vh;
        width: 300px;
        position: fixed;
        right: -550px;
        top: 25px;
        color: #5ED5A8;
        background-color: #1B232A;
        border: 1px solid #5ED5A8;
        transition: 1s;
        z-index: 10;
        display: flex;
        flex-direction: column;
        align-items: center;

        &_active{
            right: 15px;
        }

        .task-desc{
            width: 95%;
            margin: 0 2.5%;

                &__check{
                    cursor: pointer;
                }

            &__target{
                display: flex;
                justify-content: space-around;
                width: 100px;

                & span{
                    cursor: pointer;
                }
            }
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
    .modal-header{
        font-size: 23px;
        margin-top: 15px;
        max-width: 250px;
        text-align: center;
    }
</style>