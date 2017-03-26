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
            <span>
              <img class="img-responsive" src="../assets/images/website_template7.jpg">
            </span>
            <div>
              <p>江门市电白商会</p>
              <a href="http://jmdbsh.m.huduso.com/w/page" target="_blank">
                <img class="img-responsive" src="../assets/images/demo-link.png">
              </a>
            </div>
          </li>
          <li>
            <span>
              <img class="img-responsive" src="../assets/images/logo.52daf91.svg">
            </span>
            <div>
              <p>柯咔网</p>
              <a href="http://www.cookabuy.com/" target="_blank">
                <img class="img-responsive" src="../assets/images/demo-link.png">
              </a>
            </div>
          </li>
          <li>
            <span>
              <img class="img-responsive" src="../assets/images/hero1.png">
            </span>
            <div>
              <p>飞机大战</p>
              <a href="#" target="_blank">
                <img class="img-responsive" src="../assets/images/demo-link.png">
              </a>
            </div>
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
   width: 20%;
   >span{
    display: table-cell;
    width: 100%;
    height: 100%;
  vertical-align: center;
    >img{
       width: 100%;
     }
   }
  }
}
.project .work img{
  border-radius: 2em;
}
.project .col-md-3{
  text-align: center;
  position: relative;
  overflow: hidden;
  transition: all 0.5s linear;
}
.project .col-md-3 div a{
  display: inline-block;
  margin-top:105%;
  transition: all 0.5s linear;
}
.project .col-md-3 div p{
  margin-top: -48px;
  font-size: 1.3em;
  color: rgb(30, 9, 93);
  font-weight: 700;
  transition: all 0.5s linear;
}
.project .col-md-3 div{
  border-radius: 2em;
  position: absolute;
  top: 0;left: 0;
  width: 100%;
  height: 100%;
  background: rgba(65, 85, 115, 0.4);
  opacity: 0;
  transition: all 0.5s linear;
}
.project .col-md-3:hover{
  transform: scale(1.1);
}
.project .col-md-3 div:hover{
  opacity: 1;
}
.project .col-md-3 div:hover p{
  margin-top: 34%;
}
.project .col-md-3 div:hover a{
  margin-top: 0;
}
</style>
