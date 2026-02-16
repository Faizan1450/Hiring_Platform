import Job from '../../models/job_role.js';

// @desc    Create a new role
// @route   POST /api/roles
// @access  Private/Admin
export const createHiring = async (req, res) => {
    const hiring = req.body;
    try {
        const {company_name, company_logo_url, role, job_type, min_salary, max_salary, location, job_mode, skills, degree, cgpa, min_experience, max_experience, platform, redirected_link, start_date, close_date, status, is_featured, created_by, last_updated } = hiring;


        const job_role = new Job({
            company_name, company_logo_url, role, job_type, min_salary, max_salary, location, job_mode, skills, degree, cgpa, min_experience, max_experience, platform, redirected_link, start_date, close_date, status, is_featured, created_by, last_updated
        });

        const createdRole = await job_role.save();
        res.status(201).json({ job_id: createdRole._id });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};