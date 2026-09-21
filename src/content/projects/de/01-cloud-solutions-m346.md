---
language: "de"
title: "AWS-Infrastruktur und automatische Skalierung"
slug: "cloud-solutions-m346"
description: "Praktische Übungen mit AWS: Server mit cloud-init einrichten, öffentliche und private Netzwerke aufbauen und die Lastverteilung sowie die Skalierung von zwei auf vier Instanzen testen."
category: "Kursarbeiten / M346"
year: "2026"
status: "Kurs abgeschlossen"
technologies: ["AWS EC2", "VPC", "S3", "cloud-init", "ALB", "CloudWatch"]
repository: "https://gitlab.com/NoctisNex/cloud-native-bootcamp/-/tree/main/M346?ref_type=heads"
outcomes: ["Eine VPC mit öffentlichen und privaten Subnetzen in zwei Availability Zones aufgebaut.", "Erfolgreich getestet, dass die Anzahl der Instanzen unter Last automatisch von zwei auf vier steigt und danach wieder auf zwei sinkt."]
order: 1
---

## Worum es ging

Im Modul 346 an der TBZ habe ich im AWS Learner Lab Infrastruktur aufgebaut und getestet. Zunächst ging es um einzelne Server, später um eine Webserver-Umgebung mit Lastverteilung und automatischer Skalierung in zwei Availability Zones. Die Konfigurationen, Befehle und Testergebnisse sowie mein Vorgehen bei der Fehlersuche habe ich auf GitLab dokumentiert.

Ausserdem habe ich für ein fiktives Unternehmen mit 50 Mitarbeitenden die Kosten einer lokalen Infrastruktur mit den Kosten von AWS- und Azure-Lösungen verglichen. Dabei ging es um eine Übung zur Kostenplanung auf der Grundlage dokumentierter Annahmen, nicht um eine tatsächliche Kundenmigration. [Kostenvergleich (KN01)](https://gitlab.com/NoctisNex/cloud-native-bootcamp/-/blob/main/M346/KN01/README.md).

## Bereitstellung und Netzwerke

Mit cloud-init habe ich Ubuntu-Instanzen konfiguriert, Pakete installiert und SSH-Zugänge eingerichtet. Einen Apache/PHP-Webserver und eine MariaDB-Datenbank habe ich auf zwei separaten Instanzen betrieben. Mit einer PHP-Testseite und Adminer habe ich überprüft, ob die Verbindung zwischen ihnen über das private Netzwerk funktioniert. Die cloud-init-Konfigurationen sind im Repository abgelegt. [Serverbereitstellung (KN03)](https://gitlab.com/NoctisNex/cloud-native-bootcamp/-/blob/main/M346/KN03/README.md).

In der Netzwerkübung habe ich eine VPC mit zwei öffentlichen und zwei privaten Subnetzen eingerichtet, verteilt auf zwei Availability Zones. Dazu kamen getrennte Routingtabellen und ein Internet Gateway. Ich habe Security Groups konfiguriert und den HTTP- und SSH-Zugriff auf die öffentliche Instanz getestet. Von dort aus habe ich anschliessend die Verbindung zur privaten Instanz geprüft. [VPC und Verbindungstests (KN05)](https://gitlab.com/NoctisNex/cloud-native-bootcamp/-/blob/main/M346/KN05/README.md).

In weiteren Übungen habe ich mich mit dem Hosting statischer Webseiten und der Objektspeicherung in S3 beschäftigt sowie ein EBS-Volume unter Windows Server eingebunden und formatiert.

## Automatische Skalierung testen

Ich habe Webserver hinter einem Application Load Balancer eingerichtet und eine Auto Scaling Group mit mindestens zwei und höchstens vier Instanzen angebunden. Die automatische Skalierung richtete sich über eine Target-Tracking-Regel nach der Anzahl der Anfragen pro Zielinstanz.

Mit einem Bash-Skript habe ich einen Lasttest durchgeführt und dabei die CloudWatch-Alarme sowie das Skalierungsverhalten beobachtet. Unter Last stieg die Anzahl der Instanzen von zwei auf vier. Nach dem Test sank sie wieder auf zwei. Die Dokumentation zeigt die Alarme und die zugehörigen Änderungen an den Instanzen beim Hoch- und Herunterskalieren. [Lastverteilung und Skalierungstest (KN06)](https://gitlab.com/NoctisNex/cloud-native-bootcamp/-/blob/main/M346/KN06/README.md).

## Ein Beispiel aus der Fehlersuche

Nach einem Neustart der Lab-Umgebung konnte ich keine RDP-Verbindung mehr herstellen. Ich prüfte zunächst die öffentliche IP-Adresse, die sich beim Neustart geändert hatte. Als weitere Ursache stellte sich eine Filterung im lokalen WLAN heraus. Über einen mobilen Hotspot funktionierte die Verbindung wieder. Das Beispiel zeigt, weshalb ich bei der Fehlersuche den gesamten Verbindungsweg prüfe, bevor ich etwas am Server ändere. [RDP-Fehlersuche (KN04)](https://gitlab.com/NoctisNex/cloud-native-bootcamp/-/blob/main/M346/KN04/README.md).
