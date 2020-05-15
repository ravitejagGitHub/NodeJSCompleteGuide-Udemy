const getPageNotFound = (req, res, next) => {
    // res.status(404).sendFile(path.join(rootDir, 'view', '404.html'));
    res.status(404).render('404', {
        pageTitle: 'Page Not Found'
    });
 }

 module.exports = {
     getPageNotFound
 }