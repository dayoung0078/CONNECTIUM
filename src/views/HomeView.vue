<template>
    <div class="home">
       <MainTop />
       <br>
       <HomeBody />
    </div>
</template>
  
<script>
import MainTop from '@/components/MainTop.vue';
import HomeBody from '@/components/HomeBody.vue';

  
  export default {
    name: 'HomeView',
    components: {
      MainTop,
      HomeBody
    }
  }
</script>