const Util = {
  convertToDeg(rad) {
    return (rad * 180) / Math.PI;
  },

  convertToRads(deg) {
    return (deg * Math.PI) / 180;
  }
};

module.exports = Util;