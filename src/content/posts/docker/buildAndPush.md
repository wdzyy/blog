---
title: '阿里云镜像仓库'
description: 'docker从阿里云镜像仓库拉取镜像和推送镜像到阿里云镜像仓库'
published: 2024-04-25
tags: [Docker]
category: Docker
draft: false
---
#### 1、首先需要在阿里云开通容器镜像服务

#### 2、登录阿里云Docker Registry

```shell
docker login --username=111 registry.cn-xxxxx.aliyuncs.com
```

#### 3、从Registry中拉取镜像

```shell
docker pull registry.cn-xxxxx.aliyuncs.com/[命名空间]/[仓库名称]:[镜像版本号]
```

### 4、将镜像推送到Registry

```shell
docker login --username=xxx registry.cn-xxxxx.aliyuncs.com
docker tag [ImageId] registry.cn-xxxxx.aliyuncs.com/[命名空间]/[仓库名称]:[镜像版本号]
docker push registry.cn-xxxxx.aliyuncs.com/[命名空间]/[仓库名称]:[镜像版本号]
```
