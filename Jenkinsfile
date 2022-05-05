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
                echo "Deploy!! ${env.CHANGE_ID} ${BRANCH_NAME}"
            }
        }
    }
}