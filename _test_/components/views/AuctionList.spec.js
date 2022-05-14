import { mount } from "@vue/test-utils";
import { store } from "../../../src/store";

import Component from "../../../src/views/AuctionList.vue";

describe("Component", () => {
  test("show nodata when auctionList is empty", () => {
    const wrapper = mount(Component, {
      global: {
        plugins: [store],
      },
    });
    const noData = wrapper.find("#noData");
    const serverError = wrapper.find("#serverError");
    console.log(wrapper.html());
    expect(noData.exists()).toBeTruthy();
    expect(serverError.exists()).toBeFalsy();
  });
});
