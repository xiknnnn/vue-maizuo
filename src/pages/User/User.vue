<template>
    <div id="users">
        <form method="post">
            <div class="input-container">
                <input ref = 'getfoucs' type="text" name="" value="" placeholder='输入手机号/邮箱'>
                <div class="input-border"></div>
            </div>
            <div class="input-container">
                <input type="text" name="" value="" placeholder='输入密码/验证码'>
                <div class="input-border"></div>
            </div>
            <div class="btn">
                <input type="button" value="登陆">
            </div>
        </form>
    </div>
</template>
<script>
export default {
    name: "users",
    data: () => ({

    }),
    mounted() {
      //do something after mounting vue instance
      this.$refs.getfoucs.focus();
    }
}
</script>
<style lang="less" scoped>
	@import "../../assets/z.less";
html body{
    .font-fm();
}
    #users{
        .pos(f);
        .t(50);
        .b(0);
        .l(0);
        .r(0);
        background-color: #f6f6f6;
        form{
            .pl(30);
            .pr(30);
            .input-container {
                .pos(r);
                .h(34);
                .mt(30);
                /*修改占位符颜色*/
                ::-webkit-input-placeholder { /* WebKit browsers */
                color: #999;
                }
                :-moz-placeholder { /* Mozilla Firefox 4 to 18 */
                color: #999;
                }
                ::-moz-placeholder { /* Mozilla Firefox 19+ */
                color: #999;
                }
                :-ms-input-placeholder { /* Internet Explorer 10+ */
                color: #999;
                }
                input{
                    width: 100%;
                    height: 100%;
                    .fs(14);
                    .pt(6);
                    .pb(6);
                    .pl(12);
                    .pr(12);
                    font-family: "微软雅黑", "\5B8B\4F53";
                }
                .input-border{
                    width: 100%;
                    height: 40%;
                    border: 1px solid #ccc;
                    border-top: 0 none;
                    .pos(a);
                    .t(25)
                }
            }
            .btn{
                .mt(50);
                input{
                    .db();
                    .w(163);
                    .pt(8);
                    .pb(8);
                    .pl(12);
                    .pr(12);
                    .fs(15);
                    font-family: "微软雅黑", "\5B8B\4F53";
                    background-color: #fe8233;
                    .brs(36);
                    color: #fff;
                    .bc();
                    outline: none;
                }
            }
        }
    }
</style>
