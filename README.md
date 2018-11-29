# Kubernetes training

This is source code and some of the recorded comamnds during the Kubernetes training.

## Steps

1. Create index.js with a webservice
2. Create Dockerfile that (builds and) runs the app
3. Build the docker image:
    ```bash
    sudo docker build . -t APP_NAME:VERSION
    ```
4. Check the image details with
    ```bash
    sudo docker images
    ```
5. Run the docker app
    ```bash
    sudo docker run -it -p HOST_PORT:CONTAINER_PORT APP_NAME:VERSION    # -it allows to pass cmds like CTRL+C
    ```
6. Check the running apps with:
    ```bash
    sudo docker ps
    ```
7. You can kill the running app with
    ```bash
    sudo docker kill CONTAINER_ID
    ```
8. Tag the application
    ```bash
    sudo docker tag APP_NAME:VERSION USERNAME/APP_NAME:VERSION
    ```

9. Login to docker hub and push
    ```bash
    sudo docker push USERNAME/APP_NAME
    ```

10. Build and tag in same command:
    ```bash
    sudo docker build -t USERNAME/APP_NAME:VERSION .
    ```


<hr/>

```bash
kubectl port-forward pea 8090:9000
```

* Run Pod based on configuration file:
  ```
  kubectl apply -f pod.yaml                           
  ```
* Delete pod:
  ```
  kubectl delete pod POD_ID
  ```
* Navigate to a Pod:
  ```
  kubectl exec -ti pea-app /bin/bash
  ```
* watch all pods for cluster:
  ```
  watch kubectl get pods --all-namespaces
  ```
* watch all services
  ```
  watch kubectl get svc
  ```

## Resources

* [https://kubernetes.io/docs/concepts/workloads/controllers/deployment/](https://kubernetes.io/docs/concepts/workloads/controllers/deployment/)
* [https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-probes/](https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-probes/)