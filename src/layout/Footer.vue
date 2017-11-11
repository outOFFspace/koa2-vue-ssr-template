<template>
    <div class="footer">
        <div class="container">
            <div class="row">
                <div class="col-md-4 col-sm-6">
                    <ul class="heading text-xs-center">
                        <li>About</li>
                        <li><img class="img-logo" src="/images/logo.png" alt="Logo"></li>
                        <li>
                            <p class="about-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum</p>
                        </li>
                        <li>
                            <div class="social-icons"><a href="#"><i class="fa fw fa-google-plus"></i></a><a href="#"><i class="fa fw fa-facebook"></i></a><a href="#"><i class="fa fw fa-pinterest-p"></i></a><a href="#"><i class="fa fw fa-twitter"></i></a></div>
                        </li>
                    </ul>
                </div>
                <div class="col-md-2 col-sm-6 clear">
                    <ul class="heading">
                        <li>Important</li>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Features</a></li>
                        <li><a href="#">Pricing</a></li>
                        <li><a href="#">Testimonial</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>
                <div class="col-md-2 col-sm-6">
                    <ul class="heading">
                        <li>Support</li>
                        <li><a href="#">Product Support</a></li>
                        <li><a href="#">Support Center</a></li>
                        <li><a href="#">Knowledge Base</a></li>
                        <li><a href="#">Tutorials</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        name: 'footer',
        data() {
            return {
                year: (new Date()).getFullYear()
            }
        }
    }
</script>

<i18n>
    {
    "ru": {
    "Служба заботы о пользователях": "Служба заботы о пользователях",
    "Все права защищены": "Все права защищены",
    "возврата средств": "возврата средств",
    "для застройщиков": "для застройщиков",
    "Википедия": "Википедия",
    "Реклама на сайте": "Реклама на сайте",
    "Компания": "Компания",
    "Помощь": "Помощь",
    "Карта сайта": "Карта сайта",
    "о": "о",
    "с": "с",
    "Политика конфиденциальности": "Политика конфиденциальности",
    "Мобильное приложение": "Мобильное приложение",
    "Помощь по сайту": "Помощь по сайту",
    "Предложения для риелторов и агентств недвижимости": "Предложения для риелторов и агентств недвижимости",
    "Безопасные сделки": "Безопасные сделки"
    },
    "uk": {
    "Служба заботы о пользователях": "Служба турботи про користувачів",
    "Все права защищены": "Всі права захищено",
    "возврата средств": "повернення коштів",
    "для застройщиков": "для забудовників",
    "Википедия": "Вікіпедія",
    "Карта сайта": "Мапа сайту",
    "Компания": "Компанія",
    "Помощь": "Допомога",
    "Политика конфиденциальности": "Політика конфіденційності",
    "о": "про",
    "с": "з",
    "Реклама на сайте": "Реклама на сайті",
    "Мобильное приложение": "Мобільний додаток",
    "Помощь по сайту": "Допомога по сайту",
    "Предложения для риелторов и агентств недвижимости": "Пропозиції для ріелторів та агентств нерухомості",
    "Безопасные сделки": "Безпечні угоди"
    }
    }
</i18n>
