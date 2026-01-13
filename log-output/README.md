# Log Output and PingPong apps

Initialize the cluster according to the instructions in the top-level README.

Create the required persistent volumes with `kubectl apply -f ../manifests`

Create the namespace with `kubectl apply -f manifests/exercises-namespace.yaml`

Deploy with `kubectl apply -f manifests`

Reachable via http://localhost:8081/api/status and http://localhost:8081/pingpong
