<template>
    <div class="box">
        <div class="sidebar">
            <ul class="sidebar-ul">
                <li class="logo">
                    <RouterLink to="/home">{{appVersion}}</RouterLink>
                </li>
                <li>
                    <IconPark type="document-folder" theme="outline" size="20" fill="#999494" class="IconPark" />
                    <RouterLink to="/Bookshelf" :class="{ 'liActive': isLiActive  }"
                        @mouseover="SetisLiActive($event)" @mouseleave="resetAllButtons">书架</RouterLink>
                </li>
                <li>
                    <IconPark type="search" theme="outline" size="20" fill="#999494" class="IconPark" />
                    <RouterLink to="/Search" :class="{ 'liActive': isLiActive  }"
                        @mouseover="SetisLiActive($event)" @mouseleave="resetAllButtons">搜索</RouterLink>
                </li>
                <li>
                    <IconPark type="link-cloud" theme="outline" size="20" fill="#999494" class="IconPark" />
                    <RouterLink to="/UPload" :class="{ 'liActive': isLiActive  }"
                        @mouseover="SetisLiActive($event)" @mouseleave="resetAllButtons">上传</RouterLink>
                </li>
                <li>
                    <IconPark type="help" theme="outline" size="20" fill="#999494" class="IconPark" />
                    <RouterLink to="/Help" :class="{ 'liActive': isLiActive}"
                        @mouseover="SetisLiActive($event)" @mouseleave="resetAllButtons">帮助</RouterLink>
                </li>
                <li>
                    <IconPark type="setting-two" theme="outline" size="20" fill="#999494" class="IconPark" />
                    <RouterLink to="#" :class="{ 'liActive': isLiActive, 'Settings_sec_menu_Opened': Settings_sec_menu_Opened }"
                        @mouseover="SetisLiActive($event)" @mouseleave="resetAllButtons" @click="fn_Settings_sec_menu_Opened()" class="Settings_a">设置</RouterLink>
                    <ul class="Settings_sec_menu" :class="{'Settings_sec_menu_Opened': Settings_sec_menu_Opened}">
                        <li>账号设置</li>
                        <li>存储设置</li>
                    </ul>
                </li>
                <li>
                    <IconPark type="logout" theme="outline" size="20" fill="#999494" class="IconPark" />
                    <RouterLink to='#' @click="pop_up" :class="{ 'liActive': isLiActive }"
                        @mouseover="SetisLiActive($event)" @mouseleave="resetAllButtons">登出
                    </RouterLink>
                </li>
            </ul>
        </div>
        <div class="page_main">

            <RouterView></RouterView>

        </div>
        <pop_up_win ref="po"></pop_up_win>
    </div>
</template>

<script>
import { IconPark } from "@icon-park/vue-next/es/all";
import { RouterView } from "vue-router";
import pop_up_win from "../components/pop_up_win.vue"
import { mapState } from "vuex";
export default {
    components: {
        IconPark: IconPark,
        RouterView,
        pop_up_win
    },
    computed: {
        ...mapState(['appVersion'])
    },
    data() {
        return {
            isLiActive: false,   //设置li是否高亮
            Settings_sec_menu_Opened: false,   //设置栏二级菜单栏是否打开
        }
    },
    methods: {
        SetisLiActive(event) {  //添加标签
            this.resetAllButtons();
            const currentButton = event.target;
            currentButton.classList.add('liActive');

        },
        resetAllButtons() {   //清除所有的liActie标签
            const a_data = document.querySelectorAll('a');
            a_data.forEach(i => i.classList.remove('liActive'));
        },
        pop_up() {
            let a = this.$refs.po
            a.show_hide()
        },
        fn_Settings_sec_menu_Opened(){
            this.Settings_sec_menu_Opened = !this.Settings_sec_menu_Opened
        }


    },
};
</script>
  
<style scoped>
.box {
    height: 100vh;
    width: 100vw;
    display: flex;
    background-color: rgb(53, 53, 65);
}

.sidebar {
    display: flex;
    flex-direction: column;
    transition: width 0.5s ease-in-out;
    width: 12%;
    min-width: 12%;

}

.sidebar-ul {
    list-style-type: none;
    background-color: rgb(0, 21, 42);
}

.page_main {
    flex: 1;
}

.sidebar .sidebar-ul {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 0px 10px 0 10px;
    margin: 0px;
}

.sidebar .sidebar-ul a {
    text-decoration: none;
    color: #999494;
}

.sidebar .sidebar-ul li {
    padding: 10px 0px 10px 0px;
    margin: 5px 0px 5px 0px;
    text-align: left;
    overflow: hidden;
    position: relative;

}

.Settings_a::after{
	content: "";
	position: absolute;
	top: 20px;
	right: 26px;
	width: 7px;
	height: 7px;
	border-top: 2px solid #999494;
	border-right: 2px solid #999494;
	transform: rotate(135deg);
    top: 25px;
    transition: all 0.3s ease-in-out; /* 添加过渡效果 */
}

.Settings_a.Settings_sec_menu_Opened:after{
    transform: translate(-50%, -50%) rotate(-45deg); /* 菜单打开后的变化 */
}
.Settings_sec_menu {
    
    max-height: 0;
    overflow: hidden;
    color: #999494;
    transition: max-height 0.3s ease-in-out;
    font-size: 13px;
}
.Settings_sec_menu_Opened {
    max-height: 100%;
}
.liActive {
    color: #fff !important;
}

.IconPark {
    padding: 10px;
    position: relative;
    top: 2px;
}

.logo {
    border-bottom: 3px solid #999494;
}


</style>

