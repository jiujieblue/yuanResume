<template>
  <div class="section">
    <div id="skills">
      <div class="container">
        <div class="row">
          <div class="col-md-2 col-md-offset-1">
            <h3>
              <span class="icon-hammer"></span>专业技能
              <p></p>
            </h3>
          </div>
          <div class="col-md-9 text-center canvas_box">
            <div class="row">
              <div class="col-md-4 col-sm-6 col-xs-6">
                <canvas id="React" width="150" height="150" data-toggle="modal" data-target="#AN"></canvas>
                <br/><span>React</span>
              </div>
              <div class="col-md-4 col-sm-6 col-xs-6">
                <canvas id="Vue" width="150" height="150" data-toggle="modal" data-target="#AN"></canvas>
                <br/><span>Vue</span>
              </div>
              <div class="col-md-4 col-sm-6 col-xs-6">
                <canvas id="Javascript" width="150" height="150" data-toggle="modal" data-target="#JS"></canvas>
                <br/><span>Javascript</span>
              </div>
              <div class="col-md-4 col-sm-6 col-xs-6">
                <canvas id="Bootstrap" width="150" height="150" data-toggle="modal" data-target="#BT"></canvas>
                <br/><span>Bootstrap</span>
              </div>
              <div class="col-md-4 col-sm-6 col-xs-6">
                <canvas id="HTML_CSS" width="150" height="150" data-toggle="modal" data-target="#HT_CSS"></canvas>
                <br/><span>HTML_CSS</span>
              </div>
              <div class="col-md-4 col-sm-6 col-xs-6">
                <canvas id="Photoshop" width="150" height="150" data-toggle="modal" data-target="#PH"></canvas>
                <br/><span>Photoshop</span>
              </div>
              <div class="col-md-4 col-sm-6 col-xs-6">
                <canvas id="JQuery" width="150" height="150" data-toggle="modal" data-target="#JQ"></canvas>
                <br/><span>JQuery</span>
              </div>
              <div class="col-md-4 col-sm-6 col-xs-6">
                <canvas id="Zepto" width="150" height="150" data-toggle="modal" data-target="#JQ"></canvas>
                <br/><span>Zepto</span>
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

    }
  },
  mounted () {
    /** 圆的百分比 **/
    var obj={
      React: 80,
      Vue: 85,
      Javascript:70,
      Bootstrap:60,
      HTML_CSS:80,
      Photoshop:50,
      JQuery:85,
      Zepto: 85
    };
    var W=Javascript.width;
    var H=Javascript.height;
    /** 绘制圆的函数 **/
    function arc(Id,num1,num2,ctx){//传入id、画num%
      ctx.lineWidth='5';
      ctx.strokeStyle='#fff';
      ctx.beginPath();
      ctx.arc(W/2,H/2,70,-Math.PI/2,(num1/100*360-90)*Math.PI/180);
      ctx.stroke();
      ctx.strokeStyle='#1ABC9C';
      ctx.beginPath();
      ctx.arc(W/2,H/2,70,-Math.PI/2,(num2/100*360-90)*Math.PI/180);
      ctx.stroke();
    }
    var isArc=true;//变量作为判断能否进行绘制圆的动画
    /***   调用周期函数动态绘制圆 ***/
    function arcSet(Id){
      var num=100-obj[Id]; // canvas 空白部分
      var num1= 0,num2=0;
      var ctx=$('#'+Id)[0].getContext('2d');
      var timer = setInterval(function () {
        ctx.clearRect(0, 0, W, H);
        num1++;
        num2++;
        num1 <= num && (num2 = 0);//判断是否可以进行绘制蓝色条 不可以就令其为零
        arc(Id, num1, num2, ctx);
        ctx.font = '30px SimHei';
        ctx.fillStyle = '#fff';
        var wid = ctx.measureText(num2 + '%').width;
        ctx.fillText(num2 + '%', (W - wid) / 2, (H+30)/2)
        if (num1 >= 100) {
          clearInterval(timer);
          timer = null;
        }
      }, 10);
    }

    arcSet('Javascript');
    arcSet('React');
    arcSet('Vue');
    arcSet('Bootstrap');
    arcSet('HTML_CSS');
    arcSet('Photoshop');
    arcSet('JQuery');
    arcSet('Zepto');
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  body{
    background: #2c3e50;
  }
  #skills{
    background: #2c3e50;
    padding:3.2em 0;
    color:#fff;
  }
  #skills .canvas_box .col-md-4{
    margin-bottom: 20px;
  }
</style>
