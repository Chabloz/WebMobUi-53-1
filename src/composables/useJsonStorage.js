import { ref, watch } from "vue"

export function useJsonStorage(key, val) {
  const valref = ref(val);

  watch(valref, () => {
    const valJson = JSON.stringify(valref.value);
    localStorage.setItem(key, valJson);
  });

  return { val: valref };
}