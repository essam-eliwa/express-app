import { Router } from 'express';
var router = Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('About this wiki');
});
console.log("about router");
export default router;
