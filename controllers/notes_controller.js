module.exports = {
  async test(req, res, next) {
    let resObj = {
      plz: "work"
    }
    res.send(resObj);
  }
}
