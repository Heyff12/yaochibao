import { mount } from "@vue/test-utils";
import { store } from "../../../src/store";
import api from "../../../src/api";
import Component from "../../../src/views/auctionList.vue";

const flushPromises = () => Promise.resolve();

const errorService = () => {
  const data = {
    response: {
      status: 412,
      data: "error 412",
    },
  };
  return Promise.reject(data);
};

const successEmptyService = () => {
  const data = {
    status: 200,
    data: [],
  };
  return Promise.resolve(data.data);
};

const successHalfService = () => {
  const data = {
    status: 200,
    data: [
      {
        aid: "00001",
        name: "星空",
        type: "picture",
        price: "10000",
        detail:
          "《星月夜》（The Starry Night）是荷兰后印象派画家文森特·梵高于1889年在法国圣雷米的一家精神病院里创作的一幅油画，是文森特·梵高的代表作之一，现藏纽约现代艺术博物馆。在这幅画中，文森特·梵高用夸张的手法，生动地描绘了充满运动和变化的星空。 [1]  整个画面被一股汹涌、动荡的蓝绿色激流所吞噬，旋转、躁动、卷曲的星云使夜空变得异常活跃，脱离现实的景象反映出梵·高躁动不安的情感和疯狂的幻觉世界。",
        thumbnail:
          "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.gxccsd.com%2Fuploads%2Fallimg%2F200929%2F00291JR9_0.jpg&refer=http%3A%2F%2Fwww.gxccsd.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1655027658&t=8d45e73863d54552a5bdaebc1043c854",
      },
      {
        aid: "00002",
        name: "茅台",
        type: "wine",
        price: "9999",
        detail:
          "茅台酒是中国的传统特产酒。与苏格兰威士忌、法国科涅克白兰地齐名的世界三大蒸馏名酒之一，同时是中国三大名酒“茅五剑”之一。也是大曲酱香型白酒的鼻祖，已有800多年的历史。",
        thumbnail:
          "https://img1.baidu.com/it/u=1916619075,941648720&fm=253&fmt=auto&app=120&f=JPEG?w=750&h=500",
      },
      {
        aid: "00003",
        name: "海洋之心",
        type: "jewel",
        price: "100000",
        detail:
          "电影《泰坦尼克号》的故事情节中， “海洋之心”项链便是采用坦桑石来进行客串演绎的，坦桑石呈现出了海洋般的深邃与美丽，是名副其实的“海洋之心”。",
        thumbnail:
          "http://t15.baidu.com/it/u=3672761728,3963104431&fm=224&app=112&f=JPEG?w=500&h=500",
      },
    ],
  };
  return Promise.resolve(data.data);
};

