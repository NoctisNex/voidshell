---
language: "de"
title: "AWS-Infrastruktur und automatische Skalierung"
slug: "cloud-solutions-m346"
description: "AWS-Labs mit cloud-init, öffentlichen und privaten Netzwerken, Lastverteilung und getesteter Skalierung von zwei auf vier Instanzen."
category: "Kursarbeiten / M346"
year: "2026"
status: "Kurs abgeschlossen"
technologies: ["AWS EC2", "VPC", "S3", "cloud-init", "ALB", "CloudWatch"]
repository: "https://gitlab.com/NoctisNex/cloud-native-bootcamp/-/tree/main/M346?ref_type=heads"
order: 1
---

## Die Arbeit

Im Modul 346 an der TBZ habe ich Infrastruktur im AWS Learner Lab aufgebaut und getestet. Die Übungen führten von einzelnen Servern zu einer Webserver-Umgebung mit Lastverteilung und automatischer Skalierung über zwei Availability Zones. Konfigurationen, Befehle, Testergebnisse und Fehlersuche habe ich auf GitLab dokumentiert.

Ausserdem habe ich On-Premises-, AWS- und Azure-Varianten für ein fiktives Unternehmen mit 50 Mitarbeitenden verglichen. Das war eine Kostenplanungsübung mit festgehaltenen Annahmen, keine Migration für einen echten Kunden. [Kostenvergleich (KN01)](https://gitlab.com/NoctisNex/cloud-native-bootcamp/-/blob/main/M346/KN01/README.md).

## Bereitstellung und Netzwerke

Mit cloud-init habe ich Ubuntu-Instanzen konfiguriert, Pakete installiert und SSH-Zugänge eingerichtet. Einen Apache/PHP-Webserver und eine MariaDB-Datenbank habe ich auf zwei Instanzen aufgeteilt. Die Verbindung über das private Netzwerk habe ich mit einer PHP-Testseite und Adminer überprüft. Die cloud-init-Konfigurationen liegen im Repository. [Serverbereitstellung (KN03)](https://gitlab.com/NoctisNex/cloud-native-bootcamp/-/blob/main/M346/KN03/README.md).

Im Netzwerklab habe ich eine VPC mit je zwei öffentlichen und privaten Subnetzen in zwei Availability Zones aufgebaut, mit getrennten Routingtabellen und einem Internet Gateway. Ich habe Security Groups konfiguriert, HTTP- und SSH-Zugriffe auf die öffentliche Instanz getestet und von dort die Verbindung zur privaten Instanz geprüft. [VPC und Verbindungstests (KN05)](https://gitlab.com/NoctisNex/cloud-native-bootcamp/-/blob/main/M346/KN05/README.md).

Weitere Übungen behandelten statisches Webhosting und Objekte in S3 sowie das Einbinden und Formatieren eines EBS-Volumes auf Windows Server.

## Automatische Skalierung testen

Ich habe Webserver hinter einen Application Load Balancer gestellt und eine Auto Scaling Group mit mindestens zwei und höchstens vier Instanzen angebunden. Eine Target-Tracking-Regel nutzte die Anzahl der Anfragen pro Zielinstanz.

Mit einem Bash-Skript habe ich Last auf dem Load Balancer erzeugt und die CloudWatch-Alarme sowie die Skalierungsaktivität beobachtet. Die Gruppe wuchs von zwei auf vier Instanzen und ging nach Ende der Last wieder auf zwei zurück. Die Dokumentation zeigt die Alarme und Instanzaktivitäten für beide Richtungen. [Lastverteilung und Skalierungstest (KN06)](https://gitlab.com/NoctisNex/cloud-native-bootcamp/-/blob/main/M346/KN06/README.md).

## Ein Beispiel aus der Fehlersuche

Nach einem Neustart des Labs schlug eine RDP-Verbindung fehl. Ich überprüfte die geänderte öffentliche IP und führte den verbleibenden Fehler auf die Filterung im lokalen WLAN zurück. Über einen mobilen Hotspot funktionierte die Verbindung wieder. Die Übung zeigt, warum ich den gesamten Verbindungsweg prüfe, bevor ich etwas am Server ändere. [RDP-Fehlersuche (KN04)](https://gitlab.com/NoctisNex/cloud-native-bootcamp/-/blob/main/M346/KN04/README.md).
