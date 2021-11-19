export default (includeUrls, excludeUrls) => {
    const inArrayCheck = (url) => {
        return url === document.location.pathname;
    };
    if (includeUrls) {
        return includeUrls.split('\r\n').some(inArrayCheck);
    }
    if (excludeUrls) {
        return !excludeUrls.split('\r\n').some(inArrayCheck);
    }

    return true;
}
