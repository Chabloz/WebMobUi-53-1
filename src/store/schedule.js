import { ref, readonly} from "vue";

export const test = readonly(ref("hello world"));

export function setTest(value) {
  test.value = value;
}