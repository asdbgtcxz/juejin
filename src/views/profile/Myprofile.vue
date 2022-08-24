<template>
  <div class="myProfilebg">
    <el-container style="width: 75rem; margin: 1.875rem auto">
      <el-container style="max-width: 56.25rem">
        <el-header
          class="profileHeader"
          style="
            height: 15rem;
            width: 56.25rem;
            background-color: rgb(255, 255, 255);
          "
        >
          <el-row :gutter="40">
            <el-col
              :span="16"
              style="padding-top: 1.25rem; padding-left: 2.1875rem"
              ><div class="grid-content bg-purple">
                <el-container>
                  <el-aside width="7.4375rem"
                    ><div class="block">
                      <el-avatar :size="115" :src="circleUrl"></el-avatar></div
                  ></el-aside>
                  <el-main>
                    <div class="user">
                      用户9126032394298
                      <img :src="grade" alt="" />
                    </div>
                    <div class="setting">
                      <a href="#">+&nbsp;你从事什么职业?</a>
                    </div>
                    <div class="setting">
                      <a href="#">+&nbsp;你从事什么职业</a>
                    </div>
                  </el-main>
                </el-container>
              </div>
            </el-col>
            <el-col :span="6" style="margin-left: 3.75rem; padding-top: 2.5rem">
              <div class="grid-content bg-purple">
                <div class="user_bundle">
                  <el-popover
                    placement="bottom-start"
                    trigger="hover"
                    content="绑定微博"
                  >
                    <a
                      href="https://api.weibo.com/oauth2/authorize?client_id=2380925997&response_type=code&display=mobile&state=0dcd98733gASoVCgoVPZIGIxNGFiMGQyZjI0Y2UxNTFiN2MzYWNkOTk0ODVmMzRloU6-aHR0cHM6Ly9qdWVqaW4uY24vb2F1dGgtcmVzdWx0oVYBoUkAoUQAoUHRCjChTdEKMKFIqWp1ZWppbi5jbqFSBKJQTNEE_KZBQ1RJT06goUzZJ2h0dHBzOi8vanVlamluLmNuL3VzZXIvMjI5MTg0NTYzODEzNDEwOaFU2SBlMjQ5YzQ3YWNkOWJlYzA3ZjgzMjljYzFlNDk4NTgxZqFXAKFGAKJTQQChVcM%3D&redirect_uri=https%3A%2F%2Fjuejin.cn%2Fpassport%2Fauth%2Flogin_success"
                      slot="reference"
                    >
                      <img src="@/assets/profile_xinlang.png" alt="" />
                    </a>
                  </el-popover>

                  <el-popover
                    placement="top-start"
                    trigger="hover"
                    content="绑定github"
                  >
                    <a href="" slot="reference">
                      <img src="@/assets/profile_github.png" alt="" />
                    </a>
                  </el-popover>
                  <el-popover
                    placement="top-start"
                    trigger="hover"
                    content="填写信息"
                  >
                    <a href="" slot="reference">
                      <img src="@/assets/profile_earth.png" alt="" />
                    </a>
                  </el-popover>
                </div>
                <div class="user_edit">
                  <el-button plain>编辑个人资料</el-button>
                </div>
              </div>
            </el-col>
          </el-row>
          <el-divider></el-divider>
          <el-row type="flex" class="row-bg" justify="space-between">
            <el-col :span="6">
              <div class="grid-content bg-purple bottom-right">
                <img :src="bulb" alt="" />
                <span>获得徽章{{ i }}</span>
              </div>
            </el-col>

            <el-col :span="6">
              <div class="grid-content bg-purple bottom-left">
                <i class="el-icon-arrow-right" style="font-size: 1.125rem"></i>
              </div>
            </el-col>
          </el-row>
        </el-header>
        <el-main class="profileMain">
          <el-tabs v-model="activeName">
            <el-tab-pane label="动态" name="first">
              <div class="infinite-list-wrapper" style="overflow: hidden">
                <ul
                  class="list"
                  v-infinite-scroll="load"
                  infinite-scroll-disabled="disabled"
                >
                  <li v-for="i in count" class="list-item">
                    <el-row style="margin: 18px 0">
                      <el-col :span="24">
                        <el-card class="box-card" shadow="hover">
                          <div slot="header" class="clearfix">
                            <span
                              ><el-avatar
                                icon="el-icon-user-solid"
                                :size="60"
                              ></el-avatar>
                              <ul
                                style="display: inline-block; margin-left: 20px"
                              >
                                <li
                                  style="
                                    margin-bottom: 17px;
                                    font-size: 1.25rem;
                                  "
                                >
                                  用户9126032394298
                                </li>
                                <li>{{ i }}天前</li>
                              </ul>
                            </span>

                            <el-button
                              class="deleteBtn"
                              style="
                                float: right;
                                padding: 30px 0;
                                cursor: pointer;
                              "
                              @click="deleteli(i - 1)"
                              type="text"
                              >删除</el-button
                            >
                            <div
                              style="
                                padding-left: 80px;
                                margin-top: 1.375rem;
                                font-size: 1.0625rem;
                              "
                            >
                              {{ contents[i - 1].content }}
                            </div>
                            
                          </div>
                          <div
                            style="display: flex; justify-content: space-around"
                          >
                            <i
                              class="el-icon-share"
                              style="color: rgb(162, 170, 179)"
                              >分享</i
                            >
                            <i
                              class="el-icon-chat-dot-square"
                              style="color: rgb(162, 170, 179)"
                              >评论</i
                            >
                            <i class="" style="color: rgb(162, 170, 179)"
                              >点赞</i
                            >
                          </div>
                        </el-card>
                      </el-col>
                    </el-row>
                  </li>
                </ul>
                <p v-if="loading"></p>
                <p
                  v-if="noMore"
                  style="
                    text-align: center;
                    font-size: large;
                    font-weight: 700;
                    margin-top: 0.9375rem;
                    color: rgb(162, 170, 179);
                  "
                >
                  没有更多了
                </p>
              </div>
            </el-tab-pane>
            <el-tab-pane label="文章" name="second"
              ><el-empty
                description="这里什么都没有"
                style="height: 600px"
              ></el-empty
            ></el-tab-pane>
            <el-tab-pane label="专栏" name="third"
              ><el-empty
                description="这里什么都没有"
                style="height: 600px"
              ></el-empty
            ></el-tab-pane>
            <el-tab-pane label="沸点" name="fourth"
              ><el-empty
                description="这里什么都没有"
                style="height: 600px"
              ></el-empty
            ></el-tab-pane>
            <el-tab-pane label="收藏集" name="fifth"
              ><el-empty
                description="这里什么都没有"
                style="height: 600px"
              ></el-empty
            ></el-tab-pane>
            <el-tab-pane label="关注" name="sixth"
              ><el-empty
                description="这里什么都没有"
                style="height: 600px"
              ></el-empty
            ></el-tab-pane>
            <el-tab-pane label="赞 0⬇" name="seventh"
              ><el-empty
                description="这里什么都没有"
                style="height: 600px"
              ></el-empty
            ></el-tab-pane>
          </el-tabs>
        </el-main>
      </el-container>
      <el-aside
        class="profileAside"
        width="18.75rem"
        style="
          position: fixed;
          top: 1.875rem;
          left: 67%;
          max-height: 19.5rem;
          background-color: rgb(244, 245, 245);
        "
      >
        <div class="profileAside_top">
          <div>
            <div>关注了</div>
            <div style="text-align: center; margin-top: 0.75rem">6</div>
          </div>
          <el-divider direction="vertical"></el-divider>
          <div>
            <div>关注者</div>
            <div style="text-align: center; margin-top: 0.75rem">3</div>
          </div>
        </div>
        <div data-v-0f3a03ae="" data-v-8ec00994="" class="more-block block">
          <a
            style="
              border-top: 0.0625rem solid rgba(230, 230, 231, 0.5);
              margin-top: 0.9375rem;
              justify-content: space-between;
            "
            data-v-0f3a03ae=""
            href="/user/2291845638134109/collections"
            class="more-item"
            data-v-8ec00994=""
          >
            <div data-v-0f3a03ae="" class="item-title">收藏集</div>
            <div data-v-0f3a03ae="" class="item-count">1</div></a
          ><a
            data-v-0f3a03ae=""
            href="/user/2291845638134109/tags"
            class="more-item"
            data-v-8ec00994=""
            style="justify-content: space-between"
            ><div data-v-0f3a03ae="" class="item-title">关注标签</div>
            <div data-v-0f3a03ae="" class="item-count">7</div></a
          >
          <div
            data-v-0f3a03ae=""
            data-v-8ec00994=""
            class="more-item"
            style="
              border-bottom: 0.0625rem solid rgba(230, 230, 231, 0.5);
              justify-content: space-between;
            "
          >
            <div data-v-0f3a03ae="" data-v-8ec00994="" class="item-title">
              加入于
            </div>
            <div data-v-0f3a03ae="" data-v-8ec00994="" class="item-count">
              <time
                data-v-0f3a03ae=""
                data-v-8ec00994=""
                datetime="2022-07-01T01:48:09.000Z"
                title="2022-07-01 09:48:09"
                class="time"
                >2022-07-01</time
              >
            </div>
          </div>
        </div>
      </el-aside>
    </el-container>
  </div>
