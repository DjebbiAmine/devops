const miscServices = require("../services/auth.services");
// here chang in commit-1
exports.login = async (req, res, next) => {
  const id = req.query.id;
  const password = req.query.password;

  await miscServices
    .login(id, password)
    .then((dat) => res.json(dat))
    .catch((err) => next(err));
};
// third before last in feature/day1_api_fixes
