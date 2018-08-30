<template>
    <!--发表评论表单 -->
    <!--<div class="comment" id="comment" v-if="ch">
        <h2>发表评论</h2>
        <p>电子邮件地址不会被公开。 必填项已用*标注</p>
        <el-form :label-position="labelPosition" ref="form" :model="form" label-width="80px">
            <el-form-item label="评论">
                <el-input type="textarea" :autosize="{ minRows: 6}" v-model="form.desc"></el-input>
            </el-form-item>
            <el-form-item label="姓名" prop="name" :rules="[{ required: true, message: '请输入姓名', trigger: 'blur' },
                { min: 1, max: 6, message: '长度在 1 到 6 个字符', trigger: 'blur' }]">
                <el-input v-model="form.names"></el-input>
            </el-form-item>
            <el-form-item prop="email" label="电子邮箱" :rules="[
              { required: true, message: '请输入邮箱地址', trigger: 'blur' },
              { type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur,change' }
            ]">
                <el-input v-model="form.email"></el-input>
            </el-form-item>
            <el-form-item label="站点" prop="zd">
                <el-input v-model="form.zd"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">发表评论</el-button>
            </el-form-item>
        </el-form>
    </div> -->
      <div class="meat" id="meat" v-if="!ch">
        <h2>JOHANNESBURG SIGN UP</h2>
        <p> SIGN UP Fields marked with an * are required</p>
        <el-form :label-position="labelPosition" ref="form" :model="form" label-width="80px">
          
            <el-form-item prop="names" label="Name" :rules="[
                                  { required: true, message: 'Please enter your name', trigger: 'blur' },
                                  { type: 'text', message: 'Please enter the right name', trigger: 'blur,change' }
                                ]">
                <el-input type="text" v-model="form.names"></el-input>
            </el-form-item>
             <el-form-item prop="email" label="Email" :rules="[
                                  { required: true, message: 'Please enter your nemail', trigger: 'blur' },
                                  { type: 'email', message: 'Please enter the right email', trigger: 'blur,change' }
                                ]">
                <el-input type="text" v-model="form.email"></el-input>
            </el-form-item>
            <el-form-item label="Phone" prop="zd">
                <el-input v-model="form.phone"></el-input>
            </el-form-item>
              <el-form-item label="Paragraph Text">
                <el-input type="textarea" :autosize="{ minRows: 6}" v-model="form.desc"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">SUBMIT</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                labelPosition: 'top',
                form: {
                   names: '',
                    desc: '',
                    email: '',
                    phone: '',
                }
            }
        },
         computed: {
            ch() {
                return this.$store.state.ch;
            }
        },
        methods: {
            onSubmit() {
                 const that = this;
                that.$http.post(api+'/' + that.url, {
                        name: that.form.names,
                        email: that.form.email,
                        tel: that.form.phone,
                        descl: that.form.desc
                    })
                    .then(function(res) {
                        if (res.data.warningCount == 0) {
                            alert("Submitted successfully")
                        }else{
                            alert(res.data)
                        }
                    })
                    .catch(function(error) {
                    });
            }
        },
        props: ["url"]
    }
</script>
<style lang="scss">
.el-button--primary{
    background: -webkit-linear-gradient(#5BABD6, #8DC8E7) !important;
  background: -o-linear-gradient(#5BABD6, #8DC8E7) !important; 
  background: -moz-linear-gradient(#5BABD6, #8DC8E7) !important; 
  background: linear-gradient(#5BABD6, #8DC8E7) !important; 
  border:none !important;
  color:#000 !important;
  font-weight:700 !important;
}
.el-button--primary:hover{
    background: -webkit-linear-gradient(#8DC8E7,#5BABD6) !important; 
  background: -o-linear-gradient(#8DC8E7,#5BABD6) !important; 
  background: -moz-linear-gradient(#8DC8E7,#5BABD6) !important; 
  background: linear-gradient(#8DC8E7,#5BABD6) !important; 
  color:#000 !important;
  font-weight:700 !important;
}
    .meat {
        width: 70%;
        max-width:800px;
        margin: 3rem auto;
        .el-textarea__inner,
        .el-input__inner {
            background-color: #eee !important;
        }
        .el-form-item__label {
            font-size: 1rem;
            font-weight: 600;
        }
        .el-form-item.is-required .el-form-item__label:after {
            content: '*';
            color: #f56c6c;
            margin-left: 4px;
        }
        .el-form-item.is-required .el-form-item__label:before {
            content: '';
            color: #f56c6c;
            margin-left: 4px;
        }
        .el-form-item__content {
            font-size: 1rem;
            font-weight: 600;
            text-align: center;
        }
    }
</style>