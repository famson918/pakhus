<template>
    <footer class="footer bg-white">
        <div class="container">
            <div class="row mt-3">
                <div class="col-2">
                    <p class="align-middle"><span>工作时间</span>09:00 ~ 18:00</p>
                </div>
                <div class="col-2  d-flex align-items-center">
                    <p>午餐时间12:00 ~ 13:00</p>
                </div>
                <p>
                    吐·星期天，公休日休息
                </p>
            </div>
            <div class="separator separator-dashed"></div>
            <div class="row">
                <div class="col-2 text-center">
                    <router-link to="/faq" class="fw-bolder">经常找的问题</router-link>
                </div>
                <div class="col-2 border-start text-center">
                    <router-link to="/policy" class="fw-bolder">个人信息处理方针</router-link>
                </div>
            </div>
            <div class="separator separator-dashed"></div>
            <div class="row">
                <div class="col-2">
                    <p><span class="fw-bolder">公司名称 </span>库斯</p>
                </div>
                <div class="col-2">
                    <p><span class="fw-bolder">代表者 </span>汪三</p>
                </div>
                <div class="col-2">
                    <p><span class="fw-bolder">营业执照号码 </span>344-22-01522</p>
                </div>
                <div class="col-4">
                    <p><span class="fw-bolder">地址 </span>辽宁省 丹东市 振兴区 开发路 302 A座 111室</p>
                </div>
                <div class="col-2">
                    <p><span class="fw-bolder">电子邮件 </span>Pakhus@163.com</p>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>

export default {
    name: 'Footer'
}
</script>
<style scoped>
.align-middle{
    margin-top: auto;
    margin-bottom: auto;
}
</style>
