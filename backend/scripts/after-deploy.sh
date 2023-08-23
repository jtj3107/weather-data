#!/bin/bash
REPOSITORY=/home/ubuntu/build

cd $REPOSITORY

sudo yarn

sudo pm2 start /home/ubuntu/build/ecosystem.config.js