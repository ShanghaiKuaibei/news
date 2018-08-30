<template>
    <!-- 会议报名表单-->
    <div>
    <div id="register" v-if="ch&&!isOver">
        <h2>注册报名</h2>
        <p>标有*的字段为必填</p>
        <el-form :label-position="labelPosition" ref="form" :model="form" label-width="80px">
            <el-form-item prop="names" label="姓名" :rules="[
                                  { required: true, message: '请输入姓名', trigger: 'blur' },
                                  { type: 'text', message: '请输入正确的名字', trigger: 'blur,change' }
                                ]">
                <el-input type="text" v-model="form.names"></el-input>
            </el-form-item>
            <el-form-item prop="email" label="电子邮箱" :rules="[
                                  { required: true, message: '请输入邮箱地址', trigger: 'blur' },
                                  { type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur,change' }
                                ]">
                <el-input type="text" v-model="form.email"></el-input>
            </el-form-item>
            <el-form-item prop="email" label="手机号" :rules="[
                                  { required: true, message: '请输入手机号', trigger: 'blur' },
                                  { type: 'email', message: '请输入正确的手机号', trigger: 'blur,change' }
                                ]">
                <el-input type="text" v-model="form.tel"></el-input>
            </el-form-item>
            <el-form-item label="工作单位（选填）">
                <el-input type="textarea" :autosize="{ minRows: 6}" v-model="form.desc"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">提交</el-button>
            </el-form-item>
        </el-form>
    </div>
    <div id="register" v-if="!ch&&!isOver">
        <h2>REGISTRATION</h2>
        <p>If you would like to attend Skyledger London 2018 then please complete the registration form below:</p>
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
            <el-form-item prop="email" label="Telephone" :rules="[
                                  { required: true, message: 'Please enter your telephone', trigger: 'blur' },
                                  { type: 'email', message: 'Please enter the right telephone', trigger: 'blur,change' }
                                ]">
                <el-input type="text" v-model="form.tel"></el-input>
            </el-form-item>
            <el-form-item label="Company name">
                <el-input type="textarea" :autosize="{ minRows: 6}" v-model="form.desc"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">SUBMIT</el-button>
            </el-form-item>
        </el-form>
    </div>
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
                    zd: '',
                    tel: ''
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
                        tel: that.form.tel,
                        descl: that.form.desc
                    })
                    .then(function(res) {
                        if (res.data.warningCount == 0) {
                            alert("提交成功")
                        }else{
                            alert(res.data)
                        }
                    })
                    .catch(function(error) {
                    });
            }
        },
        props: ["url","isOver"]
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
    #register {
        width: 60%;
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
        h2 {
            text-align: center;
        }
    }
    @media screen and (max-width:768px) {
        body,
        html {
            font-size: 16px;
        }
        #register {
            width: 90%;
        }
    }
</style>