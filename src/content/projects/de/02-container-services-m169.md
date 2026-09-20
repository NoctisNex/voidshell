---
language: "de"
title: "Container bereitstellen, orchestrieren und überwachen"
slug: "container-services-m169"
description: "Docker-Kursarbeiten mit Image-Bereitstellung, einem Swarm-Cluster aus fünf Nodes, Wiederherstellungstests und Monitoring mit Prometheus und Grafana."
category: "Kursarbeiten / M169"
year: "2026"
status: "Kurs abgeschlossen"
technologies: ["Docker", "Compose", "Swarm", "Prometheus", "Grafana", "Trivy"]
repository: "https://gitlab.com/NoctisNex/cloud-native-bootcamp/-/tree/main/M169?ref_type=heads"
order: 2
---

## Die Arbeit

Im Modul 169 an der TBZ habe ich Container-Dienste auf AWS EC2 bereitgestellt und getestet, wie sie sich unter Last oder beim Ausfall eines Workers verhalten. Im Repository stehen meine Lab-Dokumentation, Konfigurationsauszüge und Screenshots der Ergebnisse.

## Container bauen und bereitstellen

Ich habe die bereitgestellte Node.js/Express-Kursanwendung angepasst, ihren Port und ihr Erscheinungsbild geändert und mit dem mitgelieferten Dockerfile ein Image gebaut. Dieses habe ich in die GitLab Container Registry gepusht, auf EC2 bereitgestellt und im Browser geprüft.

Für ein separates Flask/Redis-Beispiel habe ich das Docker-Compose-Manifest angepasst, darunter den veröffentlichten Port, das benannte Volume und das gemeinsame Netzwerk. Ich habe die laufenden Container untersucht und die Anwendung getestet. Die Grundlage waren jeweils Kursbeispiele. [Image- und Compose-Übungen (KN04)](https://gitlab.com/NoctisNex/cloud-native-bootcamp/-/blob/main/M169/KN04/README.md).

Ausserdem habe ich über einen SSH-Tunnel auf einen MariaDB-Container zugegriffen, ohne den Datenbankport in der EC2-Security-Group zu öffnen. In einem selbst angelegten Docker-Netzwerk habe ich die Namensauflösung und die Kommunikation zwischen Containern getestet. [Container- und Netzwerkübungen (KN03)](https://gitlab.com/NoctisNex/cloud-native-bootcamp/-/blob/main/M169/KN03/README.md).

## Orchestrierung und Wiederherstellung

Ich habe einen Docker-Swarm-Cluster auf fünf EC2-Instanzen aufgebaut: drei Manager und zwei Worker in zwei Availability Zones. Für die Installation habe ich cloud-init genutzt. Die Manager habe ich in den Drain-Modus versetzt, damit die Anwendungen auf den Workern liefen.

Einen Service habe ich von fünf auf zehn Replicas skaliert und anschliessend gezielt drei Container entfernt. Swarm stellte die gewünschte Anzahl wieder her. In einer separaten Übung mit einem deklarativen Stack habe ich die Replica-Anzahl im Manifest geändert und eine Worker-Instanz terminiert. Der Task-Verlauf zeigte, wie die verlorenen Tasks auf dem verbleibenden Worker neu starteten. [Swarm-Aufbau und Wiederherstellungstests (KN04)](https://gitlab.com/NoctisNex/cloud-native-bootcamp/-/blob/main/M169/KN04/README.md).

## Monitoring und Fehlersuche

Ich habe Prometheus, Grafana, Alertmanager, cAdvisor und Node Exporter konfiguriert, Dashboards importiert und Alarme für CPU-Last und Container-Anzahl definiert. Ein Stresstest löste die Alarme aus. Die E-Mail-Meldungen beim Auslösen und nach Ende der Last habe ich dokumentiert. Danach habe ich einen bereitgestellten Monitoring-Stack mit Compose gestartet, um die manuelle Einrichtung mit deklarativer Konfiguration zu vergleichen.

Als Grafana nach einem Lab-Neustart seine Datenquelle nicht mehr erreichte, habe ich die geänderte öffentliche IP als Ursache gefunden und für Prometheus auf demselben Host localhost verwendet. Ausserdem habe ich ein Image mit Trivy gescannt und Sicherheitsoptionen für Container getestet. [Monitoring, Fehlersuche und Sicherheitsübungen (KN05)](https://gitlab.com/NoctisNex/cloud-native-bootcamp/-/blob/main/M169/KN05/README.md).
