<template>
    <div class="body-modal">
        <ul class="task-desc">
            <li class="task-desc__fild">Отжимись <input type="checkbox" class="task-desc__check"/></li>
            <li class="task-desc__fild">Отжимись <input type="checkbox" class="task-desc__check"/></li>
            <li class="task-desc__fild">Отжимись <input type="checkbox" class="task-desc__check"/></li>
            <li class="task-desc__fild">Отжимись <input type="checkbox" class="task-desc__check"/></li>
            <li class="task-desc__fild">Отжимись <input type="checkbox" class="task-desc__check"/></li>
            <li class="task-desc__fild">Отжимись <input type="checkbox" class="task-desc__check"/></li>
            <li class="task-desc__fild">Отжимись <input type="checkbox" class="task-desc__check"/></li>
        </ul>
    </div>
</template>

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

        .task-desc{
            width: 95%;
            margin: 0 2.5%;
            &__fild{
                display: flex;
                justify-content: space-around;
                align-items: center;
                font-size: 16px;
                margin: 25px 0;
                list-style-type: none;
            
            }
        }
    }

</style>