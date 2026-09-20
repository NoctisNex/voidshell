---
title: "Container deployment, orchestration and monitoring"
slug: "container-services-m169"
description: "Docker coursework covering image deployment, a five-node Swarm cluster, recovery tests and monitoring with Prometheus and Grafana."
category: "Coursework / M169"
year: "2026"
status: "Completed course"
technologies: ["Docker", "Compose", "Swarm", "Prometheus", "Grafana", "Trivy"]
repository: "https://gitlab.com/NoctisNex/cloud-native-bootcamp/-/tree/main/M169?ref_type=heads"
outcomes: ["Ran a five-node Swarm cluster and verified task recovery after container removal and a worker failure.", "Triggered monitoring alerts under load and documented the firing and resolved notifications."]
order: 2
---

## The work

In module 169 at TBZ, I deployed container services on AWS EC2 and tested how they behave when load increases or a worker disappears. The repository contains my lab documentation, configuration excerpts and screenshots of the results.

## Building and deploying containers

I adapted the supplied Node.js/Express course application, changed its port and appearance, built an image with the provided Dockerfile and pushed it to the GitLab Container Registry. I then deployed it on EC2 and checked it in the browser.

For a separate Flask/Redis example, I adjusted the Docker Compose manifest, including the published port, named volume and shared network. I inspected the running containers and tested the application. These were adaptations of course examples. [Image and Compose exercises (KN04)](https://gitlab.com/NoctisNex/cloud-native-bootcamp/-/blob/main/M169/KN04/README.md).

I also connected to a MariaDB container through an SSH tunnel without opening its database port in the EC2 security group, and tested name resolution and communication on a user-defined Docker network. [Container and networking exercises (KN03)](https://gitlab.com/NoctisNex/cloud-native-bootcamp/-/blob/main/M169/KN03/README.md).

## Orchestration and recovery

I built a Docker Swarm cluster on five EC2 instances: three managers and two workers across two Availability Zones. I used cloud-init for the installation and put the managers into drain mode so workloads ran on the workers.

I scaled a service from five to ten replicas, then deliberately removed three containers. Swarm restored the desired count. In a separate declarative stack exercise, I changed the replica count in the manifest and terminated a worker instance. The task history showed the lost tasks restarting on the remaining worker. [Swarm setup and recovery tests (KN04)](https://gitlab.com/NoctisNex/cloud-native-bootcamp/-/blob/main/M169/KN04/README.md).

## Monitoring and troubleshooting

I configured Prometheus, Grafana, Alertmanager, cAdvisor and Node Exporter, imported dashboards and defined alerts for CPU load and container count. A stress test triggered the alerts; I documented the firing and resolved email notifications. I then deployed a supplied Compose monitoring stack to compare manual setup with declarative configuration.

When Grafana lost its data source after a lab restart, I traced it to a changed public IP and used localhost for Prometheus on the same host. I also scanned an image with Trivy and tested container security options. [Monitoring, troubleshooting and security exercises (KN05)](https://gitlab.com/NoctisNex/cloud-native-bootcamp/-/blob/main/M169/KN05/README.md).
