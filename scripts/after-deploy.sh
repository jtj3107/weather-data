#!/bin/bash
REPOSITORY=/home/ubuntu

cd $REPOSITORY

sudo yarn

sudo pm2 start ecosystem.config.js