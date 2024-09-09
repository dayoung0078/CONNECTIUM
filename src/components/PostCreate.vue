<template>
  <div>
    <h2>새 게시글 작성</h2>
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

<script>
import api from '@/services/api';
import axios from 'axios';

export default {
  name: 'PostCreate',
  data() {
    return {
      post: {
        title: '',
        author:'',
        content: '',
        imageUrl: ''
      },
      selectedFile: null,
      previewUrl: null,
      uploadStatus: ''
    };
  },
  methods: {
    async createPost() {
      try {
        if (this.selectedFile) {
          await this.uploadImage();
        }
        await api.createPost(this.post);
        this.$router.push('/');
      } catch (error) {
        console.error('Error creating post:', error);
        this.uploadStatus = '게시글 작성 실패: ' + error.message;
      }
    },
    onFileSelected(event) {
      this.selectedFile = event.target.files[0];
      if (this.selectedFile) { //파일이 선택되었을때만 미리보기 실행.
        this.createPreview();
      } else { //파일선택이 안되었으면 미리보기는 null반환.
        this.previewUrl = null;
      }
    },
    createPreview() {
      const reader = new FileReader();
      reader.onload = (e) => {
        this.previewUrl = e.target.result;
      };
      reader.readAsDataURL(this.selectedFile);
    },
    removePreview() {
    this.previewUrl = null;
    this.selectedFile = null;
    this.uploadStatus = '';
    // 파일 입력 필드를 초기화시켜서 삭제해줌. 
    const fileInput = this.$refs.fileInput;
    if (fileInput) fileInput.value = '';
    },
    async uploadImage() {
      if (!this.selectedFile) {
        this.uploadStatus = '파일을 선택해주세요.';
        return;
      }

      const formData = new FormData();
      formData.append('image', this.selectedFile, this.selectedFile.name);

      try {
        const response = await axios.post('/api/upload', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });
        this.uploadStatus = '업로드 성공! : ' + response.data.message;
        this.post.imageUrl = response.data.imageUrl; // 서버에서 반환된 이미지 URL 저장
      } catch (error) {
        this.uploadStatus = '업로드 실패! : ' + error.message;
        throw error; // 상위 메소드에서 처리할 수 있도록 에러를 다시 throw
      }
    }    
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