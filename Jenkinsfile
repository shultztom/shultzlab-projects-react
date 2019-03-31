#!groovy

node('master'){
    def node = tool name: 'Node11.13', type: 'jenkins.plugins.nodejs.tools.NodeJSInstallation'
    env.PATH = "${node}:${env.PATH}"
    def npmGlobalPath = sh(script: 'npm bin -g', returnStdout: true).trim()
    env.PATH = "${npmGlobalPath}:${env.PATH}"
        
    stage('Setup') {
        try {
            sh "yarn --version"
        } catch (error) {
            sh "npm i -g yarn"
        } 
    }

    stage('Checkout') {
        checkout scm
    }

    stage('Build') {
        sh "yarn install"
        sh "yarn build"
    }

    // For Testing
    withCredentials([sshUserPrivateKey(credentialsId: "nginx", keyFileVariable: 'keyfile')]) {
       stage('Check Uptime') {
        sh "ssh tks23@192.168.1.90 -i ${keyfile} uptime"
       }
   }
}