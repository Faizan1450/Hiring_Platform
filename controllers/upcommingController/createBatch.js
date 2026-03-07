import Upcomming from '../../models/upcomming.js';

// @desc    Replace all upcoming batches
// @route   POST /api/v1/courses/upcomming
// @access  Private/Admin

export const createBatch = async (req, res) => {
    try {
        const upcommingBatches = Array.isArray(req.body) ? req.body : [req.body];

        if (!upcommingBatches.length) {
            return res.status(400).json({
                message: 'No batch data provided'
            });
        }

        // Remove all existing records
        await Upcomming.deleteMany({});

        // Insert fresh records
        const insertedBatches = await Upcomming.insertMany(upcommingBatches);

        res.status(201).json({
            message: 'Upcoming batches replaced successfully',
            count: insertedBatches.length,
            data: insertedBatches
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};