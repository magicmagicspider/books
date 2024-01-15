<template>
    <div id="main">
        <div class="logobar">

            <div class="logo">Help</div>
        </div>
        <div id="page_main">

        </div>
    </div>
</template>
<script>
import { IconPark } from "@icon-park/vue-next/es/all";
export default {
    name: 'Search_interface',
    components: {
        IconPark: IconPark,
    },
    data() {
        return {

        };
    },
    methods: {

    },
    computed: {

    }
};
</script>
  
<style scoped>
#main {
    flex: 1;
    position: relative;
    height: 100%;
    width: 100%;
    /* 让 #main 填满剩余空间 */
    overflow-y: scroll;
}

#page_main {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: rgb(94, 94, 101);
    border-radius: 20px;
    top: 30px;
    padding: 20px;
    height: auto;
    margin-left: 60px;
    margin-right: 60px;
    min-height: 80%;
    max-height: 80%;
}


.Main_interface {
    display: flex;
    justify-content: space-around;
    flex-basis: 33.33%;
    flex-wrap: wrap;
    height: 100%;
    position: relative;
    margin-top: 20px;
    border-radius: 20px;
    padding: 15px;
    width: 90%;
    background-color: #353541;
    overflow-y: scroll;
}

.logobar {
    position: relative;
    display: flex;
    height: 40px;
    width: auto;
    margin-top: 20px;
    margin-left: 60px;
    margin-right: 60px;
    border-bottom: 3px solid black;
    z-index: 1;
}

.logobar .logo {
    position: relative;
    color: white;
    font-weight: bold;
    font-size: larger;
}
</style>