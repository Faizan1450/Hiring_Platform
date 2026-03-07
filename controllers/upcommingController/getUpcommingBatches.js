import Upcomming from '../../models/upcomming.js';

// @desc    Get all roles
// @route   GET /api/roles
// @access  Private
export const getUpcommingBatches = async (req, res) => {
    try {
        const upcommingBatches = await Upcomming.find({}, {
            _id: 0, __v: 0, createdAt: 0, updatedAt: 0
        });
        res.json(upcommingBatches);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

