import { mount } from "@vue/test-utils";
import { store } from "../../../src/store";
import service from "../../../src/service";
import Component from "../../../src/views/settleDetail.vue";

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
    data: {
      bills: [],
    },
  };
  return Promise.resolve(data.data);
};

const successHalfService = () => {
  const data = {
    status: 200,
    data: {
      amount: 100,
      bills: [
        {
          bid: "00001",
          name: "星空之家",
          price: 120,
          detail: "鱼香肉丝，酸菜粉丝汤",
          thumbnail:
            "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic2.zhimg.com%2Fv2-6dc01d6b032b5ad0288405af08de560c_1440w.jpg%3Fsource%3D172ae18b&refer=http%3A%2F%2Fpic2.zhimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1668537253&t=fd5e4f21dc0814c2f88c36d06f8f5f4d",
        },
        {
          bid: "00002",
          name: "梵高",
          price: 10,
          detail: "水煮肉片，蒜泥白肉",
          thumbnail:
            "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fbkimg.cdn.bcebos.com%2Fpic%2Ff603918fa0ec08fac08cbfbb5fee3d6d55fbda1a&refer=http%3A%2F%2Fbkimg.cdn.bcebos.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1668537389&t=21e46d683b4ae8841e6679ce38596b15",
        },
        {
          bid: "00003",
          name: "小米",
          price: 1200,
          detail: "锅包肉，蚂蚁上树",
          thumbnail:
            "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fvsd-picture.cdn.bcebos.com%2Fc1a899310bbb1eb4e4700d15df9c20ae258451a3.jpg&refer=http%3A%2F%2Fvsd-picture.cdn.bcebos.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1668537336&t=75c1a800b30e41ec5cad377212d522c3",
        },
      ],
      billsCount: 3,
    },
  };
  return Promise.resolve(data.data);
};

const successOverFullService = () => {
  const data = {
    status: 200,
    data: {
      amount: 1200,
      bills: [
        {
          bid: "00001",
          name: "星空之家",
          price: 120,
          detail: "鱼香肉丝，酸菜粉丝汤",
          thumbnail:
            "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic2.zhimg.com%2Fv2-6dc01d6b032b5ad0288405af08de560c_1440w.jpg%3Fsource%3D172ae18b&refer=http%3A%2F%2Fpic2.zhimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1668537253&t=fd5e4f21dc0814c2f88c36d06f8f5f4d",
        },
        {
          bid: "00002",
          name: "梵高",
          price: 10,
          detail: "水煮肉片，蒜泥白肉",
          thumbnail:
            "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fbkimg.cdn.bcebos.com%2Fpic%2Ff603918fa0ec08fac08cbfbb5fee3d6d55fbda1a&refer=http%3A%2F%2Fbkimg.cdn.bcebos.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1668537389&t=21e46d683b4ae8841e6679ce38596b15",
        },
        {
          bid: "00003",
          name: "小米",
          price: 1200,
          detail: "锅包肉，蚂蚁上树",
          thumbnail:
            "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fvsd-picture.cdn.bcebos.com%2Fc1a899310bbb1eb4e4700d15df9c20ae258451a3.jpg&refer=http%3A%2F%2Fvsd-picture.cdn.bcebos.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1668537336&t=75c1a800b30e41ec5cad377212d522c3",
        },
        {
          bid: "00004",
          name: "梵高",
          price: 10,
          detail: "水煮肉片，蒜泥白肉",
          thumbnail:
            "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fbkimg.cdn.bcebos.com%2Fpic%2Ff603918fa0ec08fac08cbfbb5fee3d6d55fbda1a&refer=http%3A%2F%2Fbkimg.cdn.bcebos.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1668537389&t=21e46d683b4ae8841e6679ce38596b15",
        },
        {
          bid: "00005",
          name: "小米",
          price: 1200,
          detail: "锅包肉，蚂蚁上树",
          thumbnail:
            "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fvsd-picture.cdn.bcebos.com%2Fc1a899310bbb1eb4e4700d15df9c20ae258451a3.jpg&refer=http%3A%2F%2Fvsd-picture.cdn.bcebos.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1668537336&t=75c1a800b30e41ec5cad377212d522c3",
        },
      ],
      billsCount: 6,
    },
  };
  return Promise.resolve(data.data);
};

describe("Component", () => {
  const mockRoute = {
    params: {
      sid: "1234",
    },
  };
  test("show nodata when bills is empty", async () => {
    jest
      .spyOn(service, "getSettleDetail")
      .mockReturnValue(successEmptyService());
    const wrapper = mount(Component, {
      global: {
        plugins: [store],
        mocks: {
          $route: mockRoute,
        },
      },
    });
    await flushPromises();
    const noData = wrapper.find("#noData");
    const serverError = wrapper.find("#serverError");
    const listDom = wrapper.find("#list");
    const amountDom = wrapper.find(".amount span");

    expect(noData.exists()).toBeTruthy();
    expect(serverError.exists()).toBeFalsy();
    expect(listDom.exists()).toBeFalsy();
    expect(amountDom.text()).toBe("-");
  });

  test("show 3 item when bills's length is 3", async () => {
    jest
      .spyOn(service, "getSettleDetail")
      .mockReturnValue(successHalfService());
    const wrapper = mount(Component, {
      global: {
        plugins: [store],
        mocks: {
          $route: mockRoute,
        },
      },
    });
    await flushPromises();
    const noData = wrapper.find("#noData");
    const serverError = wrapper.find("#serverError");
    const listDom = wrapper.findAll(".bill-item");
    const amountDom = wrapper.find(".amount span");

    console.log(wrapper.html());
    expect(listDom.length).toBe(3);
    expect(noData.exists()).toBeFalsy();
    expect(serverError.exists()).toBeFalsy();
    expect(amountDom.text()).toBe("¥100.00");
  });

  test("show 5 item when bills's length is 5", async () => {
    jest
      .spyOn(service, "getSettleDetail")
      .mockReturnValue(successOverFullService());
    const wrapper = mount(Component, {
      global: {
        plugins: [store],
        mocks: {
          $route: mockRoute,
        },
      },
    });
    await flushPromises();
    const noData = wrapper.find("#noData");
    const serverError = wrapper.find("#serverError");
    const listDom = wrapper.findAll(".bill-item");
    const amountDom = wrapper.find(".amount span");

    expect(listDom.length).toBe(5);
    expect(noData.exists()).toBeFalsy();
    expect(serverError.exists()).toBeFalsy();
    expect(amountDom.text()).toBe("¥1,200.00");
  });

  test("show server error when service error", async () => {
    jest.spyOn(service, "getSettleDetail").mockReturnValue(errorService());
    const wrapper = mount(Component, {
      global: {
        plugins: [store],
        mocks: {
          $route: mockRoute,
        },
      },
    });
    await flushPromises();
    const noData = wrapper.find("#noData");
    const serverError = wrapper.find("#serverError");
    const listDom = wrapper.find("#list");
    const amountDom = wrapper.find(".amount span");
    console.log(wrapper.html());

    expect(noData.exists()).toBeFalsy();
    expect(serverError.exists()).toBeTruthy();
    expect(listDom.exists()).toBeFalsy();
    expect(amountDom.text()).toBe("¥1,200.00");
  });
});
