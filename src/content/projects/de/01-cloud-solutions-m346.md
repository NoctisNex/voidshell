---
language: "de"
title: "AWS-Infrastruktur und Auto Scaling"
slug: "cloud-solutions-m346"
description: "AWS-Labs mit cloud-init, Public und Private Subnets, Load Balancing und Auto Scaling von zwei auf vier Instanzen."
category: "Kursarbeiten / M346"
year: "2026"
status: "Kurs abgeschlossen"
technologies: ["AWS EC2", "VPC", "S3", "cloud-init", "ALB", "CloudWatch"]
repository: "https://gitlab.com/NoctisNex/cloud-native-bootcamp/-/tree/main/M346?ref_type=heads"
outcomes: ["Eine VPC mit Public und Private Subnets in zwei Availability Zones aufgebaut.", "Auto Scaling erfolgreich getestet: unter Last von zwei auf vier Instanzen und danach wieder zurück auf zwei."]
order: 1
---

## Worum es ging

Im Modul 346 an der TBZ habe ich im AWS Learner Lab Infrastruktur aufgebaut und getestet. Angefangen habe ich mit einzelnen Servern. Daraus wurde eine Webserver-Umgebung mit Load Balancing und Auto Scaling in zwei Availability Zones. Konfigurationen, Commands, Testergebnisse und mein Vorgehen beim Troubleshooting habe ich auf GitLab dokumentiert.

Für ein fiktives Unternehmen mit 50 Mitarbeitenden habe ich ausserdem die Kosten einer On-Premises-Infrastruktur mit AWS- und Azure-Lösungen verglichen. Das war eine Übung zur Kostenplanung, keine Migration für einen Kunden. Die Annahmen für den Vergleich habe ich dokumentiert. [Kostenvergleich (KN01)](https://gitlab.com/NoctisNex/cloud-native-bootcamp/-/blob/main/M346/KN01/README.md).

## Provisioning und Networking

Mit cloud-init habe ich Ubuntu-Instanzen konfiguriert, Packages installiert und den SSH-Zugriff eingerichtet. Ein Apache/PHP-Webserver und eine MariaDB-Datenbank liefen auf separaten Instanzen. Mit einer PHP-Testseite und Adminer habe ich geprüft, ob die Verbindung über das private Netzwerk funktioniert. Die cloud-init-Konfigurationen liegen im Repository. [Server-Provisioning (KN03)](https://gitlab.com/NoctisNex/cloud-native-bootcamp/-/blob/main/M346/KN03/README.md).

Im Networking-Lab habe ich eine VPC mit zwei Public Subnets und zwei Private Subnets in zwei Availability Zones eingerichtet. Dazu kamen separate Route Tables und ein Internet Gateway. Ich habe Security Groups konfiguriert und den HTTP- und SSH-Zugriff auf die öffentliche Instanz getestet. Von dort aus habe ich die Verbindung zur privaten Instanz geprüft. [VPC und Connectivity-Tests (KN05)](https://gitlab.com/NoctisNex/cloud-native-bootcamp/-/blob/main/M346/KN05/README.md).

Weitere Labs behandelten Static Website Hosting und Object Storage in S3. Ausserdem habe ich ein EBS-Volume unter Windows Server eingebunden und formatiert.

## Auto Scaling testen

Ich habe Webserver hinter einem Application Load Balancer eingerichtet und eine Auto Scaling Group mit mindestens zwei und höchstens vier Instanzen angebunden. Eine Target Tracking Policy steuerte das Auto Scaling anhand der Anzahl Requests pro Target.

Mit einem Bash-Script habe ich einen Load Test durchgeführt und dabei die CloudWatch Alarms und Scaling-Aktivitäten beobachtet. Unter Last stieg die Anzahl der Instanzen von zwei auf vier. Nach dem Test sank sie wieder auf zwei. Ich habe die ausgelösten Alarms und das Hinzufügen und Entfernen der Instanzen beim Scale-out und Scale-in dokumentiert. [Load Balancing und Auto Scaling (KN06)](https://gitlab.com/NoctisNex/cloud-native-bootcamp/-/blob/main/M346/KN06/README.md).

## Troubleshooting einer RDP-Verbindung

Nach einem Neustart des Labs konnte ich keine RDP-Verbindung mehr herstellen. Zuerst prüfte ich die öffentliche IP-Adresse, die sich geändert hatte. Die Verbindung scheiterte aber auch an einem Filter im lokalen WLAN. Über einen mobilen Hotspot funktionierte sie wieder. Deshalb prüfe ich beim Troubleshooting den gesamten Verbindungsweg, bevor ich etwas am Server ändere. [RDP-Troubleshooting (KN04)](https://gitlab.com/NoctisNex/cloud-native-bootcamp/-/blob/main/M346/KN04/README.md).
