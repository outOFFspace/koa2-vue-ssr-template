<template>
    <div class="footer">
        <div class="container">
            <div class="row">
                <div class="col-md-12 col-sm-12">
                    <div class="white-color">{{year}}, Koa2 Vue2 StarterKit</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        name: 'main-footer',
        data() {
            return {
                year: (new Date()).getFullYear()
            }
        }
    }
</script>
