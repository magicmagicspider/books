<template>
    <div class="box">
        <div class="login-container">
            <h2>Login</h2>
            <form>
                <div class="form-group">
                    <label for="username">Username:</label>
                    <input type="text" id="username" name="username" required>
                </div>
                <div class="form-group">
                    <label for="password">Password:</label>
                    <input autocomplete='off' type="password" id="password" name="password" required >
                </div>
                <div class="form-group">
                    <button type="submit" @click="goto">Login</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
    created () {
        console.log(this.$store.state.count);
    },
    computed: {
        ...mapState(['count','test'])
        
    }
}
</script>

<!-- scoped 隔绝 -->
<style scoped>
.box {
    font-family: Arial, sans-serif;
    /* background-color: #f4f4f4; */
    background: url('../assets/login.PNG');
    background-size: cover;
    background-position: center;
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100vw;
}


.login-container {
    background-color: rgba(73, 70, 70, 0.549);
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    width: 300px;
    text-align: center;
}

.login-container h2 {
    color: #ccc5c5;
}

.form-group {
    /* 用于设置元素的下外边距,外边距是元素与其相邻元素之间的间距,通过添加底部外边距，我们为这些元素之间添加了一些垂直间距，使得界面看起来更加整洁和易读 */
    margin-bottom: 20px;
}

.form-group label {
    /* 这个规则应用到表单标签的 label 元素。通过 display: block;，label 元素被设置为块级元素，确保它会独占一行，且下方有一些额外的垂直间距（margin-bottom: 8px;）。这样设置通常用于垂直排列表单标签，使其更清晰易读。 */
    display: block;
    margin-bottom: 8px;
    /* 加粗 */
    font-weight: bold;
}

.form-group input {
    width: 100%;
    padding: 8px;
    box-sizing: border-box;
    border: 1px solid #ccc;
    border-radius: 4px;
}

.form-group button {
    background-color: #4caf50;
    color: #fff;
    padding: 10px 15px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}
</style>