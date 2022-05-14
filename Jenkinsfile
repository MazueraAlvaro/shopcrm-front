pipeline {
    agent any
    environment {
        ENV_NAME = "develop"
        DO_IMAGE_NAME = "mazueraalvaro/shopcrm-front"
        dockerImage = ""
    }
    stages {
        stage('Build') {
            agent { 
                docker { 
                    image 'node:14'
                    reuseNode true
                    alwaysPull false
                }
            }
            steps {
                echo "Build!! ${env.ENV_NAME} ${env.GIT_BRANCH}"
                sh 'npm ci'
            }
        }
        stage('Test') {
            agent { 
                docker { 
                    image 'node:14'
                    reuseNode true
                    alwaysPull false
                }
            }
            steps {
                sh 'npm test'
            }
        }
        stage('Build image') {
            steps{
                script {
                    dockerImage = docker.build DO_IMAGE_NAME
                }
            }            
        }
        stage('Pushing image'){
            environment {
                registryCredential = 'dockerhublogin'
                }
            steps{
                script {
                    docker.withRegistry( 'https://registry.hub.docker.com', registryCredential ){
                    dockerImage.push("${ENV_NAME}")
                    }
                }
            }
        }
        stage('Deploy to Kubernetes') {
            when {
                expression { return !env.GIT_BRANCH.contains('pr')}
            }
            steps {
                echo "Deploy!!! ${env.ENV_NAME} ${env.GIT_BRANCH}"
                //kubernetesDeploy(configs: "deploymentservice.yml", kubeconfigId: "kubernetes")
            }
        }
    }
}