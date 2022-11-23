const sonarqubeScanner = require('sonarqube-scanner');
sonarqubeScanner({
serverUrl: 'http://192.168.10.215:9000/',
options : {
'sonar.project Description': 'This is a Node JS application
'sonar.projectName': 'Node JS Application Sample',
'sonar.projectKey': 'develop',
'sonar. login': 'admin',
'sonar.password': 'abc123',
'sonar.projectVersion': '1.0',
'sonar. language': 'js',
'sonar. sourceEncoding': 'UTF-8',
'sonar. sources': '.',
//'sonar.tests': 'specs',
//'sonar.inclusions': 'src/***
},
}, () => {});
