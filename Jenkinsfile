#!groovy

node('master'){
    def node = tool name: 'Node11.13', type: 'jenkins.plugins.nodejs.tools.NodeJSInstallation'
    env.PATH = "${node}:${env.PATH}"
    def npmGlobalPath = sh(script: 'npm bin -g', returnStdout: true).trim()
    env.PATH = "${npmGlobalPath}:${env.PATH}"
    
    def remote = [:]
    remote.name = "192.168.1.90"
    remote.host = "192.168.1.90"
    remote.allowAnyHosts = true
        
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

    withCredentials([usernamePassword(credentialsId: 'nginx-username-password', usernameVariable: 'USERNAME', passwordVariable: 'PASSWORD')]) {
        remote.user = USERNAME
        remote.password = PASSWORD
        
        stage('Deploy') {
            sshCommand remote: remote, command: "rm -rf /var/www/html/*"
            sshPut remote: remote, from:"build", into: "/var/www/html/"
        }
   }

   stage('Clean Up'){
       sh "rm -rf build"
   }
}
