# devops-with-kubernetes

Repository for the University of Helsinki DevOps with Kubernetes course https://courses.mooc.fi/org/uh-cs/courses/devops-with-kubernetes

Create the required `k3d` cluster with the appropriate port mappings with `k3d cluster create --port 8082:30080@agent:0 -p 8081:80@loadbalancer --agents 2` and create the required folder for permanent storage with `docker exec k3d-k3s-default-agent-0 mkdir -p /tmp/kube`.

## Exercises

### Chapter 2

- [1.1](https://github.com/VSinerva/devops-with-kubernetes/tree/1.1/log_output)
- [1.2](https://github.com/VSinerva/devops-with-kubernetes/tree/1.2/course_project)
- [1.3](https://github.com/VSinerva/devops-with-kubernetes/tree/1.3/log_output)
- [1.4](https://github.com/VSinerva/devops-with-kubernetes/tree/1.4/course_project)
- [1.5](https://github.com/VSinerva/devops-with-kubernetes/tree/1.5/course_project)
- [1.6](https://github.com/VSinerva/devops-with-kubernetes/tree/1.6/course_project)
- [1.7](https://github.com/VSinerva/devops-with-kubernetes/tree/1.7/log_output)
- [1.8](https://github.com/VSinerva/devops-with-kubernetes/tree/1.8/course_project)
- [1.9](https://github.com/VSinerva/devops-with-kubernetes/tree/1.9/pingpong)
- [1.10](https://github.com/VSinerva/devops-with-kubernetes/tree/1.10/log-output)
- [1.11](https://github.com/VSinerva/devops-with-kubernetes/tree/1.11/log-output)
- [1.12](https://github.com/VSinerva/devops-with-kubernetes/tree/1.12/course-project)
- [1.13](https://github.com/VSinerva/devops-with-kubernetes/tree/1.13/course-project)

### Chapter 3

- [2.1](https://github.com/VSinerva/devops-with-kubernetes/tree/2.1/log-output)
- [2.2](https://github.com/VSinerva/devops-with-kubernetes/tree/2.2/course-project)
- [2.3](https://github.com/VSinerva/devops-with-kubernetes/tree/2.3/log-output)
- [2.4](https://github.com/VSinerva/devops-with-kubernetes/tree/2.4/course-project)
- [2.5](https://github.com/VSinerva/devops-with-kubernetes/tree/2.5/log-output)
