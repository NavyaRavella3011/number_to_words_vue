import { shallowMount } from "@vue/test-utils";
import App from "@/App.vue";

describe('App.vue', () => {
  test('is a number', () => {

    const wrapper = shallowMount(App);

    wrapper.find('input').setValue(2);

    expect(wrapper.text()).toContain('two')
  })
})
