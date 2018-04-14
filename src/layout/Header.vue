<template>
    <nav v-bind:class="`navbar navbar-default navigation-style navbar-fixed-top ${className}`">
        <div class="container container-style">
            <!--START MOBILE NAVIGATION-->
            <div class="navbar-container">
                <div class="screen" v-bind:style="`display:${mobileMenuStyle}`">
                    <div v-bind:class="`menu-bg ${animateClass}`"></div>
                    <div class="menu">
                        <ul class="menu-splitL">
                            <li><router-link :to="{name: 'home', params: {lang: $i18n.locale}}">{{$t('Home')}}</router-link></li>
                            <li><router-link :to="{name: 'home', params: {lang: $i18n.locale}, '#':'features'}">{{$t('Features')}}</router-link></li>
                            <li><router-link :to="{name: 'contacts', params: {lang: $i18n.locale}}">{{$t('Contacts')}}</router-link></li>
                            <li><a class="login-btn" href="javascript:;">Login</a></li>
                            <li class="active"><a class="btn btn-bordered btn-sm sign-up-btn" href="javascript:;"><span>Sign Up</span></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <!--END MOBILE NAVIGATION-->
            <div class="navbar-header">
                <div v-bind:class="`burger navbar-toggle ` + openClass" @click="openMenu">
                    <div v-bind:class="`x ${burgerMenu.x}`"></div>
                    <div class="y" v-bind:style="burgerMenu.y"></div>
                    <div v-bind:class="`z ${burgerMenu.z}`"></div>
                </div>
                <router-link :to="{name: 'home', params: {lang: $i18n.locale}}">
                    <img class="img-responsive header-logo" src="/images/logo.png">
                </router-link>
            </div>
            <div class="navbar-collapse nav-mobile" id="navbar">
                <ul class="nav navbar-nav navigation-top">
                    <li class="active">
                        <router-link :to="{name: 'home', params: {lang: $i18n.locale}}">{{$t('Home')}}</router-link>
                    </li>
                    <li><a v-bind:href="`/${$i18n.locale}#features`">{{$t('Features')}}</a></li>
                    <li><router-link :to="{name: 'contacts', params: {lang: $i18n.locale}}">{{$t('Contacts')}}</router-link></li>
                </ul>
                <ul class="nav navbar-nav navbar-right">
                    <li><a class="login-btn" href="javascript:;" data-toggle="modal" data-target="#loginModal">{{$t('Login')}}</a>
                    </li>
                    <li class="active">
                        <button class="btn btn-bordered btn-sm sign-up-btn" type="button" data-toggle="modal"
                                data-target="#loginModal"><span>{{$t('Sign Up')}}</span>
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
    import LangSwitcher from '../components/ui/LangSwitcher.vue'

    export default {
        name: 'main-header',
        data() {
            return {
                className: '',
                openClass: '',
                animateClass: '',
                mobileMenuStyle: 'none',
                burgerMenu: {
                    x: '',
                    y: '',
                    z: ''
                }
            }
        },
        components: {
            LangSwitcher
        },
        methods: {
            openMenu() {
                this.openClass = this.openClass === 'open' ? '' : 'open'
                this.mobileMenuStyle = this.mobileMenuStyle === 'none' ? 'block;' : 'none'
                this.animateClass = this.animateClass === '' ? 'animate' : ''
                this.burgerMenu.y = this.burgerMenu.y === '' ? 'display: none' : ''
                this.burgerMenu.x = this.burgerMenu.x === '' ? 'collapse rotate30 rotate45' : ''
                this.burgerMenu.z = this.burgerMenu.z === '' ? 'collapse rotate150 rotate135' : ''
            },
            fixMenu(y) {
                this.className = y > 100 ? 'top-nav-collapse' : ''
            }
        },
        created() {
            if (process.env.VUE_ENV === 'client') {
                window.addEventListener('scroll', () => {
                    this.fixMenu(window.scrollY)
                })
            }
        }
    }
</script>

