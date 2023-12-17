---
title: Kubernetes Cmds
date: '2021-08-13'
tags: ['DevSecOps', 'tools']
---
# Kubernates cmds

## General info and diagnostics

```bash
kubectl version -o=yaml       # versions for tool and kubernetes API server
clientVersion:
  buildDate: "2022-09-21T14:33:49Z"
  compiler: gc
  gitCommit: 5835544ca568b757a8ecae5c153f317e5736700e
  gitTreeState: clean
  gitVersion: v1.25.2
  goVersion: go1.19.1
  major: "1"
  minor: "25"
  platform: linux/amd64
kustomizeVersion: v4.5.7
serverVersion:
  buildDate: "2022-09-21T14:27:13Z"
  compiler: gc
  gitCommit: 5835544ca568b757a8ecae5c153f317e5736700e
  gitTreeState: clean
  gitVersion: v1.25.2
  goVersion: go1.19.1
  major: "1"
  minor: "25"
  platform: linux/amd64

kubectl get componentstatuses # read cluster
kubectl get nodes             # list out all nodes in the cluster.
kubectl describe nodes docker-desktop # describe the nodes.

➜  ~ kubectl get daemonSets --namespace=kube-system
NAME         DESIRED   CURRENT   READY   UP-TO-DATE   AVAILABLE   NODE SELECTOR            AGE
kube-proxy   1         1         1       1            1           kubernetes.io/os=linux   96m

➜  ~ kubectl get deployments --namespace=kube-system coredns
NAME      READY   UP-TO-DATE   AVAILABLE   AGE
coredns   2/2     2            2           98m

➜  ~ kubectl get services --namespace=kube-system
NAME       TYPE        CLUSTER-IP   EXTERNAL-IP   PORT(S)                  AGE
kube-dns   ClusterIP   10.96.0.10   <none>        53/UDP,53/TCP,9153/TCP   98m

```

kubectl edit configmap
kubectl get configmap
kubectl get pods -w
kubectl logs

carmd-el-broussel

cdn
cgit
elasticsearch
gerrit
git
jenkins-artifacts
kibana
kubectl
logstash
mongodb
rabbitmq
redis

journalctl -u gobi-drivers -f

date

[k8s CMD cheatsheet](https://kubernetes.io/docs/reference/kubectl/cheatsheet/)

[WSL+Docker: Kubernetes on the Windows Desktop](https://kubernetes.io/blog/2020/05/21/wsl-docker-kubernetes-on-the-windows-desktop/)
