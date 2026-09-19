---
title: "Deploying services with containers"
slug: "container-services-m169"
description: "Module 169 coursework using Docker, with a focus on reproducible services, networking and administration."
category: "Coursework / M169"
year: "2026"
status: "Completed course"
technologies: ["Docker", "Git"]
repository: "https://gitlab.com/NoctisNex/cloud-native-bootcamp/-/tree/main/M169?ref_type=heads"
order: 2
---

## The course

I took module 169, "Services mit Containern bereitstellen", as part of the Cloud-native, DevOps and Container course at Technische Berufsschule Zürich (TBZ), from March to July 2026. During the course, I built services with Docker and kept the code under version control on GitLab.

The module focuses on deploying and administering local container services in a reproducible way.

## Making a service reproducible

The course covers defining the environment, documenting its logical and physical network layout, and keeping the deployment code versioned. Infrastructure as code is part of that approach: the configuration should make it possible to provision the services again.

Images, registries and the container lifecycle provide the underlying mechanics. Networking and persistent storage matter because a service usually depends on more than its own container.

## Running and troubleshooting it

The module also covers connections between services, ports, permissions and authentication. Security requirements belong in both the implementation and its documentation, with tests to check that the measures work.

Administration includes monitoring service health, managing resources and using the documentation and diagnostic tools to investigate faults. That connection between the configuration and the behaviour of a running service fits my interest in troubleshooting.

## My coursework

My module work is collected in the [M169 folder on GitLab](https://gitlab.com/NoctisNex/cloud-native-bootcamp/-/tree/main/M169?ref_type=heads). The [full bootcamp repository](https://gitlab.com/NoctisNex/cloud-native-bootcamp) also contains module 346.

This page summarises the course context and module scope. The exercises and implementation details are in the repository.