const successOverFullService = () => {
  const data = {
    status: 200,
    data: [
      {
        aid: "00001",
        name: "星空",
        type: "picture",
        price: "10000",
        detail:
          "《星月夜》（The Starry Night）是荷兰后印象派画家文森特·梵高于1889年在法国圣雷米的一家精神病院里创作的一幅油画，是文森特·梵高的代表作之一，现藏纽约现代艺术博物馆。在这幅画中，文森特·梵高用夸张的手法，生动地描绘了充满运动和变化的星空。 [1]  整个画面被一股汹涌、动荡的蓝绿色激流所吞噬，旋转、躁动、卷曲的星云使夜空变得异常活跃，脱离现实的景象反映出梵·高躁动不安的情感和疯狂的幻觉世界。",
        thumbnail:
          "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.gxccsd.com%2Fuploads%2Fallimg%2F200929%2F00291JR9_0.jpg&refer=http%3A%2F%2Fwww.gxccsd.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1655027658&t=8d45e73863d54552a5bdaebc1043c854",
      },
      {
        aid: "00002",
        name: "茅台",
        type: "wine",
        price: "9999",
        detail:
          "茅台酒是中国的传统特产酒。与苏格兰威士忌、法国科涅克白兰地齐名的世界三大蒸馏名酒之一，同时是中国三大名酒“茅五剑”之一。也是大曲酱香型白酒的鼻祖，已有800多年的历史。",
        thumbnail:
          "https://img1.baidu.com/it/u=1916619075,941648720&fm=253&fmt=auto&app=120&f=JPEG?w=750&h=500",
      },
      {
        aid: "00003",
        name: "海洋之心",
        type: "jewel",
        price: "100000",
        detail:
          "电影《泰坦尼克号》的故事情节中， “海洋之心”项链便是采用坦桑石来进行客串演绎的，坦桑石呈现出了海洋般的深邃与美丽，是名副其实的“海洋之心”。",
        thumbnail:
          "http://t15.baidu.com/it/u=3672761728,3963104431&fm=224&app=112&f=JPEG?w=500&h=500",
      },
      {
        aid: "00002",
        name: "茅台",
        type: "wine",
        price: "9999",
        detail:
          "茅台酒是中国的传统特产酒。与苏格兰威士忌、法国科涅克白兰地齐名的世界三大蒸馏名酒之一，同时是中国三大名酒“茅五剑”之一。也是大曲酱香型白酒的鼻祖，已有800多年的历史。",
        thumbnail:
          "https://img1.baidu.com/it/u=1916619075,941648720&fm=253&fmt=auto&app=120&f=JPEG?w=750&h=500",
      },
      {
        aid: "00003",
        name: "海洋之心",
        type: "jewel",
        price: "100000",
        detail:
          "电影《泰坦尼克号》的故事情节中， “海洋之心”项链便是采用坦桑石来进行客串演绎的，坦桑石呈现出了海洋般的深邃与美丽，是名副其实的“海洋之心”。",
        thumbnail:
          "http://t15.baidu.com/it/u=3672761728,3963104431&fm=224&app=112&f=JPEG?w=500&h=500",
      },
      {
        aid: "00003",
        name: "海洋之心",
        type: "jewel",
        price: "100000",
        detail:
          "电影《泰坦尼克号》的故事情节中， “海洋之心”项链便是采用坦桑石来进行客串演绎的，坦桑石呈现出了海洋般的深邃与美丽，是名副其实的“海洋之心”。",
        thumbnail:
          "http://t15.baidu.com/it/u=3672761728,3963104431&fm=224&app=112&f=JPEG?w=500&h=500",
      },
    ],
  };
  return Promise.resolve(data.data);
};

describe("Component", () => {
  test("show nodata when auctionList is empty", async () => {
    jest.spyOn(api, "getAuctionList").mockReturnValue(successEmptyService());
    const wrapper = mount(Component, {
      global: {
        plugins: [store],
      },
    });
    await flushPromises();
    const noData = wrapper.find("#noData");
    const serverError = wrapper.find("#serverError");
    const listDom = wrapper.find("#list");
    expect(noData.exists()).toBeTruthy();
    expect(serverError.exists()).toBeFalsy();
    expect(listDom.exists()).toBeFalsy();
  });

  test("show 3 item when auctionList's length is 3", async () => {
    jest.spyOn(api, "getAuctionList").mockReturnValue(successHalfService());
    const wrapper = mount(Component, {
      global: {
        plugins: [store],
      },
    });
    await flushPromises();
    const noData = wrapper.find("#noData");
    const serverError = wrapper.find("#serverError");
    const listDom = wrapper.findAll(".auction-item");
    console.log(wrapper.html());
    expect(listDom.length).toBe(3);
    expect(noData.exists()).toBeFalsy();
    expect(serverError.exists()).toBeFalsy();
  });

  test("show 5 item when auctionList's length is 5", async () => {
    jest.spyOn(api, "getAuctionList").mockReturnValue(successOverFullService());
    const wrapper = mount(Component, {
      global: {
        plugins: [store],
      },
    });
    await flushPromises();
    const noData = wrapper.find("#noData");
    const serverError = wrapper.find("#serverError");
    const listDom = wrapper.findAll(".auction-item");
    expect(listDom.length).toBe(5);
    expect(noData.exists()).toBeFalsy();
    expect(serverError.exists()).toBeFalsy();
  });

  test("show server error when api error", async () => {
    jest.spyOn(api, "getAuctionList").mockReturnValue(errorService());
    const wrapper = mount(Component, {
      global: {
        plugins: [store],
      },
    });
    await flushPromises();
    const noData = wrapper.find("#noData");
    const serverError = wrapper.find("#serverError");
    const listDom = wrapper.find("#list");
    expect(noData.exists()).toBeFalsy();
    expect(serverError.exists()).toBeTruthy();
    expect(listDom.exists()).toBeFalsy();
  });
});
