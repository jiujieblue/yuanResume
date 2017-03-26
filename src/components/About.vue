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
            我是一位应届毕业生，性格活泼，外向，善于与人沟通，勤奋好学，在校期间担任了三年的班长职务，对于管理颇有心得；由于对web前端知识有浓厚的兴趣，大学自学了WEB前端相关的技能，有幸得以进入学校的web前端协会，对技术的进一步的加强；毕业后想挑战web前端的有关工作，就报名达内培训班，提升相关的技能。
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
            <i>三年的课程</i>
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
            <h4>水利工程监理员</h4>
            <p>广东西江工程咨询有限公司</p>
          </div>
          <div class="col-md-3 col-sm-4">
            2015年9月--2016年3月
          </div>
          <br/><br/><br/><br/>
          <div class="col-md-6 col-md-offset-3 col-sm-8">
            <h4>学校官网维护</h4>
            <p>广东水利电力职业技术学院</p>
          </div>
          <div class="col-md-3 col-sm-4">
            2013年11月--2015年9月
          </div>
        </div>
        <div class="row">
          <div class="col-md-2 col-md-offset-1 col-sm-12">
            <h3>个人奖项</h3>
          </div>
          <div class="col-md-6 col-sm-8">
            <h4>优秀学生干部</h4>
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
