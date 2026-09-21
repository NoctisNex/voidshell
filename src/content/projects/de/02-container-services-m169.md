---
language: "de"
title: "Container bereitstellen, orchestrieren und überwachen"
slug: "container-services-m169"
description: "Kursarbeiten mit Docker: Images bereitstellen, einen Swarm-Cluster mit fünf Nodes betreiben, die Wiederherstellung nach Ausfällen testen und das Monitoring mit Prometheus und Grafana einrichten."
category: "Kursarbeiten / M169"
year: "2026"
status: "Kurs abgeschlossen"
technologies: ["Docker", "Compose", "Swarm", "Prometheus", "Grafana", "Trivy"]
repository: "https://gitlab.com/NoctisNex/cloud-native-bootcamp/-/tree/main/M169?ref_type=heads"
outcomes: ["Einen Swarm-Cluster mit fünf Nodes betrieben und geprüft, ob Tasks nach dem Löschen von Containern und dem Ausfall eines Workers wiederhergestellt werden.", "Monitoring-Alarme mit einem Lasttest ausgelöst und die Benachrichtigungen beim Auslösen und nach der Entwarnung dokumentiert."]
order: 2
---

## Worum es ging

Im Modul 169 an der TBZ habe ich Dienste in Containern auf AWS EC2 bereitgestellt und getestet, wie sie sich unter Last und beim Ausfall eines Workers verhalten. Im Repository sind die Übungen mit Konfigurationsauszügen und Screenshots der Ergebnisse dokumentiert.

## Images erstellen und Container bereitstellen

Als Grundlage diente eine Node.js/Express-Anwendung aus dem Kurs. Ich habe den Port und das Erscheinungsbild angepasst und mit dem mitgelieferten Dockerfile ein Image erstellt. Anschliessend habe ich das Image in die GitLab Container Registry hochgeladen, die Anwendung auf EC2 bereitgestellt und im Browser getestet.

Bei einem weiteren Kursbeispiel mit Flask und Redis habe ich die Docker-Compose-Konfiguration angepasst. Die Änderungen betrafen den nach aussen freigegebenen Port, das benannte Volume und das gemeinsame Netzwerk. Danach habe ich die laufenden Container überprüft und die Anwendung getestet. Beide Übungen bauten auf vorgegebenen Kursbeispielen auf. [Image- und Compose-Übungen (KN04)](https://gitlab.com/NoctisNex/cloud-native-bootcamp/-/blob/main/M169/KN04/README.md).

Ausserdem habe ich über einen SSH-Tunnel auf einen MariaDB-Container zugegriffen, ohne den Datenbankport in der EC2-Security-Group zu öffnen. In einem selbst angelegten Docker-Netzwerk habe ich die Namensauflösung und die Kommunikation zwischen Containern getestet. [Container- und Netzwerkübungen (KN03)](https://gitlab.com/NoctisNex/cloud-native-bootcamp/-/blob/main/M169/KN03/README.md).

## Orchestrierung und Wiederherstellung

Ich habe einen Docker-Swarm-Cluster auf fünf EC2-Instanzen aufgebaut: drei Manager und zwei Worker, verteilt auf zwei Availability Zones. Für die Installation habe ich cloud-init verwendet. Die Manager habe ich in den Drain-Modus versetzt, damit die Anwendungen auf den Workern liefen.

Bei einem Service habe ich die Anzahl der Replikate von fünf auf zehn erhöht und anschliessend gezielt drei Container entfernt. Swarm stellte die gewünschte Anzahl wieder her. In einer weiteren Übung habe ich einen Stack über eine Konfigurationsdatei definiert, darin die Anzahl der Replikate geändert und eine Worker-Instanz beendet. Im Task-Verlauf war zu sehen, wie die betroffenen Tasks auf dem verbleibenden Worker neu gestartet wurden. [Swarm-Aufbau und Wiederherstellungstests (KN04)](https://gitlab.com/NoctisNex/cloud-native-bootcamp/-/blob/main/M169/KN04/README.md).

## Monitoring und Fehlersuche

Ich habe Prometheus, Grafana, Alertmanager, cAdvisor und Node Exporter konfiguriert, Dashboards importiert und Alarme für die CPU-Auslastung und die Anzahl der Container eingerichtet. Mit einem Stresstest habe ich die Alarme ausgelöst und die E-Mail-Benachrichtigungen beim Auslösen und nach der Entwarnung dokumentiert. Anschliessend habe ich einen vorgegebenen Monitoring-Stack mit Compose gestartet, um die manuelle Einrichtung mit einer deklarativen Konfiguration zu vergleichen.

Nach einem Neustart der Lab-Umgebung konnte Grafana die Datenquelle nicht mehr erreichen. Als Ursache stellte sich die geänderte öffentliche IP-Adresse heraus. Da Prometheus auf demselben Host lief, habe ich für die Verbindung stattdessen `localhost` verwendet. Ausserdem habe ich ein Image mit Trivy auf Schwachstellen geprüft und Sicherheitsoptionen für Container getestet. [Monitoring, Fehlersuche und Sicherheitsübungen (KN05)](https://gitlab.com/NoctisNex/cloud-native-bootcamp/-/blob/main/M169/KN05/README.md).
