const viewPath = ('pages');

exports.contact = (req, res) => {
  res.render(`${viewPath}/contact`, {
    pageTitle: 'Contact'
  });
};
