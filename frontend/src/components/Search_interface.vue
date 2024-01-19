<template>
    <div id="main">
        <div class="logobar">

            <div class="logo">Search</div>
        </div>
        <div id="page_main">
            <div id="search-win">
                <input type="text" class="search_input" v-model.trim="search_data" placeholder="search"
                    @keyup.enter="fn_1" />
                <a href="#" class="search_button" @click="fn_1">
                    <IconPark style="padding-bottom: 1px;" type="search" theme="outline" size="16" fill="#ffffff" />
                </a>
            </div>
            <div class="Main_interface">
                <span class="Book_interface" v-for="item in visibleBooks" :key="item.id">
                    <span class="Book_img"></span>
                    <a href="#" class="Book_name">{{ item.name }}</a>
                </span>
            </div>
            <div class="book_num_total">
                <div class="page_down">
                    <a href="#" @click="page_up">
                        <IconPark style="padding-right: 10px;" type="double-left" theme="outline" size="16"
                            fill="#ffffff" />
                    </a>
                </div>
                <div>
                    第{{ this.currentPage }}页-
                </div>
                总计: {{ book_num_total }} 页
                <div class="page_up">
                    <a href="#" @click="page_down">
                        <IconPark style="padding-left: 10px;" type="double-right" theme="outline" size="16"
                            fill="#ffffff" />
                    </a>
                </div>
            </div>
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
    created() {
        this.book_num_total_fn();
    },
    data() {
        return {
            search_data: " ",
            itemsPerPage: 3, //一页显示几个
            currentPage: 1, //第几页
            books_data: [
                { id: 1, 'name': '001', '作者': 'user-1' },
                { id: 1, 'name': '001', '作者': 'user-1' },
                { id: 1, 'name': '001', '作者': 'user-1' },
                { id: 1, 'name': '001', '作者': 'user-1' },
                { id: 1, 'name': '001', '作者': 'user-1' },
                { id: 1, 'name': '001', '作者': 'user-1' },
                { id: 1, 'name': '001', '作者': 'user-1' },
                { id: 1, 'name': '001', '作者': 'user-1' },
                { id: 1, 'name': '001', '作者': 'user-1' },
                { id: 1, 'name': '001', '作者': 'user-1' },
                { id: 1, 'name': '001', '作者': 'user-1' },
            ],
            book_num_total: "",
        };
    },
    methods: {
        fn_1() {
            this.search()
            this.book_num_total_fn()
        },
        search() {
            this.search_data = ""
        },
        book_num_total_fn() {
            this.book_num_total = Math.ceil(this.books_data.length / this.itemsPerPage, 0);
        },
        changePage() {
            this.currentPage = 2
        },
        page_up() {
            if (this.currentPage == 1) {
                alert("不能在往前了")
            } else {
                --this.currentPage
            }
        },
        page_down() {
            if (this.currentPage == this.book_num_total) {
                alert("不能在往后了")
            } else {
                ++this.currentPage
            }
        }
    },
    computed: {
        visibleBooks() {
            const startIndex = Math.max((this.currentPage - 1) * this.itemsPerPage, 0);
            const endIndex = startIndex + this.itemsPerPage;
            return this.books_data.slice(startIndex, endIndex);
        },
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

#search-win {
    display: flex;
    position: relative;
    background-color: #353541;
    padding-left: 20px;
    border-radius: 20px;
    min-width: 50%;
    height: 25px;
}

#search-win .search_input {
    background-color: #353541;
    border: none;
    outline: none;
    color: white;
    flex-grow: 1;
}

.search_button {
    position: relative;
    right: 5px;
    top: 1px;
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

.Book_interface {
    display: flex;
    flex-direction: column;
}

.Book_name {
    color: white;
    text-align: center;
    font-size: small;
    text-decoration: none;
}

.Book_img {
    background-color: white;
    border-radius: 20px;
    width: 90px;
    height: 120px;
    margin: 20px;
}

.book_num_total {
    display: flex;
    color: white;
    padding-top: 15px;
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


::-webkit-scrollbar {
    width: 10px;
    /* 设置滚动条的宽度 */
}

/* 设置滚动条的轨道背景，可以是透明的 */
::-webkit-scrollbar-track {
    background-color: transparent;
    /* 轨道背景颜色 */
}

/* 设置滚动条滑块（拖动条）的颜色 */
::-webkit-scrollbar-thumb {
    background-color: rgba(255, 255, 255, 0.5);
    /* 滑块颜色，可以是透明的 */
    border-radius: 5px;
    /* 圆角 */
}

/* 当鼠标悬停在滑块上时的样式 */
::-webkit-scrollbar-thumb:hover {
    background-color: rgba(255, 255, 255, 0.7);
    /* 鼠标悬停时的颜色 */
}

/* 设置滚动条角（在某些情况下出现的）的颜色 */
::-webkit-scrollbar-corner {
    background-color: transparent;
    /* 角的颜色 */
}
</style>