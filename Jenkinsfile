pipeline {
    agent any
    environment {
        ENV_NAME = "develop"
        DO_IMAGE_NAME = "mazueraalvaro/shopcrm-front"
        dockerImage = ""
    }
    stages {
        stage('Install Dependencies') {
            agent { 
                docker { 
                    image 'node:14'
                    reuseNode true
                    alwaysPull false
                }
            }
            steps {
                sh 'npm ci'
            }
        }
        stage('Static Analysis') {
            agent { 
                docker { 
                    image 'node:14'
                    reuseNode true
                    alwaysPull false
                }
            }
            steps {
                echo "Build!! ${env.ENV_NAME} ${env.GIT_BRANCH}"
                sh 'npm run lint'
            }
        }
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
                sh 'npm build'
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
        stage('Image Build') {
            when {
                expression { return !env.GIT_BRANCH.contains('pr')}
            }
            steps{
                script {
                    dockerImage = docker.build DO_IMAGE_NAME
                }
            }            
        }
        stage('Publish'){
            when {
                expression { return !env.GIT_BRANCH.contains('pr')}
            }
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