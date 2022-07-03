<template>
    <div class = "Popup" v-if="isOpen">
        <div class="body-popup">
            <h1>Popup</h1>
            <div class="input-group input-group-sm mb-3 Popup-info">
                <input type="text" class="form-control Popup-input" v-model="addValue" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" :placeholder="`Ещё: ` + (progress.target - progress.currentCount)">
                <div class="material-icons Popup-icon" @click="popupEmit">add</div>
            </div>

        </div>
    </div>
</template>

<script>
    export default{
        props: ["isOpen", "progress"],

        data(){
            return{
                addValue: 0,
            }
        },
        methods:{
            popupEmit(){
                this.$emit("progressAdd", this.addValue);
            }
        }
    }
</script>

<style lang="scss">
    .Popup{
        position: fixed;
        background: rgba(16, 25, 26, 0.3);
        top: 300px;
        left: 350px;
        align-items: center;
        width: 573px;
        justify-content: center;
        height: 282px;
    }
    .body-popup{
        width: 90%;
        margin: 0 auto;
        text-align: center;

        & h1{
            margin-top: 65px;
            margin-bottom: 30px;
        }
    }
    .Popup-input{
    }
    .Popup-icon{
        cursor: pointer;
        position: absolute;
        top: 0px;
        right: 0px;
        padding: 3.5px 6px;
        border-left: 1px solid #5ED5A8;
        z-index: 10;

        &:hover{
            color: white;
            background: #5ED5A8;
        }

    }
    .Popup-info{
        position: relative;
    }
</style>