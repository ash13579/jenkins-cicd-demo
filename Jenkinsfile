// This is a declarative Jenkins pipeline script

pipeline {
    // 1. Agent Configuration
    // Specifies where the entire Pipeline will execute. 'any' means it can run on any available agent.
    agent any

    // 2. Stages
    // The 'stages' block contains all the work of the pipeline.
    stages {
        // Stage 1: Checkout Code
        // This stage pulls the latest code from our GitHub repository.
        stage('Checkout') {
            steps {
                echo 'Checking out the source code from GitHub...'
                // We explicitly specify the 'main' branch.
                git branch: 'main', url: 'https://github.com/ash13579/jenkins-cicd-demo.git'
            }
        }

        // Stage 2: Build Docker Image
        // This stage uses the Dockerfile in our repository to build a new Docker image.
        stage('Build') {
            steps {
                echo 'Building the Docker image...'
                // The '-t' flag tags the image with a name so we can refer to it later.
                sh 'docker build -t my-node-app .'
            }
        }

        // Stage 3: Test
        // In a real-world scenario, this stage would run automated tests (e.g., unit tests).
        // For this simple example, we will just print a message.
        stage('Test') {
            steps {
                echo 'Simulating tests... In a real project, you would run commands like "npm test" here.'
                sh 'echo "All tests passed!"'
            }
        }

        // Stage 4: Deploy
        // This stage deploys our application by running the Docker container.
        stage('Deploy') {
            steps {
                echo 'Deploying the new application container...'

                // First, stop and remove any old container with the same name to avoid conflicts.
                // '|| true' ensures the command doesn't fail if the container doesn't exist yet.
                sh 'docker stop my-app-container || true'
                sh 'docker rm my-app-container || true'

                // Run the new Docker container from the image we just built.
                // -d: detached mode (runs in the background)
                // --name: gives the container a specific name
                // -p: maps port 3000 on the host to port 3000 in the container
                sh 'docker run -d --name my-app-container -p 3000:3000 my-node-app'
            }
        }
    }

    // 3. Post-build Actions
    // This block runs after all the stages are completed.
    post {
        success {
            echo 'Pipeline finished successfully! The application has been deployed.'
        }
        failure {
            echo 'Pipeline failed. Please check the logs for errors.'
        }
    }
}
