module.exports = {
  all: {
    "devFile": "remote",
    "outputFile": "dist/modernizr-neue.js",
    "files" : {
      "src": [
        "js/**/*.js",
        "!js/modernizr/**/*.js",
        "scss/**/*.scss"
      ]
    },
    "extra" : {
      "shiv" : false,
      "teststyles": true,
      "printshiv" : false,
      "load" : true,
      "mq" : false,
      "video": false
    },
    "customTests": [
      "js/modernizr/checked.js",
      "js/modernizr/label-click.js"
    ]
  }
};
