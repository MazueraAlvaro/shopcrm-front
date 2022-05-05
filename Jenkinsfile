pipeline {
    agent any
    tools {nodejs "nodejs-14"}
    stages {
        stage('Build') {
            steps {
                sh 'npm ci'
            }
        }
        stage('Test') {
            steps {
                sh 'npm test'
            }
        }
        stage('Deploy') {
            steps {
                sh 'echo "Deploy!! ${CHANGE_ID} PR"'
            }
        }
    }
}