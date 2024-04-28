---
title: 'docker 安装 jenkins'
description: ''
published: 2024-04-25
tags: [Docker]
category: Docker
draft: false
---
#### 1、什么是Jenkins

  Jenkins是一个开源软件项目，是基于Java开发的一种持续集成工具，用于监控持续重复的工作，旨在提供一个开放易用的软件平台，使软件的持续集成变成可能

#### 2、使用前提

  安装docker

#### 3、在docker中安装jenkins

  1.拉取jenkins镜像

  ```shell
  docker pull jenkins/jenkins
  ```

  2.创建目录

  ```shell
  mkdir /var/jenkins_home
  ```

  3.在 Docker 中，Jenkins 默认以用户ID 1000运行，所以这个命令确保 Jenkins 用户有足够的权限来访问 /var/jenkins_home 目录。

  ```
  chown -R 1000 /var/jenkins_home
  ```

  4.创建jenkins容器

  ```shell
  docker run -d -p 8081:8080 -p 50000:50000 -v /var/jenkins_home:/var/jenkins_home --name jenkins jenkins/jenkins:jdk17
  ```

  5.查看jenkins容器日志

  ```shell
  docker logs -f jenkins
  ```

  6.访问jenkins

  ```
  http://localhost:8080
  ```

  7.获取初始密码

  ```shell
  docker exec -it jenkins cat /var/jenkins_home/secrets/initialAdminPassword
  ```

  8.docker删除无效的none镜像

    docker rmi $(docker images -f "dangling=true" -q)
