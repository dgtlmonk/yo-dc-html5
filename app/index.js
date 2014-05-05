'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var chalk = require('chalk');


var DcHtml5Generator = yeoman.generators.Base.extend({
  init: function () {
    this.pkg = require('../package.json');

    this.on('end', function () {
      if (!this.options['skip-install']) {
        this.installDependencies();
      }
    });
  },

  askFor: function () {
    var done = this.async();

    // have Yeoman greet the user
    this.log(this.yeoman);

    // replace it with a short and sweet description of your generator
    this.log(chalk.magenta('You\'re using the fantastic DoubleClick Html5 creative generator.'));


    var prompts = [{
      type: 'input',
      name: 'adType',
      message: 'What type of HTML5 creative do you want to build?\n(1) In-page\n(2) Floating\n(3) In-page with Floating',
      default: 1
    }];

    this.prompt(prompts, function (props) {
      this.adType = props.adType;
    console.log('You selected ' + this.adType);
      done();
    }.bind(this));
  },

  app: function () {
    // this.mkdir('app');
    // this.mkdir('app/templates');

   //  this.copy('_package.json', 'package.json');
    // this.copy('_bower.json', 'bower.json');
  },

  projectfiles: function () {
    this.copy('editorconfig', '.editorconfig');
    this.copy('jshintrc', '.jshintrc');
  }
});

module.exports = DcHtml5Generator;
