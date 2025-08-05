// This is a declarative Jenkins pipeline script

pipeline {
    // 1. Agent Configuration
    agent any

    // ** FIX IS HERE **
    // This 'tools' block tells Jenkins to find the Docker tool we configured
    // in "Global Tool Configuration", install it, and add it to the PATH.
    tools {
        docker 'docker-latest'
    }

    // 2. Stages
    stages {
        // Stage 1: Checkout Code
        stage('Checkout') {
            steps {
                echo 'Checking out the source code from GitHub...'
                git branch: 'main', url: 'https://github.com/ash13579/jenkins-cicd-demo.git'
            }
        }

        // Stage 2: Build Docker Image
        stage('Build') {
            steps {
                echo 'Building the Docker image...'
                // This command should now work because the 'docker' tool is available.
                sh 'docker build -t my-node-app .'
            }
        }

        // Stage 3: Test
        stage('Test') {
            steps {
                echo 'Simulating tests...'
                sh 'echo "All tests passed!"'
            }
        }

        // Stage 4: Deploy
        stage('Deploy') {
            steps {
                echo 'Deploying the new application container...'
                sh 'docker stop my-app-container || true'
                sh 'docker rm my-app-container || true'
                sh 'docker run -d --name my-app-container -p 3000:3000 my-node-app'
            }
        }
    }

    // 3. Post-build Actions
    post {
        success {
            echo 'Pipeline finished successfully! The application has been deployed.'
        }
        failure {
            echo 'Pipeline failed. Please check the logs for errors.'
        }
    }
}
