import Job from '../../models/job_role.js';

// @desc    Get all roles
// @route   GET /api/roles
// @access  Private
export const getHirings = async (req, res) => {
    try {
        const roles = await Job.find({ status: "ACTIVE" });
        res.json(roles);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

