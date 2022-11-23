node 
{
 stage('Checkoutcode'){
      git branch: 'main', url: 'https://github.com/digantagu/nodejs.git'
   }
 stage('Build'){
     sh "npm install"
   }
 stage('SonarQube Report'){
     withSonarQubeEnv(credentialsId: 'sonar-token')
     sh "npm run sonar"
    
   
   }
   
}
