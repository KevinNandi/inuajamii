 module.exports = (theFunc) => (re, res, next) => {
    promise.resolve(theFunc(req,res,next)).catch(next);
 };