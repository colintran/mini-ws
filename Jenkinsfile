pipeline {
    agent any
    environment {
        CURRENT_BRANCH = "${env.BRANCH_NAME}"
    }
    options {
        // This is required if you want to clean before build
        skipDefaultCheckout(true)
    }
    stages{
        stage("build"){
            steps{
                // Clean before build
                cleanWs()
                checkout([
                    $class: 'GitSCM',
                    branches: [[name: 'refs/heads/'+env.BRANCH_NAME]],
                    extensions: [[$class: 'CloneOption', noTags: false, shallow: false, depth: 0, reference: '']],
                    userRemoteConfigs: scm.userRemoteConfigs
                ])
                echo "In the build stage"
            }
        }
        stage("deploy"){
            steps {
                script{
                    if (CURRENT_BRANCH == "master"){
                        /* Generate new tag*/
                        def latestTag = bat(
                            script: 'git describe --abbrev=0',
                            returnStdout: true
                        )
                        def curCommit = bat(
                            script: 'git describe',
                            returnStdout: true
                        )
                        def nextVer = lastestTag
                        if (curCommit != latestTag){
                            def newTag = genNewVersion(latestTag)
                            if (newTag != ""){
                                /* Add tag master*/
                                echo "About to add new tag in master"
                                bat "git tag -a ${newTag}"
                                bat "git push origin ${newTag}"
                                echo "Add new tag: Done."
                            }       
                        }
                    }
                    /* Job is configured beforehand in jenkin*/
                    // build(job: 'miniws_deployment')
                }
            }
        }
    }
}

def genNewVersion(currentVer){
    echo "Start genNewVersion"
    def matchRes = (currentVer =~ '^[0-9]\\.[0-9]\\..*$')
    if ( matchRes.size() == 0){
        return ""
    }
    def newVer = "${matchRes[0][0]}.${matchRes[0][1]+1}.0"
    echo "New tag: ${newVer}"
    echo "genNewVersion: done"
    return newVer
}