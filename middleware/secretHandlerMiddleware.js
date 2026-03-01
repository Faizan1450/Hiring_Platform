

// @desc    Authentication for Database modifications
// @access  Private
export const secretHandlerMiddleware = async (req, res, next) => {
    try {
        if (req.get("SCALIVE_SECRET") !== process.env.SCALIVE_SECRET) {
            return res.status(401).json({
                status: 401,
                message: "You are not authorised"
            });
        }
        next();
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

