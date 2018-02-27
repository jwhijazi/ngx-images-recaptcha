const fsextra = require('fs-extra');
const { exec } = require('child_process');

fsextra.copy('./src/app/re-captcha', './dist-lib', err => {
  if (err) return console.error(err);
  console.log('Copied files');
  createDeclarations();
});

function createDeclarations() {
  exec('cd dist-lib && tsc index.ts --declaration', () => {
    console.log('Generated declarations (and some JS files...)');
    createPackageJson();
  });
}

function createPackageJson() {
  const packageJSON =  {
    "name": "ngx-images-recaptcha",
    "version": "1.0.0",
    "description": "Use Images Selection to add re-Captcha functionality to your form",
    "main": "index.js",
    "scripts": {
      "test": "echo \"Error: no test specified\" && exit 1"
    },
    "repository": {
      "type": "git",
      "url": "git+https://github.com/jwhijazi/ngx-images-recaptcha"
    },
    "keywords": [
      "Angular",
      "Angular5",
      "Library",
      "Re-Captcha",
      "Images Re-Captcha",
      "Font Awesome 5",
      "Bootstrap 4"
    ],
    "author": "jalal_just@hotmail.com",
    "license": "MIT",
    "bugs": {
      "url": "https://github.com/jwhijazi/ngx-images-recaptcha/issues"
    },
    "homepage": "https://github.com/jwhijazi/ngx-images-recaptcha",
    "types": "index.d.ts"
  };
  fsextra.writeJson('./dist-lib/package.json', packageJSON, {spaces: 2}, err => {
    if (err) return console.error(err);
    console.log('Created package.json');
  });

}