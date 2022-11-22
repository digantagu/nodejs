pipeline {
    agent any
    stages {
        stage('sonar quality status') {
            agent {
                docker {
                    image 'node'
                }

            }

            steps {
                script {
                     withSonarQubeEnv(credentialsId: 'sonar-token')
                    {
                    }
                }
            }
        }
    }
}
