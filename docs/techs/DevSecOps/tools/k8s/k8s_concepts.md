---
date: '2021-08-13'
tags: ['DevSecOps', 'tools']
---
# Kubernetes

## [What's k8s](https://kubernetes.io/docs/concepts/overview/what-is-kubernetes/)

Resource boundaries in different deployment era:

- Traditional - No boundary
- Virtualized - Isolated resource and security
- Container   - Bin + app

[Facilitate Canary deployments](https://octopus.com/docs/deployment-patterns/canary-deployments%5C#:%7E:text=Canary%20deployments%20are%20a%20pattern,the%20rest%20of%20the%20servers)

## [minikube](https://minikube.sigs.k8s.io/docs/)

minikube provisions and manages local Kubernetes clusters optimized
for development workflows.

[MiniKube vs MicroK8s](https://medium.com/faun/local-kubernetes-for-linux-minikube-vs-microk8s-f096e8e869b2)

## Why k8s?

- **Service discovery and load balancing**
- **Storage orchestration**
- **Automated rollouts and rollbacks**
- **Automatic bin packing**
- **Self-healing**
- **Secret and configuration management**

## [k8s components](https://kubernetes.io/docs/concepts/overview/components/)

### Control Plane Components

- k8s cluster = a set of worker machines(nodes)
- pods : smallest deployable units
- kube-apiserver: Front end of control plane
- etcd: distributed data store for cluster data.
- kube-scheduler: allocate newly created pods to an available node.
- kube-controller-manager: Node, Replication, Endpoints,
  Service Account & Token controller.
- cloud-controller-manager: Node, Route, Service controller dependencies.

### Node components

- kubelet: manages docker to conform PodSpecs
- kube-proxy: k8s service implementation.
- Container runtime: Docker

### Addons

- DNS: For service and pods
- Dashboard; UI
- Container Resource Monitoring
- Cluster-level Logging

![K8s diagrams](https://d33wubrfki0l68.cloudfront.net/2475489eaf20163ec0f54ddc1d92aa8d4c87c96b/e7c81/images/docs/components-of-kubernetes.svg)

[k3s vs minikube vs kind](https://brennerm.github.io/posts/minikube-vs-kind-vs-k3s.html#:%7E:text=Kind%20is%20another%20Kubernetes%20SIGs,very%20similar%20to%20minikube%27s%20approach.)

## The Kubernetes API

[Open API](https://www.openapis.org/)
API object needs to handle buffer, xml or json?

Google developed [protobuf](https://github.com/protocolbuffers/protobuf) before.

[protobuf like design](https://github.com/kubernetes/community/blob/master/contributors/design-proposals/api-machinery/protobuf.md)

## Kubernetes Objects - "record of intent"

Kubernetes objects are persistent entities in the Kubernetes system.

- Object Spec: describe the desired state
- Status: current state of the object, managed by k8s control plane.

### Management techniques

- Imperative commands: kubectl
- Imperative object config: .yaml file
- Declarative object config: directory of files.

Troubleshooting:
[k8s error image pullbackoff](https://managedkube.com/kubernetes/k8sbot/troubleshooting/imagepullbackoff/2019/02/23/imagepullbackoff.html)

### Object Names and IDs

- Names: /api/v1/pods/some-name

- IDs: UUID to track historical occurrences.

### Namespaces

Virtual cluster

```shell
kubectl get namespace
```

Namespaces and DNS:

When you create a [Service](https://kubernetes.io/docs/concepts/services-networking/service/),
it creates a corresponding [DNS entry](https://kubernetes.io/docs/concepts/services-networking/dns-pod-service/).

### Labels and selectors

Labels = Identifying key/values

selectors: filtering via label.

- *equality-based* : `=`, `==`, `!=`

- *set-based* : `in`,`notin` and `exists`

### Annotations

arbitrary non-identifying metadata to objects.

### Field Selectors

```shell
kubectl get pods --field-selector status.phase=Running
```

## Cluster architecture

### Nodes

Components: [kubelet](https://kubernetes.io/docs/reference/generated/kubelet),

a [container runtime](https://kubernetes.io/docs/setup/production-environment/container-runtimes), and the [kube-proxy](https://kubernetes.io/docs/reference/command-line-tools-reference/kube-proxy/)

Adding nodes:

- kubelet can self-register

- user manually add
