<template>
    <div class="nav navbar">
        <ul class="link">
            <router-link to="/account">
                <img src="../assets/ava.png" alt="" width="75" height="60">
            </router-link>
            <router-link to="/">Habits</router-link>
        </ul>
    </div>
</template>

<style lang="scss" scoped>

    .nav{
        background: #24303a;
        box-shadow: -4px 14px 8px -4px rgba(7, 12, 16, 0.2);
        margin-top: 25px;
        height: 85px;
        
        .link{
            display: flex;
            margin: 0;
            align-items: center;


            a:not(:first-child){
                font-weight: 700;
                font-size: 18px;
                text-decoration: none;
                letter-spacing: 0.0264em;
                color: #5ED5A8;
                margin-left: 40px;
                border-bottom: 3px solid transparent;

                &:hover{
                    border-bottom: 3px solid #5ED5A8;
                }
            }
        }

    }

</style>