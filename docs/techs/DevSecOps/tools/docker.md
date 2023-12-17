---
title: Docker
summary: Container technology, docker
date: '2021-08-08'
tags: ['DevSecOps', 'tools']
---


# Docker

[A Docker Tutorial for Beginners](https://docker-curriculum.com/#webapps-with-docker)

[Docker cleanup](https://gist.github.com/bastman/5b57ddb3c11942094f8d0a97d461b430)

## Dockerfile

### Multistage build for production and development images

[Best practices](https://docs.docker.com/develop/develop-images/dockerfile_best-practices/)

### Keywords/commands

- .dockerignore:  file ignore files in the context
- From  : a new build stage and sets the base image.
- RUN   : Execute commands in a new year on top of current image.
- CMD   : the defaults for an executing container.
  - exec, shell, Entrypoint default form.
- ENTRYPOINT : exec or shell form.

- LABEL : Add metadata to a image.
- EXPOSE: container listens on ports and protocols. Default TCP.
- ENV : environment variable in the following commands.

- ADD   :  Add files from the source new files, directories or remote file URLs
- COPY  : takes in a src and destination
- [Add or COPY](https://docs.docker.com/develop/develop-images/dockerfile_best-practices/#add-or-copy)

- VOLUME: create a mount point and marks it as externally mounted volume in the host
- USER: set user access group.
- WORKDIR: set the working directory for RUN, CMD, ENTRYPOINT, COPY and ADD.
- ARG: intention - update dockerfile if this arguments changed.
- ONBUILD: a trigger instruction to be executed at a later time
- STOPSIGNAL: system call signal that will be sent to the container to exit
- HEALTHCHECK: detect cases such as a web server that is stuck in an infinite
  loop and unable to handle new connections
- SHELL: Change default shell.

## Docker commands

- BUILD : use Dockerfile and a context(PATH or URL the set of files)
