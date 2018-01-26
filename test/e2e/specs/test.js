// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
    'main user page': function test(browser) {
        const devServer = browser.globals.devServerURL
        browser
            .url(devServer)
            .waitForElementVisible('#app', 5000)
            .end()
    }
}