</template>

<script>
import profileDon from "@/components/profileDon/index.vue";
import profileAside from "@/components/profileAside/index.vue";
import ProfileAside from "../../components/profileAside/index.vue";

export default {
  name: "Myprofile",
  components: { profileDon, profileAside, ProfileAside },
  data() {
    return {
      count: 5,
      loading: false,
      circleUrl:
        "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
      grade:
        "https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/65a6a28f15d70e5a77bf881c5ec5340d.svg",
      bulb: "https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/badge-count-icon.0586ac4.png",
      i: "0",
      profilesearch:
        "https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/4faa6e4d3204581da39135d50cec3f73.svg",
      activeName: "first",
      contents: [
        {
          content:
            "8月2日,今天学习了《web 跨域请求安全问题浅谈》，了解到了几种不同的跨域是需要注意的问题",
        },
        {
          content: "今天了解到了响应式布局RWD",
        },
        {
          content: "哈哈哈哈哈哈哈哈哈哈哈哈哈",
        },
        {
          content: "噢噢噢噢噢噢噢噢噢噢噢噢噢",
        },
        {
          content: "啊实打实大苏打实打实的",
        },
        {
          content: "12今年萨迪娜送餐",
        },
        {
          content: "在下十八点擦拭吵闹i市场闹事",
        },
        {
          content: "按时打算辞职相差稳定器迫使才能去宋朝",
        },
        {
          content: "，了解到了几种不同的跨域是需要注意的问题",
        },
        {
          content: "0词穷出去买四处去农村去啊",
        },
        {
          content:
            "8月3日,今天学习了《web 跨域请求安全问题浅谈》，了解到了几种不同的跨域是需要注意的问题",
        },
        {
          content:
            "8啊啊饿啊饿我认罚安全问题浅谈》,了解到了几种不同的跨域是需要注意的问题",
        },
        {
          content: "8月3日安文丰违法安文丰了几种不同的跨域是需要注意的问题",
        },
        {
          content: "啊未发未发未发未发域是需要注意的问题",
        },
      ],
    };
  },
  computed: {
    noMore() {
      return this.count >= this.contents.length;
    },

    disabled() {
      return this.loading || this.noMore;
    },
  },
  methods: {
    deleteli(id) {
      let del = document.getElementsByClassName("deleteBtn");
      console.log(
        del[id].parentNode.parentNode.parentNode.parentNode.parentNode
          .parentNode
      );
      del[
        id
      ].parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.className =
        "list-item-none";
    },
    load() {
      this.loading = true;
      setTimeout(() => {
        if (
          window.innerHeight + window.scrollY >=
          document.body.offsetHeight - 100
        ) {
          // you're at the bottom of the page
          this.count += 1;
        }
        this.loading = false;
      }, 800);
    },
  },
};
</script>

