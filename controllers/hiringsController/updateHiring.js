import Job from '../../models/job_role.js';

// @desc    Update a role
// @route   PUT /api/roles/:id
// @access  Private/Admin
export const updateHiring = async (req, res) => {
    try {
        if (typeof req.body.skills === 'string') {
            req.body.skills = req.body.skills
                .split(',')
                .map(skill => skill.trim())
                .filter(Boolean);
        }
        if (typeof req.body.locaton === 'string') {
            req.body.locaton = req.body.locaton
                .split(',')
                .map(skill => skill.trim())
                .filter(Boolean);
        }

        if (typeof req.body.degree === 'string') {
            req.body.degree = req.body.degree
                .split(',')
                .map(skill => skill.trim())
                .filter(Boolean);
        }
        const updatedRole = await Job.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            {
                returnDocument: 'after',      // return updated document
                runValidators: true // respect schema validations
            }
        );

        if (!updatedRole) {
            return res.status(404).json({ message: 'Role not found' });
        }

        res.json(updatedRole);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};