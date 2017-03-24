<template>
  <div class="app">
    <div class="app-right">
      <div class="app-right-box">
        <ul>
          <li>
            <i class="icon-user-tie"></i>
            <span>关于个人</span>
          </li>
          <li>
            <i class="icon-hammer"></i>
            <span>专业技能</span>
          </li>
          <li>
            <i class="icon-stack"></i>
            <span>我的作品</span>
          </li>
          <li>
            <i class="icon-envelop"></i>
            <span>联系方式</span>
          </li>
          <li>
            <i class="icon-heart"></i>
            <span>兴趣爱好</span>
          </li>
        </ul>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  // name: 'app'
}
</script>

<style lang="less">
  @import './App.less';
  @import './assets/css/icons.css';
  .app{
    &-right{
      display: table;
      position: fixed;
      right: 0;
      top: 0;
      height: 100%;
      width: 50px;
      &-box{
        display: table-cell;
        vertical-align: middle;
        background: rgba(0,0,0,0.8);
        position: relative;
        left: 200px;
        >ul{
          width: 100%;
          text-align: center;
          li{
            margin-bottom: 40px;
            cursor: pointer;
            &:hover i{
              opacity: .65;
            }
            i:before{
              font-size: 30px;
              color: #fff;
            }
            span{
              display: none;
            }
          }
        }
      }
    }
  }
</style>
