#!/bin/bash

cd /code/reacter
/Users/sarbay/npm/bin/webpack --config webpack.config.js
cp -c ./bundle.js /code/reacter-mobile/www/
cd /code/reacter-mobile
/Users/sarbay/npm/bin/cordova build android
rm -rf /code/reacter/bundle.js
