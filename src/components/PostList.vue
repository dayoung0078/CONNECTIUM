<template>
    <div>
      <h2>게시글 목록</h2>
      <router-link to="/post/create">새 게시글 작성</router-link>
      <ul>
        <li v-for="post in posts" :key="post.id">
          {{ post.title }}
          <router-link :to="`/post/${post.id}`"><button @click="postView">보기</button></router-link>
          <router-link :to="`/post/${post.id}/edit`"><button @click="postEdit">수정</button></router-link>
          <button @click="deletePost(post.id)">삭제</button>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import api from '@/services/api';
  
  export default {
    name: 'PostList',
    data() {
      return {
        posts: [],
      };
    },
    created() {
      this.fetchPosts();
    },
    methods: {
      async fetchPosts() {
        try {
          this.posts = await api.getAllPosts();
        } catch (error) {
          console.error('Error fetching posts:', error);
        }
      },
      async deletePost(id) {
        try {
          await api.deletePost(id);
          this.fetchPosts();  // 목록 새로고침
        } catch (error) {
          console.error('Error deleting post:', error);
        }
      },
    },
  };
  </script>