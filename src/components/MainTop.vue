<template>
    <header class="top-header">
        <div class="top-bar">
            <div class="top-container">
                <div class="logo-slogan">
                    <img class="imageLogo" src="/connectiumLogoLight.png" alt="">
                    <div class="text-container">
                        <h2 class="slogan">아이랑 자유롭게 이어지는 우리 중랑</h2> 
                        <h1 class="serviceName">커넥티움+</h1>
                    </div>
                </div>
                    
                <div>
                    <div class="auth-conteiner">
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

    </header>

    <nav>     
      <router-link to="/">홈</router-link> |
      <router-link to="/post/create">새 게시글 작성</router-link>
    </nav>

</template>

<script setup>
</script>

<style src="@/assets/font.css"></style>

<style scoped>
.top-header {
    padding-right: 30px;
    padding-left: 30px;
    
}

.top-bar {
    width: 100%;
    height: 150px;
    background: #B3E000;
    box-shadow: 0px 3px 7px #DBFA5F;
    border-radius: 150px;
    padding: 0 20px;
    position: relative;
    display: flex;
    align-items: center; /* 세로 중앙 정렬 */
}

.top-container {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

}

.logo-slogan {
    display: flex;
    align-items: center;
}

.imageLogo {
    width: 70px; 
    height: auto; 
    margin-right: 20px;
}

.text-container {
  display: flex;
  flex-direction: column;
}

.slogan {
    color: white;
    text-shadow: 1px 1px 2px rgb(31, 31, 31);
    font-size: 25px;
    font-family: 'MangoByeolbyeol';
    font-weight: 400;
    margin: 0, auto;
}

.serviceName { 
    color: white; 
    font-size: 40px;
    font-family: 'MangoByeolbyeol'; 
    font-weight: 400;
    margin: 0, auto;
    /* line-height: 1; */
}

.auth-conteiner {
    width: 180px; height: 30px; left: 1008.17px; top: 6px; position: absolute;
}

.auth-section {
    width: 250px; left: 0px; top: 0px; display: flex; position: relative; color: white; 
    font-size: 25px; font-family: Pretendard; font-weight: 900; word-wrap: break-word;
}

.auth-link {
    display: flex;
    padding-right: 20px;
}

.search-container {
    width: 100%; height: 100%; position: relative;
}

.search-box {
    width: 200px; height: 50px; left: 0px; top: 0px; position: absolute; 
    background-color: white; border-radius: 20px; border: 2px #C0EA6A solid;
}

.search {
    left: 20px; top: 10px; position: absolute; opacity: 0.70; color: black; 
    font-size: 25px; font-family: Pretendard; font-weight: 400; word-wrap: break-word;
}

.search-icon {
    width: 25px; height: 25px; left: 170px; top: 12px; position: absolute; 
}

.main-nav {
    align-items: center;
    font-family: Ownglyph_meetme-Rg;
    font-size: 30px;     
}
.nav-item {
    padding-left: 20px;

}

</style>