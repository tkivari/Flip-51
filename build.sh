#!/bin/bash
mkdir -p assets/js/templates
touch assets/js/templates/precompiled_templates.js
handlebars templates/ -f assets/js/app/precompiled_templates.js
sass assets/sass/main.scss assets/css/main.css
echo "built"