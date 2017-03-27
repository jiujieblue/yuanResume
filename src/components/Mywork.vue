<template>
  <div class="section">
    <div id="project_box">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <h3>
              <span class="icon-stack"></span>我的作品
              <p></p><!-- 下划线 -->
            </h3>
          </div>
        </div>
        <ul class="project clearfix">
          <li>
            <a href="http://jmdbsh.m.huduso.com/w/page" target="_blank">
              <img class="img-responsive" src="../assets/images/website_template7.jpg">
            </a>
            <p>
              <span>江门市电白商会</span>
            </p>
          </li>
          <li>
            <a href="http://www.cookabuy.com/" target="_blank">
              <img class="img-responsive" src="../assets/images/logo.52daf91.svg">
            </a>
            <p>
              <span>柯咔网</span>
            </p>
          </li>
          <li>
            <a href="https://jiujieblue.github.io/AirWar/" target="_blank">
              <img class="img-responsive" src="../assets/images/hero1.png">
            </a>
            <p>
              <span>飞机大战</span>
            </p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
body{
  background: #F2F2F2;
}
@keyframes fangda{
  0%  { opacity: 1; }
  20% { top:0px; width: 100%; height: 100%;left:0px; box-shadow: 0 0 0 4px rgba(0, 0, 0, 0.8);}
  40% { top:0px; width: 105%; height: 105%; top: -5px; left: -5px; box-shadow: 0 0 0 8px rgba(0, 0, 0, 0.6);}
  60% { top:0px; width: 110%; height: 110%; top: -10px; left: -10px; box-shadow: 0 0 0 12px rgba(0, 0, 0, 0.4);}
  80% { top:0px; width: 115%; height: 115%; top: -15px; left: -15px; box-shadow: 0 0 0 16px rgba(0, 0, 0, 0.2);}
  100% { top:0px; width: 120%; height: 120%; top: -20px; left: -20px; box-shadow: 0 0 0 20px rgba(0, 0, 0, 0);}
}
@keyframes xiangs{
  0% {top: -30px;}
  10% {top: -50px;}
  20% {top: -70px;}
  30% {top: -90px;}
  40% {top: -110px;}
  50% {top: -130px;}
  60% {top: -150px;}
  70% {top: -170px;}
  80% {top: -190px;}
  90% {top: -210px;}
  100% {top: -230px;}
}
.col-md-12{
  >h3{
    display: inline-block;
    >p{
      margin-top: 5px;
      border-bottom: 2px solid rgba(0, 0, 0, 0.8);
    }
  }
}
.icon-stack{
  margin-right: 5px;
}
#project_box{
  padding:3.2em 0;
  background: #F2F2F2;
}
.project{
  margin: 20px 0;
  >li{
    float: left;
   position: relative;
   margin-right: 40px;
   &:first-child{
    &{
      >a:hover:after{
        /*display: none;*/
        animation: fangda 1s 1;
      }
    }
    >a{
      position: relative;
      &:after{    
        content: '';
        position: absolute;
        box-shadow: 0 0 0 0px #000;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        top: 0;
        left: 0;
      }
      img{
        border-radius: 50%;
      }
    }
   }
   &:nth-child(2){
    >a:hover{
      >img{
        transform: rotateY(360deg);
      }
    }
   }
   &:last-child{
    >a{
      overflow: hidden;
    }
    >a:hover{
      img{
        animation: xiangs .7s 1;
        animation-fill-mode: backwards;
      }
    }
   }
   >p{
    margin: 20px 0;
    text-align: center;
    font-size: 18px;
   }
   >a{
    display: table-cell;
     width: 200px;
     height: 200px;
  vertical-align: middle;
    >img{
       max-width: 100%;
       max-height: 100%;
       transition: all 0.5s linear;
       position: relative;
     }
   }
  }
}
</style>
