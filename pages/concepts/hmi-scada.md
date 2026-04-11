---
type: concept
title: HMI / SCADA
tags: [concept, hmi, scada, automation, visualization, industrial]
created: 2026-04-10
updated: 2026-04-10
sources: [Process Device Library.md]
---

# HMI / SCADA

## Definition

**HMI (Human-Machine Interface)** ist die Bedienoberfläche, über die Bediener industrielle Anlagen überwachen und steuern — von einfachen Touchpanels bis zu PC-basierten Visualisierungssystemen.

**SCADA (Supervisory Control and Data Acquisition)** ist ein übergeordnetes Leitsystem, das Daten von verteilten [[concepts/sps-plc|SPS]]- und Feldgeräten sammelt, visualisiert und eine zentrale Prozessüberwachung und -steuerung ermöglicht.

Beide Ebenen sind eng verzahnt; im Industriekontext werden sie oft gemeinsam genannt.

## Key Ideas

- HMI: lokale Bedienung an Maschinen oder Anlagen — Statusanzeigen, Alarme, Parametrierung.
- SCADA: übergeordnete Leitwarte — Datenaggregation, Historisierung, Prozessüberwachung über Anlagenteile hinweg.
- **Automatische Generierung:** Die [[sources/process-device-library|PDL]] von [[entities/actemium-schweiz|Actemium Schweiz]] erzeugt HMI- und SCADA-Visualisierungen automatisch aus dem [[concepts/sps-plc|SPS]]-Programmcode — ein zentraler Effizienzgewinn.
- Siemens-Produkte: WinCC (SCADA) und diverse HMI-Panels sind Teil des [[entities/tia-portal|TIA Portal]]-Ökosystems.

## How It Appears in Sources

- [[sources/process-device-library|Process Device Library]] — automatische HMI/SCADA-Generierung aus S7-Code ist die Kernfunktion der PDL; standardisiertes "Look and Feel" über Branchen hinweg

## Related Concepts

- [[concepts/sps-plc|SPS / PLC]] — liefert Prozessdaten an HMI/SCADA
- [[concepts/it-ot-konvergenz|IT/OT-Konvergenz]] — HMI/SCADA ist die Brückenschicht zwischen OT (SPS) und IT (Datenanalyse, ERP)
- [[concepts/digital-twin|Digital Twin]] — SCADA-Daten sind eine wichtige Quelle für [[concepts/physics-based-simulation|physikbasierte Simulationen]] im Twin

## Related Entities

- [[entities/siemens|Siemens]] — Anbieter von WinCC SCADA und HMI-Panels
- [[entities/tia-portal|TIA Portal]] — integriert HMI/SCADA-Konfiguration
- [[entities/actemium-schweiz|Actemium Schweiz]] — automatisiert HMI/SCADA-Erstellung via PDL

## Evolution / Contradictions

- Trend: HMI/SCADA migriert von lokalen Systemen in web-basierte und cloudnative Architekturen.
- Grenze zwischen SCADA und [[concepts/digital-twin|Digital Twin]] verschwimmt: moderne Twins übernehmen zunehmend SCADA-Funktionen.

## Open Questions

- Wie unterscheidet sich automatisch generiertes HMI (PDL-Ansatz) qualitativ von manuell erstelltem in Bezug auf Usability und Wartbarkeit?
- Welche Rolle spielen KI-gestützte Anomalieerkennung in modernen SCADA-Systemen?
