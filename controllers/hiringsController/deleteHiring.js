import Job from '../../models/job_role.js';

// @desc    Delete a role
// @route   delete /api/roles/:id
// @access  Private/Admin
export const deleteHiring = async (req, res) => {
    try {
        const jobId = req.params.id;

        if (!jobId) {
            return res.status(400).json({ message: 'Job Id is required' });
        }

        const deletedJob = await Job.findByIdAndDelete(jobId);

        if (!deletedJob) {
            return res.status(404).json({ message: 'Job not found' });
        }

        return res.status(200).json({
            message: 'Job deleted successfully',
            data: deletedJob
        });
    } catch (error) {
        return res.status(500).json({
            message: 'Internal server error',
            error: error.message
        });
    }
};

