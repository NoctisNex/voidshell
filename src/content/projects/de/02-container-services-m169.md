---
language: "de"
title: "Container: Deployment, Orchestration und Monitoring"
slug: "container-services-m169"
description: "Docker-Labs mit Image-Deployment, einem Swarm-Cluster mit fünf Nodes, Recovery-Tests und Monitoring mit Prometheus und Grafana."
category: "Kursarbeiten / M169"
year: "2026"
status: "Kurs abgeschlossen"
technologies: ["Docker", "Compose", "Swarm", "Prometheus", "Grafana", "Trivy"]
repository: "https://gitlab.com/NoctisNex/cloud-native-bootcamp/-/tree/main/M169?ref_type=heads"
outcomes: ["Einen Swarm-Cluster mit fünf Nodes betrieben und die Task Recovery nach dem Entfernen von Containern und dem Ausfall eines Workers erfolgreich getestet.", "Monitoring-Alerts mit einem Load Test ausgelöst und die Benachrichtigungen für die Zustände Firing und Resolved dokumentiert."]
order: 2
---

## Worum es ging

Im Modul 169 an der TBZ habe ich Container-Services auf AWS EC2 deployt. Dabei habe ich getestet, wie sie sich unter Last und beim Ausfall eines Workers verhalten. Die Labs sind im Repository mit Konfigurationsauszügen und Screenshots dokumentiert.

## Image-Builds und Deployment

Für eine Node.js/Express-Anwendung aus dem Kurs habe ich den Port und das Aussehen angepasst. Mit dem mitgelieferten Dockerfile habe ich ein Image gebaut und in die GitLab Container Registry gepusht. Danach habe ich die Anwendung auf EC2 deployt und im Browser getestet.

Bei einem weiteren Kursbeispiel mit Flask und Redis habe ich das Docker-Compose-Manifest angepasst: den Published Port, das Named Volume und das gemeinsame Netzwerk. Anschliessend habe ich die laufenden Container überprüft und die Anwendung getestet. Beide Übungen bauten auf vorgegebenen Kursbeispielen auf. [Image- und Compose-Labs (KN04)](https://gitlab.com/NoctisNex/cloud-native-bootcamp/-/blob/main/M169/KN04/README.md).

Über einen SSH-Tunnel habe ich auf einen MariaDB-Container zugegriffen, ohne den Datenbankport in der EC2 Security Group zu öffnen. In einem selbst angelegten Docker-Netzwerk habe ich ausserdem die Name Resolution und die Kommunikation zwischen Containern getestet. [Container- und Networking-Labs (KN03)](https://gitlab.com/NoctisNex/cloud-native-bootcamp/-/blob/main/M169/KN03/README.md).

## Orchestration und Recovery

Ich habe einen Docker-Swarm-Cluster auf fünf EC2-Instanzen aufgebaut: drei Manager und zwei Worker in zwei Availability Zones. Für die Installation habe ich cloud-init verwendet. Die Manager habe ich in den Drain Mode versetzt, damit die Workloads auf den Workern liefen.

Bei einem Service habe ich die Anzahl der Replicas von fünf auf zehn erhöht und gezielt drei Container entfernt. Swarm stellte die gewünschte Anzahl wieder her. In einem weiteren Lab habe ich einen Stack deklarativ in einem Manifest definiert, die Anzahl der Replicas geändert und eine Worker-Instanz beendet. Die Task History zeigte, dass die betroffenen Tasks auf dem verbleibenden Worker neu starteten. [Swarm-Setup und Recovery-Tests (KN04)](https://gitlab.com/NoctisNex/cloud-native-bootcamp/-/blob/main/M169/KN04/README.md).

## Monitoring und Troubleshooting

Ich habe Prometheus, Grafana, Alertmanager, cAdvisor und Node Exporter konfiguriert, Dashboards importiert und Alerts für CPU Load und Container Count eingerichtet. Mit einem Stress Test habe ich die Alerts ausgelöst und die E-Mail-Benachrichtigungen für die Zustände Firing und Resolved dokumentiert. Danach habe ich einen vorgegebenen Monitoring-Stack mit Compose gestartet, um das manuelle Setup mit einer deklarativen Konfiguration zu vergleichen.

Nach einem Neustart des Labs konnte Grafana die Data Source nicht mehr erreichen, weil sich die öffentliche IP-Adresse geändert hatte. Da Prometheus auf demselben Host lief, habe ich für die Verbindung stattdessen `localhost` verwendet. Ausserdem habe ich mit Trivy einen Vulnerability Scan eines Images durchgeführt und Security-Optionen für Container getestet. [Monitoring-, Troubleshooting- und Security-Labs (KN05)](https://gitlab.com/NoctisNex/cloud-native-bootcamp/-/blob/main/M169/KN05/README.md).
