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

    // have Yeoman greet the user
    // this.log(this.yeoman);

    console.log(this.sourceRoot());
    // replace it with a short and sweet description of your generator
    this.log(chalk.magenta('You\'re using the DoubleClick HTML5 Ad Generator.'));
    var promptMessage = chalk.green("Please choose HTML5 Creative to generate");

    var prompts = [
    {
      type: 'list',
      name: 'adType', // variable
      message: promptMessage,
      choices:[
            { name:"In-page (300x250)", value:1 },
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
     }

    ];

    this.prompt(prompts, function (props) {
      this.adType = props.adType;
      this.adDestinationFolder = props.adDestinationFolder;
      this.adExitName = props.adExitName;
      // console.log('ad type : ' + this.adType + " Destination folder: "+ this.adDestinationFolder);

      done();
    }.bind(this));
  },

  /*
  app: function () {
    console.log('@-- app section --- ');
    console.log(this.indexFile);
    if (this.adDestinationFolder.trim() != "") {
           // this.copy('in-page/_index.html', this.adDestinationFolder + '/index.html');
            this.copy(this.indexFile, this.adDestinationFolder + '/index.html');
            this.copy('in-page/main.css', this.adDestinationFolder + '/main.css');
            this.copy('in-page/main.js', this.adDestinationFolder + '/main.js');
            } else {
            // this.copy('in-page/_index.html','index.html');
             this.copy(this.indexFile,'index.html');
            this.copy('in-page/main.css','main.css');
            this.copy('in-page/main.js','main.js');
        }
    },


*/
  writing : function () {
    this.generateAdByID(this.adType);
    console.log(chalk.yellow('--- Boilerplate created ---'));
  },

  generateAdByID : function ( iType ) {
      switch (iType) {
          case 1:
            if (this.adDestinationFolder.trim() != "") {
                    this.copy('in-page/_index.html', this.adDestinationFolder + '/index.html');
                    this.copy('in-page/main.css', this.adDestinationFolder + '/main.css');
                    this.copy('in-page/main.js', this.adDestinationFolder + '/main.js');
                } else {
                    this.copy('in-page/_index.html','index.html');
                    this.copy('in-page/main.css','main.css');
                    this.copy('in-page/main.js','main.js');
            }
              break;

         case 3:
            if (this.adDestinationFolder.trim() != "") {
                    this.copy('in-page/_index.html', this.adDestinationFolder + '/index.html');
                    this.copy('in-page/main.css', this.adDestinationFolder + '/main.css');
                    this.copy('in-page/main.js', this.adDestinationFolder + '/main.js');
                } else {
                    this.copy('in-page/_index.html','index.html');
                    this.copy('in-page/main.css','main.css');
                    this.copy('in-page/main.js','main.js');
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
