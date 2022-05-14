pipeline {
    agent { 
        docker { 
            image 'node:14'
            args "-u root"
            alwaysPull false
            reuseNode true
        }
    }
    // environment {
    //     // ENV_NAME = "${env.GIT_BRANCH.contains('pr') ? 'PR' : env.GIT_BRANCH.substring(env.GIT_BRANCH.indexOf('/') + 1)}"
    // }
    stages {
        stage('Build') {
            steps {
                echo "Build!! ${env.ENV_NAME} ${env.GIT_BRANCH}"
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
                echo "Deploy!!! ${env.ENV_NAME} ${env.GIT_BRANCH}"
            }
        }
    }
}