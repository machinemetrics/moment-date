
var _MomentDate = (function(root) {

  var __extends = function (child, parent) {
    for (var key in parent) {
      if (Object.prototype.hasOwnProperty.call(parent, key))
        child[key] = parent[key];
    }

    function Ctor() {
      this.constructor = child;
    }

    Ctor.prototype = parent.prototype;
    child.prototype = new Ctor();
    child.__super__ = parent.prototype;

    return child;
  };

  var isNode = (typeof module !== "undefined" && module !== null ? module.exports : void 0) != null;
  var momentLib = isNode ? require('moment-timezone') : moment;

  var MomentDate = (function (_super) {
    __extends(MomentDate, _super);

    function MomentDate() {
      var args = Array.prototype.slice.call(arguments);
      var lastArg = args[args.length - 1];
      var timeZone = undefined;

      if (args.length > 1 && ((lastArg == null) || typeof lastArg === 'string'))
        timeZone = args.pop();
      if (args.length === 1)
        args = args[0];

      if (timeZone) {
        this._moment = momentLib.tz(args, timeZone);
        this._timeZone = timeZone;
      } else {
        this._moment = momentLib(args);
      }
    }

    MomentDate.prototype._fromUtc = function () {
      this._moment = momentLib.tz(this._utcMoment, this._timeZone);
      return this._moment;
    };

    MomentDate.prototype._fromMomentArg = function (arg) {
      this._moment = momentLib.tz(arg, this._timeZone);
      return this._getForSetter();
    };

    MomentDate.prototype._getUtc = function () {
      return this._utcMoment != null ? this._utcMoment : this._utcMoment = this._moment.clone().utc();
    };

    MomentDate.prototype._getForSetter = function () {
      this._utcMoment = null;
      return this._moment;
    };

    MomentDate.prototype.getDate = function () {
      return this._moment.date();
    };

    MomentDate.prototype.getDay = function () {
      return this._moment.day();
    };

    MomentDate.prototype.getFullYear = function () {
      return this._moment.year();
    };

    MomentDate.prototype.getHours = function () {
      return this._moment.hours();
    };

    MomentDate.prototype.getMilliseconds = function () {
      return this._moment.milliseconds();
    };

    MomentDate.prototype.getMinutes = function () {
      return this._moment.minutes();
    };

    MomentDate.prototype.getMonth = function () {
      return this._moment.month();
    };

    MomentDate.prototype.getSeconds = function () {
      return this._moment.seconds();
    };

    MomentDate.prototype.getTime = function () {
      return this._moment.valueOf();
    };

    MomentDate.prototype.getTimezoneOffset = function () {
      return 0 - this._moment.utcOffset();
    };

    MomentDate.prototype.getUTCDate = function () {
      return this._getUtc().date();
    };

    MomentDate.prototype.getUTCDay = function () {
      return this._getUtc().day();
    };

    MomentDate.prototype.getUTCFullYear = function () {
      return this._getUtc().year();
    };

    MomentDate.prototype.getUTCHours = function () {
      return this._getUtc().hours();
    };

    MomentDate.prototype.getUTCMilliseconds = function () {
      return this._getUtc().milliseconds();
    };

    MomentDate.prototype.getUTCMinutes = function () {
      return this._getUtc().minutes();
    };

    MomentDate.prototype.getUTCMonth = function () {
      return this._getUtc().month();
    };

    MomentDate.prototype.getUTCSeconds = function () {
      return this._getUtc().seconds();
    };

    MomentDate.prototype.getYear = function () {
      throw new Error('getYear() is deprecated - use getFullYear() instead.');
    };

    MomentDate.prototype.setDate = function (value) {
      return this._getForSetter().date(value);
    };

    MomentDate.prototype.setFullYear = function (value) {
      return this._getForSetter().year(value);
    };

    MomentDate.prototype.setHours = function (value) {
      return this._getForSetter().hours(value);
    };

    MomentDate.prototype.setMilliseconds = function (value) {
      return this._getForSetter().milliseconds(value);
    };

    MomentDate.prototype.setMinutes = function (value) {
      return this._getForSetter().minutes(value);
    };

    MomentDate.prototype.setMonth = function (value) {
      return this._getForSetter().month(value);
    };

    MomentDate.prototype.setSeconds = function (value) {
      return this._getForSetter().seconds(value);
    };

    MomentDate.prototype.setTime = function (value) {
      return this._fromMomentArg(momentLib.unix(value / 1000));
    };

    MomentDate.prototype.setUTCDate = function (value) {
      return this._fromUtc(this._getUtc().date(value));
    };

    MomentDate.prototype.setUTCFullYear = function (value) {
      return this._fromUtc(this._getUtc().year(value));
    };

    MomentDate.prototype.setUTCHours = function (value) {
      return this._fromUtc(this._getUtc().hours(value));
    };

    MomentDate.prototype.setUTCMilliseconds = function (value) {
      return this._fromUtc(this._getUtc().milliseconds(value));
    };

    MomentDate.prototype.setUTCMinutes = function (value) {
      return this._fromUtc(this._getUtc().minutes(value));
    };

    MomentDate.prototype.setUTCMonth = function (value) {
      return this._fromUtc(this._getUtc().month(value));
    };

    MomentDate.prototype.setUTCSeconds = function (value) {
      return this._fromUtc(this._getUtc().seconds(value));
    };

    MomentDate.prototype.setYear = function (value) {
      throw new Error('setYear() is deprecated - use setFullYear() instead.');
    };

    MomentDate.prototype.toString = function () {
      if (this._timeZone) {
        var str = this._moment.toString();
        var abbr = this._moment.zoneAbbr();
        if (abbr)
          str = str + (" (" + abbr + ")");

        return str;
      } else
        return this._moment.toDate().toString();
    };

    MomentDate.prototype.valueOf = function () {
      return this._moment.toDate().getTime();
    };

    MomentDate.prototype.getTimeZone = function () {
      return this._timeZone;
    };

    MomentDate.prototype.toLocalDate = function () {
      return this._moment.toDate();
    };

    MomentDate.prototype.toMoment = function () {
      return this._moment.clone();
    };

    MomentDate.prototype.clone = function () {
      return new MomentDate(this._moment, this._timeZone);
    };

    MomentDate.prototype.equals = function (other) {
      return this._moment.toString() === other.toString();
    };

    return MomentDate;
  })(Date);

  if (isNode)
    module.exports = MomentDate;
  else if (typeof window !== "undefined" && window !== null)
    window.MomentDate = MomentDate;

  return MomentDate;
}(this));