'use strict';

function isDefined(val) {
  return typeof val !== 'undefined';
}

module.exports = function (stream) {
  var ended;

  if (isDefined(stream.ended)) {
    ended = stream.ended;
  } else if (isDefined(stream._ended)) {
    ended = stream._ended;
  } else if (isDefined(stream._readableState) && isDefined(stream._writableState)) {
    ended = stream._readableState.ended || stream._writableState.ended;
  }

  return Boolean(ended).valueOf();
};
