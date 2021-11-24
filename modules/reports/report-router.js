const express = require('express');
const router = express.Router();
const reportController = require('./report-controller');
const isAuth = require('../common/middlewares/isAuth');

/* /api/posts */
router.get('/', reportController.getAllReport)
router.get('/:postId',reportController.getReportById)
router.post('/',isAuth,reportController.createNewReport)
router.put('/:ReportId',isAuth,reportController.updateReport)

module.exports = router;