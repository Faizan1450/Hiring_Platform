import Job from '../../models/job_role.js';

// @desc    Update a role
// @route   PUT /api/roles/:id
// @access  Private/Admin
export const updateHiring = async (req, res) => {
    const { company_name, company_logo_url, role, job_type, min_salary, max_salary, location, job_mode, skills, degree, cgpa, min_experience, max_experience, platform, redirected_link, start_date, close_date, status, is_featured, created_by, last_updated } = req.body;

    const job_role = await Job.findById(req.params.id);

    if (job_role) {
        job_role.company_name = company_name || job_role.company_name;
        job_role.company_logo_url = company_logo_url || job_role.company_logo_url;
        job_role.role = role || job_role.role;
        job_role.job_type = job_type || job_role.job_type;
        job_role.min_salary = min_salary || job_role.min_salary;
        job_role.max_salary = max_salary || job_role.max_salary;
        job_role.location = location || job_role.location;
        job_role.job_mode = job_mode || job_role.job_mode
        job_role.skills = skills || job_role.skills;
        job_role.degree = degree || job_role.degree;
        job_role.cgpa = cgpa || job_role.cgpa;
        job_role.min_experience = min_experience || job_role.min_experience;
        job_role.max_experience = max_experience || job_role.max_experience;
        job_role.platform = platform || job_role.platform;
        job_role.redirected_link = redirected_link || job_role.redirected_link;
        job_role.start_date = start_date || job_role.start_date;
        job_role.close_date = close_date || job_role.close_date;
        job_role.status = status || job_role.status;
        job_role.is_featured = is_featured || job_role.is_featured;
        job_role.created_by = created_by || job_role.created_by;
        job_role.last_updated = last_updated || job_role.last_updated;

        const updatedRole = await job_role.save();
        res.send(updatedRole);
    } else {
        res.status(404).json({ message: 'Role not found' });
    }
};

