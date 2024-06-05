// plugins/axios.js
import { defineNuxtPlugin } from '#app';
import axios, { HttpStatusCode } from "axios";

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();
  const router = useRouter();

  const RESPONSE_TIMEOUT = 30000;

  const api = axios.create({
    baseURL: `${config.public.NUXT_API_URL}/api`,
    headers: {
      'Content-Type': 'application/json',
    },
    timeout: RESPONSE_TIMEOUT,
  });

  api.interceptors.request.use((config) => config);

  api.interceptors.response.use(
    (response) => {
      const res = response.data;
      if (res && res.code === HttpStatusCode.InternalServerError) {
        router.push('/500')
      }
  
      if (res && res.code === HttpStatusCode.NotFound) {
        router.push('/404')
      }
  
      if (res && res.code === HttpStatusCode.UnprocessableEntity) {
        return;
      }
  
      if (res && res.code === HttpStatusCode.Ok) {
        return res;
      }
  
      return res;
    },
    (error) => {
      throw error;
    }
  );

  nuxtApp.provide('api', api);
});
