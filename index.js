const statusMessage = {
  'w': ' \u001b[33m[WARNING]: ',
  's': ' \u001b[32m[SUCCESS]: ',
  'e': ' \u001b[31m[ERROR]: ',
  'i': ' \u001b[34m[INFO]: ',
  'd': ' \u001b[35m[DEBUG]: ',
  'l': ' [LOG]: '
};

function time() {
  return new Date().toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true
  });
}

const logger = {
  log: function(msg) {
    console.log(time() + statusMessage.l + msg)
  },
  success: function(msg) {
    console.log(time() + statusMessage.s + msg)
  },
  error: function(msg) {
    console.log(time() + statusMessage.e + msg)
  },
  warning: function(msg) {
    console.log(time() + statusMessage.w + msg)
  },
  debug: function(msg) {
    console.log(time() + statusMessage.d + msg)
  }
}

const clean = function(input){return input.replace(/</g, '&lt').replace(/>/g, '&gt').replace(/≤/g, '&le').replace(/≥/g, '&ge')}

if (typeof window === 'undefined' && typeof process === 'object') {
  process.on("uncaughtException", function() { });
  module.exports = { logger, clean }
}
