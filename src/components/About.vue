<template>
  <div class="section">
    <div class="intro" id="about">
      <div class="container">
        <div class="row">
          <div class="col-md-2 col-md-offset-1">
            <h3>
              <span class="glyphicon glyphicon-user"></span>关于个人
              <p></p>
            </h3>
          </div>
          <div class="col-md-6">
            本人有两年web前端编程经验，熟悉前端大部分热门框架（Vue，React，Jquery等），本人优点注重团队精神，在工作中会主动解决问题，责任心强，性格开朗，外向，广交益友，善于沟通。
          </div>
        </div>
      </div>
    </div>
    <div id="resume">
      <div class="container">
        <div class="row">
          <div class="col-md-2 col-md-offset-1 col-sm-12">
            <h3>教育背景</h3>
          </div>
          <div class="col-md-6 col-sm-8">
            <h4>水利工程专业</h4>
            <p>广东水利电力职业技术学院</p>
            <i>三年课程</i>
          </div>
          <div class="col-md-3 col-sm-4">
            2016年07月 毕业
          </div>
        </div>
        <div class="row">
          <div class="col-md-2 col-md-offset-1 col-sm-12">
            <h3>工作经历</h3>
          </div>
          <div class="col-md-6 col-sm-8">
            <h4>前端工程师</h4>
            <p>广州柯咔网络科技有限公司</p>
          </div>
          <div class="col-md-3 col-sm-4">
            2016年-8月--2017年4月
          </div>
          <br/><br/><br/><br/>
          <div class="col-md-6 col-md-offset-3 col-sm-8">
            <h4>前端工程师</h4>
            <p>湛江捷讯网络科技有限公司</p>
          </div>
          <div class="col-md-3 col-sm-4">
            2013年6月--2014年9月<br>
            ~~ <br>
            2014年6月--2015年9月
          </div>
          <br/><br/><br/><br/>
          <div class="col-md-6 col-md-offset-3 col-sm-8">
            <h4>学校官网维护</h4>
            <p>广东水利电力职业技术学院</p>
          </div>
          <div class="col-md-3 col-sm-4">
            2013年11月--2015年9月
          </div>
          <br/><br/><br/><br/>
          <div class="col-md-6 col-md-offset-3 col-sm-8">
            <h4>水利工程监理员</h4>
            <p>广东西江工程咨询有限公司</p>
          </div>
          <div class="col-md-3 col-sm-4">
            2015年9月--2016年3月
          </div>
        </div>
        <div class="row">
          <div class="col-md-2 col-md-offset-1 col-sm-12">
            <h3>个人奖项</h3>
          </div>
          <div class="col-md-6 col-sm-8">
            <h4>优秀学生干部</h4>
            <p>2013学年工作表现突出</p>
            <p>2015学年工作表现突出</p>
          </div>
          <div class="col-md-3 col-sm-4">
            2013年度、2015年度
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
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
  #about{
    background: #2c3e50;
    color:#eee;
    padding:3.2em 0;
  }


  #resume{
    background:#F2F2F2;
  }
  #resume .row{
    padding:3.2em 0;
    border-bottom: 1px solid #ccc;
  }
  #resume .row h4{
    color:#2c3e50;
    font-weight: 700;
    padding-bottom: 0.5em;
  }
  #resume .row:last-child{
    border: none;
  }
</style>
