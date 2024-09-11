<template>
  <MainTop />
  <div class="q-Container">
    <div class="q-ContainerLine">
      <div class="titleContainer">
        <div class="titleBox">
          <h2>Q & A</h2>
          <h5>무엇이든 물어보세요!</h5>
        </div>
      </div>  
      <div class="search-container">                                
        <form @submit.prevent="questionSearch" class="search-form">
          <div class="search-box">                            
            <input type="text" class="search" v-model="searchQuery" placeholder="질문 검색하기" />
          </div>
          <div class="search-btn-box">
            <button type="submit" class="search-btn">
              검색하기
              <img class="search-icon" src="@/assets/images/top/searchtool.png" alt="검색"/>
            </button>
          </div>
        </form>
      </div>
      <div class="q-filter-Container">
        <div class="q-filter-Bar">
          <div class="q-filter-Text">최신순</div>
          <div class="q-filter-Text">댓글많은순</div>
          <div class="q-filter-Text">좋아요순</div>
          <div class="q-filter-Text">오래된순</div>
        </div>
        <router-link to="/post/create" class="goToPost">글쓰기</router-link>
      </div>
      

      <div class="q-list-Container">
        <div class="q-list-Line">
          <div class="q-List">
            <ul>
              <li v-for="post in posts" :key="post.id">
                {{ post.title }}
                <router-link :to="`/post/${post.id}`">
                  <button>보기</button>
                </router-link>
                <router-link :to="`/post/${post.id}/edit`">
                  <button>수정</button>
                </router-link>
                <button @click="deletePost(post.id)">삭제</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import MainTop from '@/components/MainTop.vue';
import api from '@/services/api';

const posts = ref([]);
const searchQuery = ref('');

const fetchPosts = async () => {
  try {
    posts.value = await api.getAllPosts();
  } catch (error) {
    console.error('Error fetching posts:', error);
  }
};

const deletePost = async (id) => {
  try {
    await api.deletePost(id);
    await fetchPosts();  // 목록 새로고침
  } catch (error) {
    console.error('Error deleting post:', error);
  }
};

const questionSearch = () => {
  console.log('Searching for:', searchQuery.value);
  // 검색 로직 구현
};

onMounted(fetchPosts);
</script>

<style scoped>
/* 스타일은 이전과 동일하게 유지 */
.q-Container {
  padding: 20px 30px 20px 30px;
}
.q-ContainerLine { 
  width: 100%; box-shadow: 0px 3px 7px #DBFA5F; border-radius: 50px; border: 2px #8CD000 solid; 
  height: auto; min-height: 330px;
  padding: 10px;
  display: flex;
  flex-direction: column; 
}

h2, h5 {
  font-family: Mango Ddobak;
}

.search-container {
  padding: 0 22%; /* 패딩 조정 */
  margin-bottom: 20px; /* 아래 여백 추가 */
}

.search-form {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px; /* 검색창과 버튼 사이 간격 */
}

.search-box {
  padding: 3px;
  width: 100%;
  height: 50px;
  background: white;
  box-shadow: 0px 3px 7px #DBFA5F;
  border-radius: 20px;
  border: 2px #8CD000 solid;
}
.search {
  width: 95%;
  height: 40px;
  border: none;
  outline: none; /* 포커스 시 기본 테두리 제거 */
  background: transparent; /* 배경을 투명하게 설정 */
  font-family: Mango Ddobak; /* 폰트 일관성을 위해 추가 */
  font-size: 15px; /* 적절한 폰트 크기 설정 */
  color: #242424; /* 텍스트 색상 설정 */
  padding: 0 10px; /* 내부 패딩 추가 */
}

.search:focus {
  /* 포커스 시 추가적인 스타일 변경이 필요하다면 여기에 추가 */
}
/* 플레이스홀더 스타일 조정 (선택사항) */
.search::placeholder {
  color: #999;
}

.search-btn-box {
  display: flex;
  
  /* align-self: self-end; */
  /* margin-right: 30%; */
}
.search-icon {
  width: 20px; height: 20px;
  margin-left: 5px; /* 아이콘과 텍스트 사이 간격 */
  
}
.search-btn {
  width: 140px; height: 50px; color:white; font-family: Mango Ddobak; font-size: 20px;
  background: #8CD000; box-shadow: 0px 3px 7px #DBFA5F; border-radius: 15px; border: 2px #8CD000 solid;
  padding-left: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
.goToPost {
  width: 5%;
  align-self: self-end;
  margin-right: 30%;
  color: #8CD000;
  font-size: 20px;
  font-family: Mango Ddobak;
  font-weight: 400;
  word-wrap: break-word;
  display: flex;
}

.q-filter-Container {
  padding: 0 0 0 23%;
  display: flex;
  justify-content: space-between; /* 필터와 글쓰기 버튼을 양쪽 끝으로 정렬 */
  margin-bottom: 10px; /* q-list-Line과의 간격 조정 */
}
.q-filter-Bar {
  /* width: 100%; height: 100%; position: relative; */
  align-items: center;
  display: flex;
}

.q-filter-Text {
  display: flex;
  margin-right: 15px;
  color: rgba(0, 0, 0, 0.70); 
  font-family: Mango Ddobak; 
  font-weight: bold; 
  font-size: 20px; 
  word-wrap: break-word;
  margin-right: 15px;
}

.q-list-Container {
  padding: 0 22% 20px 22%;
}

.q-list-Line {
  width: 100%; box-shadow: 0px 3px 7px #DBFA5F; border-radius: 20px; border: 2px #8CD000 solid; 
  height: auto; min-height: 330px;
  padding: 20px;
  display: flex;
  flex-direction: column; 
}

.q-List {
  padding: 5px;
  width: 100%; height: 45px; 
  color:black; font-family: Mango Ddobak; font-size: 20px;
  background: white; box-shadow: 0px 3px 7px #DBFA5F; border-radius: 10px; border: 2px #8CD000 solid;
}
</style>