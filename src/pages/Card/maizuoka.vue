<template>
    <div id="maizuoka">
        <form method="post">
            <div class="input-container">
                <label for="">卡号：</label><input ref = 'getfoucs' type="text" name="" value="" placeholder='请输入卡号'>
                <div class="input-border"></div>
            </div>
            <div class="input-container">
                <label for="">密码：</label><input type="text" name="" value="" placeholder='请输入密码'>
                <div class="input-border"></div>
            </div>
            <div class="btn">
                <input type="button" value="查询">
            </div>
        </form>
    </div>
</template>
<script>
export default {
    name: "maizuoka",
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
    #maizuoka{
        background-color: ##fcfcfc;
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
                label{
                    height: 100%;
                    .fs(14);
                    .pt(6);
                    .pb(6);
                    .pl(12);
                    .pr(12);
                    vertical-align: middle;
                }
                input{
                    // width: 100%;
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
