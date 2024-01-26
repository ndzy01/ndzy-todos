/// <reference types="vite/client" />

interface ITodo {
  id: string;
  name: string;
  detail: string;
  tagId: string;
  deadline: string;
  isDel: number;
  isFinish: number;
  userName: string;
  tagName: string;
  createdAt: string;
  updatedAt: string;
}

interface TodoTag {
  id: string;
  name: string;
  userName: string;
}

interface User {
  id: string;
  nickname: string;
  name: string;
  role: string;
}

declare module '@wxcloud/cloud-sdk' {
  export { initCloud };
}
