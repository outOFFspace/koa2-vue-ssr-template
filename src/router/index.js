import Vue from 'vue'
import Router from 'vue-router'
import Page404 from '../pages/404.vue'

Vue.use(Router)

export function createRouter() {
    return new Router({
        mode: 'history',
        routes: [
            {
                path: '/',
                redirect: '/en/'
            },
            {
                path: '/:lang/',
                name: 'home',
                component: () => import('../pages/MainPage.vue')
            },
            {
                name: 'contacts',
                path: '/:lang/contacts',
                component: () => import('../pages/Contacts.vue')
            }
        ]
            .concat([
                {
                    path: '*',
                    component: Page404
                }
            ])
    })
}
