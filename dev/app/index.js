/*
 *
 * TODO: Blank templates for each HTML5 creative
 *
 * Priority
 *  - In-page polite
 *  - Expanding
 *  - Floating
 *  - Standard Video Module
 *  - In-app
 *
 *  Roadmap
    - Customizeable Ad Size (confirmed)
    - Multi-level selection based on Ad Type

*/

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
        // this.installDependencies();
      }
    });
  },

  askFor: function () {
    var done = this.async();


    // this.log(this.yeoman);

   // console.log(this.sourceRoot());

    this.log(chalk.magenta('You\'re using the DoubleClick HTML5 Ad Generator.'));
    var promptMessage = chalk.green("Please choose HTML5 Creative to generate");

    var prompts = [
    {
      type: 'list',
      name: 'adType', // variable
      message: promptMessage,
      choices:[
            { name:"In-Page (300x250)", value:1 },
            { name:"Expanding", value:2 },
            { name:"Floating", value: 3},
            { name:"Standard Video Module", value:4 },
            { name:"In-App", value:5 },
            { name:"Lightbox - Carousel", value:6 }
      ]
    },/*
    {
        when: function (response){
           return response.adType == 1; // ask for creative width
        },
        type: 'input',
        name: 'adWidth',
        message: 'Please type the creative ' + chalk.green('width in pixel (px)')
    }, */
     {
      type: 'input',
      name: 'adDestinationFolder', // variable
      message:'Please type destination folder: '
     },
     {
      type: 'input',
      name: 'adExitName', // variable
      message:'Please type Exit name (optional): '
     }

    ];

    this.prompt(prompts, function (props) {
      this.adType = props.adType;
      this.adDestinationFolder = props.adDestinationFolder;
      this.adExitName = props.adExitName;
      this.testWidth = 200;
      // console.log('ad type : ' + this.adType + " Destination folder: "+ this.adDestinationFolder);

      done();
    }.bind(this));
  },

  writing : function () {
    this.generateAdByID(this.adType);
    console.log(chalk.yellow('--- Boilerplate created ---'));
  },

  generateAdByID : function ( iType ) {
      switch (iType) {
          case 1: // In-page 320x250
            if (this.adDestinationFolder.trim() != "") {
                    this.copy('In-page/300x250/DCM_Inpage-320x250.html', this.adDestinationFolder + '/DCM_Inpage-320x250.html');
                    this.copy('In-page/300x250/initial.css', this.adDestinationFolder + '/initial.css');
                    this.copy('In-page/300x250/initial.js', this.adDestinationFolder + '/initial.js');
                    this.copy('In-page/300x250/polite.js', this.adDestinationFolder + '/polite.js');
                    this.copy('In-page/300x250/polite.css', this.adDestinationFolder + '/polite.css');
                } else {
                    this.copy('In-page/300x250/DCM_Inpage-320x250.html', 'DCM_Inpage-320x250.html');
                    this.copy('In-page/300x250/initial.css','initial.css');
                    this.copy('In-page/300x250/initial.js', 'initial.js');
                    this.copy('In-page/300x250/polite.js', 'polite.js');
                    this.copy('In-page/300x250/polite.css','polite.css');

            }
             break;

         case 3: // floating 320x50
            if (this.adDestinationFolder.trim() != "") {
                    this.copy('Floating/320x50/DCM_Floating-320x50.html', this.adDestinationFolder + '/DCM_Floating-320x50.html');
                    this.copy('Floating/320x50/DCM_Floating-320x50.css', this.adDestinationFolder + '/DCM_Floating-320x50.css');
                    this.copy('Floating/320x50/DCM_Floating-320x50.js', this.adDestinationFolder + '/DCM_Floating-320x50.js');
                    this.copy('Floating/320x50/closebutton.png', this.adDestinationFolder + '/closebutton.png');
                    this.copy('Floating/320x50/collapsed.jpg', this.adDestinationFolder + '/collapsed.jpg');
                } else {
                    this.copy('Floating/320x50/DCM_Floating-320x50.html','DCM_Floating-320x50.html');
                    this.copy('Floating/320x50/DCM_Floating-320x50.css','DCM_Floating-320x50.css');
                    this.copy('Floating/320x50/DCM_Floating-320x50.js', 'DCM_Floating-320x50.js');
                    this.copy('Floating/320x50/closebutton.png', 'closebutton.png');
                    this.copy('Floating/320x50/collapsed.jpg', 'collapsed.jpg');
            }
              break;


          default:

      }

  },


  projectfiles: function () {
   // this.copy('editorconfig', '.editorconfig');
    // this.copy('jshintrc', '.jshintrc');
  }
});

module.exports = DcHtml5Generator;
