<template>
    <div class="nav">
        <ul class="link">
            <router-link to="/account">Account img</router-link>
            <router-link to="/">Habits</router-link>
        </ul>
    </div>
</template>

<style lang="scss" scoped>

    .nav{
        width: 100%;
        height: 50px;
        box-shadow: -4px 14px 8px -4px rgba(7, 12, 16, 0.2);
        
        .link{
            display: flex;

            a{
                font-weight: 700;
                font-size: 18px;
                text-decoration: none;
                letter-spacing: 0.0264em;

                color: #FFFFFF;
                margin-left: 30px;
            }
        }

    }

</style>