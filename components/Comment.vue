<template>
  <div class>
    <el-card class="box-card comments-wrap">
      <div slot="header" class="clearfix">
        <span>评论区</span>
      </div>
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <div class="inline-style">
          <div>
            <el-form-item label="昵称" prop="full_name">
              <el-input v-model="ruleForm.full_name"></el-input>
            </el-form-item>
          </div>
          <div>
            <el-form-item label="邮箱" prop="email">
              <el-input v-model="ruleForm.email" placeholder="我们将不会公开您的邮箱"></el-input>
            </el-form-item>
          </div>
        </div>
        <div>
          <el-form-item label="留言" prop="content">
            <el-input type="textarea" v-model="ruleForm.content"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
            <el-button @click="resetForm('ruleForm')">重置</el-button>
          </el-form-item>
        </div>
      </el-form>
      <el-divider>评论内容</el-divider>
      <div v-for="item in comments" :key="item.id">
        <div class="demo-type">
          <div class="avatar">
            <el-avatar icon="el-icon-user-solid"></el-avatar>
          </div>
          <div class="nickname">
            <div>{{item.full_name}}</div>
            <div class="nickname-date">{{item.create_time | formatDate}}</div>
          </div>
        </div>
        <div class="comment-content">{{item.content}}</div>
        <div class="comment-reply" v-for="child in item.children" :key="child.id">
          <span>{{child.full_name}}:</span>
          {{child.content}}
        </div>
        <el-divider></el-divider>
      </div>
    </el-card>

    <!-- <div v-for="item in comments" :key="item.id">
        <p>{{item.content}}</p>
        <div  v-if="item.children">
            <comment :comments="item.children"></comment>
        </div>
        <hr v-if="!item.children">
    </div>-->
  </div>
</template>

<script>
import { formatDate } from "@/static/js/formatDate.js";
import axios from "axios";

export default {
  name: "Comment",
  props: {
    comments: {
      type: Array,
      required: true
    },
    title: String
  },
  data() {
    return {
      ruleForm: {
        full_name: "",
        email: "",
        content: ""
      },
      rules: {
        content: [
          { required: true, message: "请填写留言内容", trigger: "blur" }
        ],
        full_name: [{ required: true, message: "请填写昵称", trigger: "blur" }],
        email: [
          { type: "email", message: "请填写正确的邮箱格式", trigger: "blur" },
          { required: true, message: "请填写邮箱", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          axios
            .post("http://www.isdaji.com/api/portal/comment/addComment", {
              object_id: this.$route.params.id,
              full_name: this.ruleForm.full_name,
              email: this.ruleForm.email,
              content: this.ruleForm.content,
              more: this.title,
            })
            .then(res => {
              if (res.data.code == 1) {
                
              }
            });
          // console.log(this.ruleForm.full_name);
          // console.log(this.ruleForm.email);
          // console.log(this.ruleForm.content);
          // console.log(this.title);
          // console.log(this.$route.params.id);
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  },
  filters: {
    formatDate(time) {
      time = time * 1000;
      let date = new Date(time);
      return formatDate(date, "yyyy-MM-dd hh:mm:ss");
    }
  }
};
</script>
<style lang="less" scoped>
.comments-wrap {
  margin: 2rem 0;
  .inline-style {
    display: flex;
  }
  .demo-type {
    display: flex;
    align-items: center;
    padding: 0.8rem;
    .nickname {
      padding: 0 0.5rem;
      .nickname-date {
        font-size: 0.8rem;
        color: #95a5a6;
      }
    }
  }
  .comment-content {
    padding: 0rem 1rem;
  }
  .comment-reply {
    padding: 1rem 1rem;
    span {
      font-size: 0.8rem;
      color: #3498db;
    }
  }
}
</style>