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
    },
     {
      type: 'input',
      name: 'adDestinationFolder', // variable
      message:'Please type destination folder: '
     },
     {
      type: 'input',
      name: 'adExitName', // variable
      message:'Please type Exit name (optional): '
     }/:

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
          case 1:
            if (this.adDestinationFolder.trim() != "") {
                    this.copy('In-page/creative.html', this.adDestinationFolder + '/creative.html');
                    this.copy('In-page/initial.css', this.adDestinationFolder + '/initial.css');
                    this.copy('In-page/initial.js', this.adDestinationFolder + '/initial.js');
                    this.copy('In-page/polite.js', this.adDestinationFolder + '/polite.js');
                    this.copy('In-page/polite.css', this.adDestinationFolder + '/polite.css');
                } else {
                    this.copy('In-page/creative.html', 'creative.html');
                    this.copy('In-page/initial.css','initial.css');
                    this.copy('In-page/initial.js', 'initial.js');
                    this.copy('In-page/polite.js', 'polite.js');
                    this.copy('In-page/polite.css','polite.css');

            }
             break;

         case 3:
            if (this.adDestinationFolder.trim() != "") {
                    this.copy('Floating/320x50/anchor.html', this.adDestinationFolder + '/anchor.html');
                    this.copy('Floating/320x50/anchor.css', this.adDestinationFolder + '/anchor.css');
                    this.copy('Floating/320x50/anchor.js', this.adDestinationFolder + '/anchor.js');
                    this.copy('Floating/320x50/closebutton.png', this.adDestinationFolder + '/closebutton.png');
                    this.copy('Floating/320x50/collapsed.jpg', this.adDestinationFolder + '/collapsed.jpg');
                } else {
                    this.copy('Floating/320x50/anchor.html','anchor.html');
                    this.copy('Floating/320x50/anchor.css','anchor.css');
                    this.copy('Floating/320x50/anchor.js', 'anchor.js');
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

/*
DcHtml5Generator.prototype.writeIndex = function writeIndex() {
        console.log('writeIndex ---- ');
       // TODO: add corresponding path to this.sourceRoot() + index.html
        this.indexFile = this.readFileAsString(path.join(this.sourceRoot(), 'indexTmp.html'));
        this.indexFile = this.engine(this.indexFile, this);
        this.indexfile = this.appendFiles({
            html: this.indexFile,
            fileType:'js'

        });
}

*/
module.exports = DcHtml5Generator;
