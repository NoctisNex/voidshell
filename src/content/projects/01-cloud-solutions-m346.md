---
title: "AWS infrastructure and automatic scaling"
slug: "cloud-solutions-m346"
description: "AWS lab work with cloud-init, public and private networks, load balancing and a tested scale-out from two to four instances."
category: "Coursework / M346"
year: "2026"
status: "Completed course"
technologies: ["AWS EC2", "VPC", "S3", "cloud-init", "ALB", "CloudWatch"]
repository: "https://gitlab.com/NoctisNex/cloud-native-bootcamp/-/tree/main/M346?ref_type=heads"
outcomes: ["Built a VPC with public and private subnets across two Availability Zones.", "Verified automatic scaling from two to four instances under load and back to two afterwards."]
order: 1
---

## The work

In module 346 at TBZ, I built and tested infrastructure in the AWS Learner Lab. The exercises progressed from individual servers to a web tier with load balancing and automatic scaling across two Availability Zones. I documented the configuration, commands, test results and troubleshooting in GitLab.

I also compared on-premises, AWS and Azure options for a fictional company with 50 employees. That was a cost-planning exercise with stated assumptions, rather than a real customer migration. [Cost comparison (KN01)](https://gitlab.com/NoctisNex/cloud-native-bootcamp/-/blob/main/M346/KN01/README.md).

## Provisioning and networking

I used cloud-init to configure Ubuntu instances, install packages and set up SSH access. I separated an Apache/PHP webserver and a MariaDB database onto two instances, then verified their connection over the private network with a PHP test page and Adminer. The cloud-init configurations are included in the repository. [Server provisioning (KN03)](https://gitlab.com/NoctisNex/cloud-native-bootcamp/-/blob/main/M346/KN03/README.md).

For the network lab, I created a VPC with two public and two private subnets across two Availability Zones, separate route tables and an Internet Gateway. I configured security groups and tested HTTP and SSH access to the public instance, then connectivity from that instance to the private one. [VPC and connectivity tests (KN05)](https://gitlab.com/NoctisNex/cloud-native-bootcamp/-/blob/main/M346/KN05/README.md).

Other exercises covered static website hosting and objects in S3, plus attaching and formatting an EBS volume on Windows Server.

## Testing automatic scaling

I put webservers behind an Application Load Balancer and connected an Auto Scaling Group with a minimum of two and a maximum of four instances. A target-tracking policy used the number of requests per target.

I ran a Bash load test against the load balancer and observed CloudWatch alarms and the scaling activity. The group expanded from two to four instances, then returned to two after the load stopped. The write-up includes the alarms and instance activity for both directions. [Load balancing and scaling test (KN06)](https://gitlab.com/NoctisNex/cloud-native-bootcamp/-/blob/main/M346/KN06/README.md).

## A troubleshooting example

An RDP connection failed after a lab restart. I checked the changed public IP, then traced the remaining failure to filtering on the local Wi-Fi network. Switching to a mobile hotspot restored the connection. That exercise is a useful example of checking the whole connection path before changing the server. [RDP troubleshooting (KN04)](https://gitlab.com/NoctisNex/cloud-native-bootcamp/-/blob/main/M346/KN04/README.md).
