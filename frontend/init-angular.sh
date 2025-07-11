#!/bin/sh

echo "Criando novo projeto Angular 17..."
ng new my-angular-app --routing --style=scss --skip-git --skip-tests --directory=./ --defaults

ng serve --host 0.0.0.0 --port 4200
