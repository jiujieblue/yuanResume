 <template>
  <div class="app">
    <div class="app-right">
      <div class="app-right-box">
        <ul class="clearfix">
          <li :class="{active : !route}">
            <a href="#">
              <i class="icon-user-tie"></i>
            </a>
            <span>关于个人</span>
          </li>
          <li :class="{active : route == 'Professional'}">
            <a href="#Professional">
              <i class="icon-hammer"></i>
            </a>
            <span>专业技能</span>
          </li>
          <li :class="{active : route == 'Mywork'}">
            <a href="#Mywork">
              <i class="icon-stack"></i>
            </a>
            <span>我的作品</span>
          </li>
          <li :class="{active : route == 'contact'}">
            <a href="#contact">
              <i class="icon-envelop"></i>
            </a>
            <span>联系方式</span>
          </li>
          <!-- <li :class="{active : route == 'Interest'}">
            <a href="#Interest">
              <i class="icon-heart"></i>
              <span>兴趣爱好</span>
            </a>
          </li> -->
        </ul>
      </div>
    </div>
    <transition name="fade">
      <router-view v-show="show"></router-view>
    </transition>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        show: true,
        route: ''
      }
    },
    mounted () {
      $('.app-right-box ul li').hover(
        function(e){
          var $tar = $(e.target)
          if(e.target.nodeName == 'SPAN'){
            return false
          }
          if(e.target.nodeName != 'LI'){
            $tar = $tar.parents('li')
          }
          $tar.children('span').fadeIn(200)
        },
        function(e){
          if(e.target.nodeName == 'SPAN'){
            return false
          }
          var $tar = $(e.target)
          if(e.target.nodeName != 'LI'){
            $tar = $tar.parents('li')
          }
          $tar.children('span').fadeOut()
        }
      )
    },
    methods : {
      _spanShow (e) {
        console.log(e.target)
        var $tar = $(e.target)
        if(e.target.nodeName != 'LI'){
          $tar = $tar.parents('li')
        }
        $tar.children('span').slideDown(200)
      },
      _spanhide (e) {
        var $tar = $(e.target)
        if(e.target.nodeName != 'LI'){
          $tar = $tar.parents('li')
        }
        $tar.children('span').slideUp()

      }
    },
    watch:{
      '$route'(val){
        var urlStr = window.location.href
        var route = urlStr.slice(urlStr.indexOf('#')+2)
        this.route = route
      }
    }
  }
</script>

<style lang="less">
  @import './App.less';
  @import './assets/css/icons.css';
  @import './assets/css/bootstrap.css';
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
    opacity: 0
  }
  .app{
    >div.section{
      margin-top: 58px;
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
            position: relative;
            &:last-child{
              margin: 0;
             }
             >a{
              display: block;
             }
            &:hover i{
              opacity: .65;
            }
            &.active{
              i:before{
                opacity: .65;
              }
            }
            i:before{
              font-size: 35px;
              color: #fff;
            }
            span{
              display: none;
              box-sizing: content-box;
              position: absolute;
              top: 120%;
              left: -35%;
              width: 150%;
              padding: 5px;
              background: rgba(0, 0, 0, 0.8);
              color: #fff;
              font-size: 16px;
            }
          }
        }
      }
    }
  }
</style>
