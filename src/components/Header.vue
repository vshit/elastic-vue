<template>
    <header>
        <div>
            <router-link class="logo" to="/"> 
                <span>L</span>
                <span>ogo</span>
            </router-link>
        </div>
        <div class="nav">
            <router-link to="/">
                <span>People</span>
            </router-link>
            <router-link to="/shows">
                <span>Shows</span>
            </router-link>
        </div>
    </header>
</template>

<style lang="css">
.logo {
    display: flex;
    align-items: center;
}
.logo:first-child {
        font-size: 24px;
        font-weight: 600;
        
    }
    header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px 0;
    }
        header:last-child {
            font-size: 20px;
            font-weight: 600;

        }
        .nav{
            display: flex;
            align-items: center;
        }
            a {
                margin-left: 10px;
                text-decoration: none;
            }
        
    

</style>