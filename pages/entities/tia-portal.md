---
type: entity
title: TIA Portal
tags: [tool, siemens, plc, automation, engineering]
created: 2026-04-10
updated: 2026-04-10
sources: [Process Device Library.md]
---

# TIA Portal

**Type:** tool
**Also known as:** Totally Integrated Automation Portal

## Description

Das TIA Portal (Totally Integrated Automation Portal) ist Siemens' integrierte Engineeringumgebung für Automatisierungstechnik. Es vereint Programmierung, Konfiguration, Diagnose und Visualisierung von [[concepts/sps-plc|SPS]]-, [[concepts/hmi-scada|HMI]]- und Antriebssystemen in einer einzigen Softwareplattform. Die [[sources/process-device-library|Process Device Library (PDL)]] von [[entities/actemium-schweiz|Actemium Schweiz]] wurde spezifisch für das TIA Portal entwickelt.

## Key Facts

- Siemens-Standardplattform für industrielle Automatisierungsprojekte.
- Unterstützte Hardware (im PDL-Kontext): S7-1500 und ET200 SP-Controller.
- Enthält Step 7 als SPS-Programmierumgebung.
- Grundlage für die automatische HMI/SCADA-Generierung durch PDL.

## Appearances in Sources

- [[sources/process-device-library|Process Device Library]] — als Zielplattform der PDL; S7-1500 und ET200 SP als unterstützte Controller genannt

## Connections

- [[entities/siemens|Siemens]] — Hersteller und Betreiber des TIA Portals
- [[entities/actemium-schweiz|Actemium Schweiz]] — entwickelt PDL für das TIA Portal
- [[concepts/sps-plc|SPS / PLC]] — TIA Portal ist die primäre Programmierumgebung für Siemens-SPSen
- [[concepts/hmi-scada|HMI / SCADA]] — TIA Portal integriert WinCC für SCADA/HMI

## Notes & Open Questions

- Verhältnis von TIA Portal zu [[concepts/digital-twin|Digital Twin]]-Konzept (z. B. virtuelle Inbetriebnahme via PLCSIM Advanced) nicht im Artikel adressiert — relevante Verbindung für spätere Quellen.
