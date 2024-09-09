<template>
    <header class="top-header">
        <div class="top-bar">
            <div class="top-container">
                <div class="upper-section">
                    <div class="logo-slogan">
                        <router-Link to="/">
                            <img class="imageLogo" src="/connectiumLogoLight.png" alt="">
                        </router-Link>
                        <div class="text-container">
                            <div class="text-wrapper">
                                <h2 class="slogan">아이랑 자유롭게 이어지는 우리 중랑</h2> 
                                <h1 class="serviceName">커넥티움+</h1>
                            </div>
                        </div>
                    </div>
                    
                    <div class="auth-container">
                        <div class="auth-section">
                            <router-link to="#" class="auth-link">로그인</router-link>
                            <router-link to="#" class="auth-link">회원가입</router-link>
                        </div>                      
                        <div class="search-container">                                
                            <div class="search-box"></div>                            
                            <h5 class="search"> 검색 </h5>
                            <img class="search-icon" src="@/assets/images/top/searchtool.png" />                                
                        </div>
                    </div>
                </div>
                <div class="lower-section">
                    <nav class="main-nav">
                        <router-link to="#" class="nav-item">공지사항</router-link>
                        <router-link to="#" class="nav-item">우리아이 커뮤니티</router-link>
                        <router-link to="#" class="nav-item">교육 프로그램</router-link>
                        <router-link to="#" class="nav-item">신나는 우리동네</router-link>
                        <router-link to="#" class="nav-item">우리 같이가요!</router-link>
                        <router-link to="/post/create" class="nav-item">QnA</router-link>
                    </nav>
                </div>
            </div>
        </div>
    </header>
</template>

<script setup>
import { RouterLink } from 'vue-router';
</script>

<style src="@/assets/font.css"></style>

<style scoped>
.top-header {
    padding-right: 30px;
    padding-left: 30px;
}

.top-bar {
    width: 100%;
    background: #B3E000;
    box-shadow: 0px 3px 7px #DBFA5F;
    border-radius: 50px;
    padding: 20px;
    display: flex;
    flex-direction: column;
}

.top-container {
    /* width: 100%; */
    display: flex;
    flex-direction: column;
    margin: 0 100px 0 100px;
}

.upper-section {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
}

.logo-slogan {
    display: flex;
    align-items: center;
}

.imageLogo {
    width: 70px; 
    height: auto; 
    margin-right: 20px;
    margin-left: 30px;
}

.text-container {
    display: flex;
    flex-direction: column;
}

.text-wrapper {
    display: flex;
    align-items: center;
    text-shadow: 1px 1px 2px rgba(31, 31, 31, 0.5);
}

.slogan {
    color: white;
    font-size: 25px;
    font-family: 'MangoByeolbyeol', sans-serif;
    font-weight: 400;
    margin: 0;
    margin-right: 10px;
}

.serviceName { 
    color: white; 
    font-size: 40px;
    font-family: 'MangoByeolbyeol', sans-serif; 
    font-weight: 400;
    margin: 0;
    -webkit-text-stroke: 5px #8fc622;
    paint-order: stroke fill;
}

.auth-container {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
}

.auth-section {
    display: flex;
    color: white; 
    font-size: 25px;
    font-family: Pretendard;
    font-weight: 900;
    margin-bottom: 10px;
    margin-right: 40px;
}

.auth-link {
    margin-left: 20px;
}

.search-container {
    position: relative;
    width: 200px;
    height: 50px;
    margin-right: 30px;
}

.search-box {
    width: 100%;
    height: 100%;
    background-color: white;
    border-radius: 20px;
    border: 2px #C0EA6A solid;
}

.search {
    position: absolute;
    left: 20px;
    top: 50%;
    transform: translateY(-50%);
    opacity: 30%;
    color: black; 
    font-size: 25px;
    font-family: Pretendard;
    font-weight: 400;
    padding-bottom: 20px;
}

.search-icon {
    position: absolute;
    width: 20px;
    height: 20px;
    right: 15px;
    top: 50%;
    transform: translateY(-50%);
}

.lower-section {
    width: 100%;
}

.main-nav {
    display: flex;
    margin: 0 50px 0 50px;
    justify-content: space-between;
    align-items: center;
    font-family: MangoDdobak-B;
    font-size: 20px;     
}

.nav-item {
    color: black;
    /* text-decoration: none; */
}
</style>