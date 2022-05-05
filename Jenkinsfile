pipeline {
    agent any
    tools {nodejs "nodejs-14"}
    stages {
        stage('Build') {
            steps {
                sh 'npm install'
            }
        }
        stage('Test') {
            steps {
                sh 'npm test'
            }
        }
        stage('Deploy') {
            when{
                CHANGE_ID
            }
            steps {
                sh 'echo "Deploy!!"'
            }
        }
    }
}