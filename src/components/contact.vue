<template>
  <div class="section">
    <div id="contact">
        <div class="container">
            <div class="row">
                <div class="col-md-12 col-sm-12 contact-top">
                    <h3>
                        <span class="glyphicon glyphicon-send"></span>请联系我
                        <p></p>
                    </h3>
                </div>
                <div class="col-md-6 col-sm-8 col-xs-8">
                    <h4>邮箱:</h4>
                    <p>yuanbizhi_zmm@163.com <br/>
                    314763667@qq.com</p><br/>
                    <h4>地址:</h4>
                    <p>广州越秀区豆腐寮小区42号</p><br/>
                    <h4>电话:</h4>
                    <p>15521133168<br/>
                        18826421373</p>
                </div>
                <div class="col-md-3 col-sm-4 col-xs-4">
                    <div class="row commenity">
                        <div class="col-md-12"><h4>社区账号:</h4></div>
                        <div class="col-md-3 col-sm-4 col-xs-6">
                            <a href="https://www.zhihu.com/people/76ca89032119c4023ec2e49d8cf9e644" target="_blanck">
                                <img class="img-responsive" src="../assets/images/zhihu.png" alt="zhihu"/>
                            </a>
                        </div>
                        <div class="col-md-3 col-sm-1 col-xs-2">
                        </div>
                        <div class="col-md-3 col-sm-1 col-xs-2"></div>
                    </div>
          <div class='row'>
            <div class='col-md-5 col-sm-5 col-xs-6 modal-img'>
                <img @mouseover="_over" @mouseout="_out" class="img-responsive" src="../assets/images/weixin.png" alt="weixin" />
                <div>
                    <img src="../assets/images/weixin.png"/>
                </div>
            </div>
            <div class='col-md-5 col-sm-5 col-xs-6 modal-img'>
                <img @mouseover="_over" @mouseout="_out" class="img-responsive" src="../assets/images/QQ.jpg" alt="QQ"/>
                <div>
                    <img src="../assets/images/QQ.jpg"/>
                </div>
            </div>
          </div>
                </div>
            </div>
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
  },
  methods: {
    _over (e) {
        $(e.target).next().css({display: 'block'})
    },
    _out (e) {
        $(e.target).next().css({display: 'none'})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
body{
}
.modal-img{
    position: relative;
    div{
        display: none;
        width: 200px;
        position: absolute;
        top: 100%;
        left: 0;
        z-index: 100;
        img{
            width: 100%;
        }
    }
}
.contact-top{
  margin-bottom: 20px;
}
#contact{
    padding:3.2em 0;
    background: #2c3e50;
    color:#fff;
}
#contact h4{
    margin-bottom: 0.5em;
}
#contact p{
    font-weight:normal;
}
#contact .commenity img{
    border-radius: 50%;
}
#contact .commenity{
  margin-bottom:20px;
}
#contact .col-md-3 .col-md-12{
    margin-bottom: 0.3em;
}
</style>
