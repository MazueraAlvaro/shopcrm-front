pipeline {
    agent any
    tools {nodejs "nodejs-14"}
    environment {
        ENV_NAME = "${env.GIT_BRANCH.contains('pr') ? 'PR' : env.GIT_BRANCH.substring(env.GIT_BRANCH.indexOf('/') + 1)}"
        DO_IMAGE_NAME = "mazueraalvaro/shopcrm-front"
        dockerImage = ""
    }
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
        stage('Build image') {
            steps{
                dockerImage = docker.build DO_IMAGE_NAME
            }            
        }
        stage('Pushing image'){
            environment {
                registryCredential = 'dockerhublogin'
                }
            steps{
                docker.withRegistry( 'https://registry.hub.docker.com', registryCredential ){
                    dockerImage.push("latest")
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