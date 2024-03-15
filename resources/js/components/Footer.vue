<template>
    <footer class="footer bg-white">
        <div class="container">
            <p style="padding-top:15px; margin-bottom:10px; text-align:center;">
                <span class="footer-span-link"><a style="margin-right:10px;" href="/faq">{{ $t('frequently_asked_questions')}}</a> | <a style="margin-right:30px;margin-left:10px;" href="/policy">{{ $t('terms') }}</a></span>           <span class="footer-span-normal">{{ $t('footerWorkingTime') }} 09:00 ~ 18:00. {{ $t('footerLunchTime') }} 12:00 ~ 13:00.  {{ $t('footerRest') }}</span>
            </p>
            <hr>
            <p style="padding-top:10px; padding-bottom:15px; text-align:center;">
                <span class="footer-span-bold">{{ $t('footerCompany') }}</span><span class="footer-span-normal">파쿠스</span><span class="footer-span-bold">{{ $t('footerAgent') }}</span><span class="footer-span-normal">이우종</span><span class="footer-span-bold">{{ $t('footerRegistrationNumber') }}</span><span class="footer-span-normal">344-22-01522</span><span class="footer-span-bold">{{ $t('footerAddress') }}</span><span class="footer-span-normal">성남시 중원구 갈마치로 302, 3층 B동 302호</span><span class="footer-span-bold">{{ $t('footerEmail') }}</span><span class="footer-span-normal">Pakhus@nave.com</span>
            </p>           
        </div>
    </footer>
</template>

<script>

export default {
    name: 'Footer'
}
</script>
<style>
.align-middle{
    margin-top: auto;
    margin-bottom: auto;
}

.footer-p{
    margin-top: 5px;
    margin-bottom:20px;
}

.footer-span-link{
    margin-left: 5px;
    margin-right: 5px;
    font-size: small;
    font-weight: bold;
}

.footer-span-bold{
    margin-left: 10px; 
    margin-right: 5px;   
    font-size: smaller;
    font-weight: bold;
}


.footer-span-normal{
    
    margin-right: 5px;    
    font-size: smaller;
    font-weight: normal;
}
</style>
