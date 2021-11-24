const ReportModel = require('./report-model');

const getAllReport = async (req, res, next) => {
    try{
        const reports = await ReportModel.find();
        res.send({
            success: 1,
            data: reports
        })
    }
    catch (err) {
        next(err);
    }
}

const getReportById = async (req, res) => {
    try{
        const {reportId} = req.params;
        const foundReports = await ReportModel.findById(reportId);
        res.send({
            success: 1,
            data: foundReports
        })
    }
    catch (err) {
        next(err);
    }
}

const createNewReport = async (req, res) => {
    try {
        const { user } = req;
        const newReportData = req.body; 
        const newReport = await ReportModel.create({
          ...newReportData,
          createdBy: user._id
        });
    
        res.send({
          success: 1,
          data: newReport,
        });
      } catch (err) {
        next(err);
      }
}

const updateReport = async (req, res) => {
    try{
        const { reportId } = req.params;
        const updateReportData = req.body;

        const updatedReport = await ReportModel.findByIdAndUpdate(reportId,updateReportData, {new: true});

        res.send({
            success: 1,
            data: updatedReport
        })
    }
    catch (err) {
        next(err);
    }
}

module.exports = {
    getAllReport,
    getReportById,
    createNewReport,
    updateReport,
}