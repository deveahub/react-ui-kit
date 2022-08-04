const { cpSync } = require('fs');
const { resolve } = require('path');

const DIR_ROOT = resolve(__dirname, '..');
const DIR_TEMPLATES = resolve(DIR_ROOT, 'templates');
const DIR_BUILD = resolve(DIR_ROOT, 'dist', 'templates');

cpSync(DIR_TEMPLATES, DIR_BUILD, { recursive: true });
