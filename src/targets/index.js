module.exports = (targetables) => {
    const mainComponent = targetables.reactComponent(
        '@magento/venia-ui/lib/components/Main/main.js'
    );
    mainComponent.addImport(
        "import TopBarNotification from '@magenable/top-bar-notification/src/components/Notification'"
    );
    mainComponent.insertBeforeJSX(
        '<Header />',
        '<TopBarNotification />'
    );
}
