<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { orpcClient } from './lib/orpc';
import type { InferClientOutputs } from '@orpc/client';

type Outputs = InferClientOutputs<typeof orpcClient>;
type GetUserOutput = Outputs['user']['getUser'];

const userList = ref<GetUserOutput['data']>([]);

async function getUser() {
  try {
    const res = await orpcClient.user.getUser({ id: 1 });
  userList.value = res.data; 
  } catch(error) {
    console.log(JSON.stringify(error));
  }
}

onMounted(() => {
  getUser();
});

async function addUser() {
  try {
    const res = await orpcClient.user.addUser({ name: 'test', email: 'test@test.com', age: 13});
    console.log(res);
  } catch(error) {
    console.log(JSON.stringify(error));
  }
}
</script>

<template>
  <div>
    <div v-for="item in userList" :key="item.id">
      <div>{{ item.name }}</div>
      <div>{{ item.email }}</div>
      <div>{{ item.age }}</div>
    </div>
  </div>
  <button @click="addUser">添加用户</button>
</template>