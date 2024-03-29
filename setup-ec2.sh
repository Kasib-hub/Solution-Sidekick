#!/bin/sh
# Script for the ec2 instance to install docker and docker-compose

sudo amazon-linux-extras install docker -y
sudo curl -L https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m) -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
sudo service docker start 
sudo usermod -a -G docker ec2-user