// import Vue from 'vue'
import Header from '@/layout/Header.vue'

describe('UserMainPage', () => {
    it('header', () => {
        expect(Header.components).to.have.property('LangSwitcher')
        expect(typeof Header.created).to.be.equal('function')
    })
})
