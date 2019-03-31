#!/usr/bin/env groovy

node('master'){
    def node = tool name: 'Node11.13', type: 'jenkins.plugins.nodejs.tools.NodeJSInstallation'
    env.PATH = "${node}:${env.PATH}"
    def npmGlobalPath = sh(script: 'npm bin -g', returnStdout: true).trim()
    env.PATH = "${npmGlobalPath}:${env.PATH}"

    @Library('react-build-shared-library')_
        
    stage('Setup') {
        setUpApplication.setup()
    }

    stage('Checkout') {
        checkoutApplication.checkout()
    }
    
    echo env.BRACN_NAME

    stage('Build') {
        buildApplication.build()
    }
    
    def remote = [:]
    remote.name = "192.168.1.90"
    remote.host = "192.168.1.90"
    remote.allowAnyHosts = true

    withCredentials([usernamePassword(credentialsId: 'nginx-username-password', usernameVariable: 'USERNAME', passwordVariable: 'PASSWORD')]) {
        remote.user = USERNAME
        remote.password = PASSWORD
        
        stage('Deploy') {
            if(env.BRANCH_NAME == 'master'){
                sshCommand remote: remote, command: "rm -rf /var/www/html/*"
                sshPut remote: remote, from:"build", into: "/var/www/html/"
            }else{
                echo 'Not deploying since not master branch'
            }
        }
   }

   stage('Clean Up'){
       cleanUpApplication.cleanUp()
   }    
}
