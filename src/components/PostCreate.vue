<template>

  <MainTop />

  <div>
    <h2>Q & A</h2>
    <form @submit.prevent="createPost">
      <div>
        <label for="title">제목:</label>
        <input id="title" v-model="post.title" required>
      </div>
      <div>
        <label for="author">글쓴이:</label>
        <input id="author" v-model="post.author" required>
      </div>
      <div>
        <label for="content">내용:</label>
        <textarea id="content" v-model="post.content" required></textarea>
      </div>
      
      <br>
      <!-- 이미지 업로드 -->
      <div v-if="!previewUrl">
        <input type="file" id="upload-image" @change="onFileSelected" hidden accept="image/png, image/jpeg, image/jpg"/>
        <label for="upload-image">
          이미지 선택 :   <br>
          <img class="imageUpIcon" @change="onFileSelected" src="@/assets/images/create/icon_upload.png" alt="Upload icon"/>
        </label>
      </div>
      <!-- 선택한 이미지 미리보기 -->
      <div v-if="previewUrl" class="preview=container">
        <img :src="previewUrl" alt="Preview" style="max-width: 300px;">
        <br>
        <button @click="removePreview" class="remove-preview">X</button>
      </div>
      
      <div v-if="uploadStatus">{{ uploadStatus }}</div>

      <br>
      <!-- 작성완료 버튼 -->
      <button type="submit">게시글 작성</button>
    </form>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
import { useRouter } from 'vue-router';
import MainTop from '@/components/MainTop.vue';
import api from '@/services/api';
import axios from 'axios';

const router = useRouter();

const post = reactive({
  title: '',
  author: '',
  content: '',
  imageUrl: ''
});

const selectedFile = ref(null);
const previewUrl = ref(null);
const uploadStatus = ref('');
const fileInput = ref(null);

const createPost = async () => {
  try {
    if (selectedFile.value) {
      await uploadImage();
    }
    await api.createPost(post);
    router.push('/');
  } catch (error) {
    console.error('Error creating post:', error);
    uploadStatus.value = '게시글 작성 실패: ' + error.message;
  }
};

const onFileSelected = (event) => {
  selectedFile.value = event.target.files[0];
  if (selectedFile.value) {
    createPreview();
  } else {
    previewUrl.value = null;
  }
};

const createPreview = () => {
  const reader = new FileReader();
  reader.onload = (e) => {
    previewUrl.value = e.target.result;
  };
  reader.readAsDataURL(selectedFile.value);
};

const removePreview = () => {
  previewUrl.value = null;
  selectedFile.value = null;
  uploadStatus.value = '';
  if (fileInput.value) fileInput.value.value = '';
};

const uploadImage = async () => {
  if (!selectedFile.value) {
    uploadStatus.value = '파일을 선택해주세요.';
    return;
  }

  const formData = new FormData();
  formData.append('image', selectedFile.value, selectedFile.value.name);

  try {
    const response = await axios.post('/api/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
    uploadStatus.value = '업로드 성공! : ' + response.data.message;
    post.imageUrl = response.data.imageUrl;
  } catch (error) {
    uploadStatus.value = '업로드 실패! : ' + error.message;
    throw error;
  }
};
</script>

<style scoped>
.imageUpIcon {
  width: 100px; 
  height: auto; 
  opacity: 0.3; 
  border: 1px solid black;
}
.preview-container {
  position: relative;
  display: inline-block;
}

.remove-preview {
  top: 15px;
  right: 5px;
  background-color: rgba(221, 136, 136, 0.7);
  border: none;
  border-radius: 50%;
  padding: 5px 10px;
  margin-top: 5px;
  cursor: pointer;
}

.imageUpIcon {
  width: 100px; 
  height: auto; 
  opacity: 0.3; 
  border: 1px solid black;
}
</style>