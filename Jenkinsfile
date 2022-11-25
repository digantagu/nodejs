node 
{
 stage('Checkoutcode'){
      git branch: 'main', url: 'https://github.com/digantagu/nodejs.git'
   }
 stage('Build'){
     sh "npm install"
   }
 stage('SonarQube Report'){
     def scannerHome = tool 'Sonar-scanner';
     withSonarQubeEnv(credentialsId: 'sonar-token') {
     sh 'npm install sonar-scanner'
     sh "${scannerHome}/bin/sonar-scanner"   
       }
     
   }
  
   stage('Build docker image'){
     sh "docker build -t digantagu/nodejs ."
   }
   
   // stage('UploadArtifactintoNexus'){
    //sh "npm publish"
   //}
   stage('Docker image push to dockerhub'){
      withCredentials([string(credentialsId: 'DOCKER_HUB_CRED', url: 'https://index.docker.io/v1/', variable: 'DOCKER_HUB_CRED')]) {
      sh "docker login -u digantagu -p ${DOCKER_HUB_CRED}"   
    }  
     sh "docker push digantagu/nodejs:latest"
   }
   stage('Deploy to k8s'){
     kubernetesDeploy(
         configs: 'nodek8s.yaml',
         kubeconfigId: 'k8s-config',
         enableConfigSubstitution: true)
   }
   
}
