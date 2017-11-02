import Vue from "vue";
import VueRouter from "vue-router";

import App from "./app.vue";
import headVue from "./components/head.vue";
import footerVue from "./components/footer.vue";

Vue.component("headerVue", headVue);
Vue.component("footerVue", footerVue);

import Music from "./components/music.vue";
import MusicHuaer from "./components/music_huaer.vue";
import MusicPushu from "./components/music_pushu.vue";

import Movie from "./components/movie.vue";
import MovieGuochan from "./components/movie_guochan.vue";
import MovieOumei from "./components/movie_oumei.vue";

Vue.use(VueRouter);

let router = new VueRouter({
    routes: [{
            name: "music",
            path: "/music",
            component: Music,
            children: [{
                name: "music_huaer",
                path: "huaer",
                component: MusicHuaer
            }, {
                name: "music_pushu",
                path: "pushu",
                component: MusicPushu
            }]
        },
        {
            name: "movie",
            path: "/movie",
            component: Movie,
            children: [{
                name: "movie_guochan",
                path: "guochan",
                component: MovieGuochan
            }, {
                name: "movie_oumei",
                path: "oumei",
                component: MovieOumei
            }]
        }
    ]
});

new Vue({
    el: "#app",
    router,
    render: c => c(App)
})