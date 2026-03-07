import Upcomming from '../../models/upcomming.js';

// @desc    Create one or multiple new Batches
// @route   POST /api/v1/courses/upcomming
// @access  Private/Admin

export const createBatch = async (req, res) => {
    try {
        const upcommingBatches = Array.isArray(req.body) ? req.body : [req.body];

        if (!upcommingBatches.length) {
            return res.status(400).json({ message: 'No Batches data provided' });
        }

        const success = [];
        const failed = [];

        for (const upcommingBatch of upcommingBatches) {
            try {
                const upcomming = new Upcomming(upcommingBatch);
                const savedBatch = await upcomming.save();
                success.push(savedBatch._id);
            } catch (error) {
                failed.push({
                    data: upcommingBatch,
                    error: error.message
                });
            }
        }

        if (!success.length) {
            return res.status(400).json({
                message: 'No New Batch were created',
                failed
            });
        }

        res.status(201).json({
            message: 'Upcomming Batch processing completed',
            created_count: success.length,
            failed_count: failed.length,
            upcomming_batches_id: success,
            failed
        });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};