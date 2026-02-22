import Job from '../../models/job_role.js';

// @desc    Create one or multiple new roles
// @route   POST /api/v1/hirings
// @access  Private/Admin

export const createHiring = async (req, res) => {
    try {
        const hirings = Array.isArray(req.body) ? req.body : [req.body];

        if (!hirings.length) {
            return res.status(400).json({ message: 'No hiring data provided' });
        }

        const success = [];
        const failed = [];

        for (const hiring of hirings) {
            try {
                const job = new Job(hiring);
                const savedJob = await job.save();

                success.push(savedJob._id);
            } catch (error) {
                failed.push({
                    data: hiring,
                    error: error.message
                });
            }
        }

        if (!success.length) {
            return res.status(400).json({
                message: 'No hiring roles were created',
                failed
            });
        }

        res.status(201).json({
            message: 'Hiring processing completed',
            created_count: success.length,
            failed_count: failed.length,
            job_ids: success,
            failed
        });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};