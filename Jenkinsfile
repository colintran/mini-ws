pipeline {
    agent any
    stages{
        stage("build"){
            steps{
                echo "In the build stage"
            }
        }
        stage("deploy"){
            steps {
                echo "[Deploy] Branch: ${env.BRANCH_NAME}"
                /* Job is configured beforehand in jenkin*/
                build(job: 'miniws_deployment')
            }
        }
    }
}