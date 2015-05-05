module.exports = function(config){
  config.set({

    basePath : '',

    files : [
      'bower_components/farmbuild-core/dist/farmbuild-core.js',
      'bower_components/angular-mocks/angular-mocks.js',
      'bower_components/farmbuild-farmdata/dist/farmbuild-farmdata.js',
      'src/nutrient-calculator.js',
      'src/cows-culled/cows.conf.src.js',
      'src/cows-purchased/index.src.js',
      'src/cows-culled/index.src.js',
      'src/milk-sold/index.src.js',
      'src/forages-purchased/forages.conf.src.js',
      'src/forages-purchased/types.src.js',
      'src/forages-purchased/index.src.js',
      'src/legumes/utilisation-factors.conf.src.js',
      'src/legumes/calculator.src.js',
      'src/legumes/calculator.spec.js',
      'src/legumes/index.src.js',
      'src/legumes/index.spec.js',
      'src/collections/index.src.js',
      'src/collections/index.spec.js',
      'src/fertilizers-purchased/defaults.conf.src.js',
      'src/fertilizers-purchased/types.src.js',
      'src/fertilizers-purchased/validator.src.js',
      'src/fertilizers-purchased/calculator.src.js',
      'src/fertilizers-purchased/index.src.js',
      'src/concentrates-purchased/defaults.conf.src.js',
      'src/concentrates-purchased/types.src.js',
      'src/concentrates-purchased/validator.src.js',
      'src/concentrates-purchased/calculator.src.js',
      'src/concentrates-purchased/index.src.js',
      'src/concentrates-purchased/index.spec.js',
      'src/session/index.src.js',
      'src/index.js',
      'src/*.js',
      'src/**/*.js'
    ],

    autoWatch : true,
    frameworks: ['jasmine'],
    browsers : ['Chrome'],
    //logLevel: 'LOG_INFO', //this it NOT application log level, it's karma's log level.
    plugins : [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine',
            'karma-junit-reporter'
            ],

    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

  });
};
