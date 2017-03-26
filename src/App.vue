 <template>
  <div class="app">
    <div class="app-right">
      <div class="app-right-box">
        <ul class="clearfix">
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
  @import './assets/css/bootstrap.css';
  .app{
    >div.section{
      margin-top: 60px;
      .col-md-2{
        span{
          margin-right: 5px;
        }
      }
     }
    .clearfix:after{
      content:"";
      display:block;
      clear:both;
    }
    &-right{
      position: fixed;
      right: 0;
      left: 0;
      top: 0;
      width: 100%;
       z-index: 100;
      &-box{
        background: rgba(0,0,0,0.8);
        >ul{
          width: 100%;
          padding: 10px 0;
          text-align: center;
          li{
            display: inline-block;
            padding: 0 10px;
            margin-right: 10px;
            cursor: pointer;
            &:last-child{
              margin: 0;
             }
            &:hover i{
              opacity: .65;
            }
            i:before{
              font-size: 35px;
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
