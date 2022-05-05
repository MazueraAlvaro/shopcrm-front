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
            when {
                expression { return !env.GIT_BRANCH.contains('pr')}
            }
            steps {
                echo "Deploy!! ${env.CHANGE_ID} ${env.GIT_BRANCH}"
            }
        }
    }
}