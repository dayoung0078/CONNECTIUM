<template>
    <div class="home">
       <MainTop />
       <br>
       <HomeBody />
       <br>
       <HomeContents />
    </div>
</template>
  
<script>
import MainTop from '@/components/MainTop.vue';
import HomeBody from '@/components/homeComponents/HomeBody.vue';
import HomeContents from '@/components/homeComponents/HomeContents.vue';

  
  export default {
    name: 'HomeView',
    components: {
      MainTop,
      HomeBody,
      HomeContents
    }
  }
</script>