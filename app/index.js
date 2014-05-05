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
    this.log(chalk.magenta('You\'re using the fantastic DcHtml5 generator.'));
    var promptMessage = "Please choose HTML5 Creative to generate:";
        //promptMessage += "\n(1)In-page\n(2)Expanding\n(3)Floating";
        //promptMessage += "\n(4)Standard Video Module\n(5)In-App\n(6)Lightbox - Carousel\n";
    //




    var prompts = [
    {
      type: 'list',
      name: 'adType', // variable
      message: promptMessage,
      choices:[
            { name:"In-page", value:1 },
            { name:"Expanding", value:2 },
            { name:"Floating", value: 3},
            { name:"Standard Video Module", value:4 },
            { name:"In-App", value:5 },
            { name:"Lightbox - Carousel", value:6 }

      ]
    },
     {
      type: 'input',
      name: 'adDestinationFolder', // variable
      message:'Please type destination folder: '
    }
    ];

    this.prompt(prompts, function (props) {
      this.adType = props.adType;
      this.adDestinationFolder = props.adDestinationFolder;
      console.log('ad type : ' + this.adType + " Destination folder: "+ this.adDestinationFolder);

      done();
    }.bind(this));
  },

  app: function () {
    console.log('@-- app section ---');
    this.copy('in-page/_index.html','index.html');
    this.copy('in-page/main.css','main.css');
    this.copy('in-page/main.js','main.js');

    /*this.mkdir('app');
    this.mkdir('app/templates');

    this.copy('_package.json', 'package.json');
    this.copy('_bower.json', 'bower.json');
    */
    },

  projectfiles: function () {
   // this.copy('editorconfig', '.editorconfig');
    // this.copy('jshintrc', '.jshintrc');
  }
});

module.exports = DcHtml5Generator;
