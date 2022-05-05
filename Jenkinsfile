pipeline {
    agent any
    tools {nodejs "nodejs-14"}
    environment {
        ENV_NAME = "${env.GIT_BRANCH.contains('origin') ? env.GIT_BRANCH.substring(7) : 'PR'}"
    }
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
            when {
                expression { return !env.GIT_BRANCH.contains('pr')}
            }
            steps {
                echo "Deploy!! ${env.ENV_NAME} ${env.GIT_BRANCH}"
            }
        }
    }
}