<style>
body {
  background-color: rgb(244, 245, 245);
}
.profileHeader {
  justify-content: space-between;
  box-sizing: border-box;
  border-radius: 0.125rem;
}

.profileHeader .user_bundle img {
  width: 1.5rem;
  height: 1.5rem;
}
.profileHeader .user_bundle {
  display: flex;
  justify-content: space-around;
  width: 7.875rem;
  margin-left: 3.5rem;
}
.profileHeader .user_edit {
  margin-top: 3.25rem;
  text-align: right;
}
.profileHeader .user_edit .el-button {
  padding: 0.4375rem 0.625rem;
  font-size: 1.25rem;
  border-color: rgb(55, 128, 247);
  color: rgb(55, 128, 247);
}
.profileHeader .user {
  font-size: 1.9375rem;
  font-weight: 700;
  text-align: center;
}
.profileHeader .block {
  padding-top: 1.25rem;
}
.profileHeader .user img {
  padding-bottom: 1%;
}
.profileHeader .el-main div:nth-child(2) {
  margin-top: 1.25rem;
}
.profileHeader .el-main div:nth-child(3) {
  margin-top: 0.875rem;
}
.profileHeader .el-main div:nth-child(n + 2) {
  padding-left: 1.1rem;
}
.profileHeader a {
  color: rgb(74, 154, 215);
  font-size: 1.25rem;
}
.profileHeader .el-row {
  margin-bottom: 20px;
}
.profileHeader .el-col {
  border-radius: 4px;
}
.profileHeader .grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.profileHeader .el-divider--horizontal {
  margin: 1rem 1.1875rem !important;
  width: 97% !important;
}
.profileHeader .bottom-right {
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 8.5rem;
  padding-left: 1.125rem;
  font-size: 1.375rem;
  text-align: left;
}
.profileHeader .bottom-left {
  display: flex;
  justify-content: end;
  align-items: center;
}
.profileHeader .bottom-right img {
  height: 1.5625rem;
  width: 1.5625rem;
}
/* main */
.profileMain {
  position: relative;
  padding-top: 0.625rem;
  margin-top: 1.875rem;
  background-color: rgb(255, 255, 255);
  border-radius: 0.125rem;
}
.el-main {
  padding: 0.75rem 1.25rem !important;
}
.profileMain .el-tabs .el-tabs__item {
  font-size: 1.25rem;
}
.profileMain .el-tabs__nav {
  height: 3.375rem;
}
.profileMain .el-tabs__nav-scroll {
  height: 3.375rem;
}
.profileMain .el-tabs__nav::after {
  content: url(https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/4faa6e4d3204581da39135d50cec3f73.svg);
  margin-left: 18rem;
  cursor: pointer;
}
.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}

