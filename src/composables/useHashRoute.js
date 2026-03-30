import { ref } from 'vue';

export function useHashRoute() {
  const currentPage = ref('home');

  return { currentPage };
}