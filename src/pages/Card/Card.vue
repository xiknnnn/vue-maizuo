<template>
    <div id="cards">
        <div class="cards-header">
            <router-link to="/card/maizuoka"><div  class="router-link-exact-active router-exact-active">卖座卡</div></router-link>
            <router-link to="/card/dianzika"><div>电子卖座卡</div></router-link>
        </div>
        <router-view></router-view>
    </div>
</template>
<script>
export default {
    name: "cards",
    data: () => ({

    })
}
</script>
<style lang="less" scoped>
	@import "../../assets/z.less";
    #cards {
        .pos(a);
        .t(50);
        .l(0);
        .r(0);
        .b(0);
        .pl(15);
        .pr(15);
        background-color: #f9f9f9;
        .cards-header{
            .flex_a();
            .fs(16);
            width: 100%;
            .h(46);
            border-bottom: solid #fe6e00 1px;
            a{
                .db;
                height: 100%;
                width: 50%;
                .lh(46);
                .tc;
                border-bottom: solid transparent 3px;
                &.router-link-exact-active{
                    border-bottom: solid #fe6e00 3px;
                    color:#fe6e00;
                }

            }
        }
    }
</style>
