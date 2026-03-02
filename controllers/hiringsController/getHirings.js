import Job from '../../models/job_role.js';

// @desc    Get all roles
// @route   GET /api/roles
// @access  Private
export const getHirings = async (req, res) => {
    try {
        const roles = await Job.find({ status: "ACTIVE" }, { _id: 0, created_by: 0, __v: 0, last_updated: 0, createdAt: 0, updatedAt: 0 });
        res.json(roles);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

