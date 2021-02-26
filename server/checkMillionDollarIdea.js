const checkMillionDollarIdea = (req, res, next) => {
  //numWeeks * weeklyRevenue = totalRev
  const { numWeeks, weeklyRevenue } = req.body;
  const totalRevenue = numWeeks * weeklyRevenue;
  if (!numWeeks || !weeklyRevenue || isNaN(totalRevenue) || totalRevenue < 1000000) {
    res.status(400).send();
  } else {
    next();
  }
};

// Leave this exports assignment so that the function can be used elsewhere
module.exports = checkMillionDollarIdea;