.profileMain .list-item-none {
  display: none;
  transition: all 1s 0s ease-out;
}
/* 旁边的一栏 */
.profileAside {
  border-radius: 0.125rem;
}
.profileAside_top {
  box-sizing: border-box;
  background-color: white;
  display: flex;
  justify-content: space-evenly;
  height: 5.9375rem;
  padding: 1.25rem;
  font-size: 1.25rem;
}
.profileAside_top .el-divider {
  background-color: #f3f3f4;
  position: relative;
}
.profileAside_top .el-divider--vertical {
  display: inline-block;
  width: 0.0625rem;
  height: 2.5em !important;
  margin: 0 0.5rem;
  vertical-align: middle;
  position: relative;
  color: rgb(251, 251, 251);
}
.more-block[data-v-0f3a03ae] {
  background-color: transparent;
}
.minor-area[data-v-0f3a03ae] {
  flex: 0 0 auto;
  margin-left: 1rem;
  width: 20rem;
  line-height: 1.2;
}
.more-block .more-item[data-v-0f3a03ae] {
  display: flex;
  padding: 1.25rem 0.417rem;
  font-size: 1.2rem;
  color: #000;
  border-top: 0.0625rem solid rgba(230, 230, 231, 0.5);
}
a {
  text-decoration: none;
  cursor: pointer;
  color: #909090;
}
</style>
