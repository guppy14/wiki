---
type: concept
title: SPS / PLC
tags: [concept, automation, plc, sps, industrial]
created: 2026-04-10
updated: 2026-04-13
sources: [Process Device Library.md, 109479728_LGF_V5_1_1_de.pdf]
---

# SPS / PLC

## Definition

Eine SPS (Speicherprogrammierbare Steuerung) — englisch PLC (Programmable Logic Controller) — ist ein industrieller Digitalrechner, der zur Steuerung von Maschinen und Prozessen eingesetzt wird. SPSen sind echtzeitfähig, robust und für den Einsatz in industriellen Umgebungen ausgelegt. Sie bilden die operative Kernebene der Industrieautomation (OT-Ebene) und sind zentraler Baustein der [[concepts/it-ot-konvergenz|IT/OT-Konvergenz]].

## Key Ideas

- **Echtzeit-Steuerung:** SPSen verarbeiten Eingangssignale (Sensoren) und steuern Ausgänge (Aktoren) in Echtzeit nach hinterlegten Programmen.
- **Bibliotheken:** Standardisierte SPS-Bibliotheken (wie die [[sources/process-device-library|PDL]] oder die [[entities/library-of-general-functions|LGF]]) bündeln wiederverwendbare Leittechnikfunktionen und beschleunigen Engineering.
- **Programmiersprachen:** IEC 61131-3 definiert Standardsprachen (Ladder Diagram, Structured Text, etc.).
- **Siemens-Produktlinie:** SIMATIC S7-1200, S7-1500 und ET200 SP sind aktuelle Siemens-SPS-Plattformen, programmiert über das [[entities/tia-portal|TIA Portal]].

## How It Appears in Sources

- [[sources/process-device-library|Process Device Library]] — PDL ist eine branchenübergreifende SPS-Bibliothek für Siemens S7-1500/ET200 im [[entities/tia-portal|TIA Portal]].
- [[sources/109479728-lgf-v5-1-1-de|LGF User Manual (V5.1.1)]] — Beschreibt die Library of General Functions für S7-1200 und S7-1500.

## Related Concepts

- [[concepts/hmi-scada|HMI / SCADA]] — SPS liefert Daten an HMI/SCADA-Systeme; PDL automatisiert diese Verbindung.
- [[concepts/it-ot-konvergenz|IT/OT-Konvergenz]] — SPS ist der OT-Kern; Konvergenz verbindet ihn mit IT-Systemen.
- [[concepts/industrie-4-0|Industrie 4.0]] — moderne SPSen sind vernetzt und Industrie-4.0-fähig.
- [[concepts/digital-twin|Digital Twin]] — virtuelle SPS-Modelle (z. B. PLCSIM Advanced) ermöglichen virtuelle Inbetriebnahme.
- [[concepts/engineering-efficiency|Engineering-Effizienz]] — wird durch den Einsatz von Bibliotheken auf der SPS maßgeblich beeinflusst.

## Related Entities

- [[entities/siemens|Siemens]] — führender SPS-Hersteller (SIMATIC S7-Linie).
- [[entities/tia-portal|TIA Portal]] — Programmierumgebung für Siemens-SPSen.
- [[entities/actemium-schweiz|Actemium Schweiz]] — entwickelt SPS-Bibliothek PDL.
- [[entities/library-of-general-functions|Library of General Functions (LGF)]] — Siemens-Basisbibliothek für SPSen.

## Evolution / Contradictions

- SPSen entwickeln sich von reinen Steuergeräten zu vernetzten, KI-fähigen Knoten im [[concepts/digital-twin|Digital-Twin]]-Ökosystem.
- Spannung: hardwarenah (OT) vs. softwarebasiert/cloudnativ (IT) — [[concepts/it-ot-konvergenz|IT/OT-Konvergenz]] überbrückt diesen Graben.

## Open Questions

- Wie integrieren sich moderne SPSen direkt in KI/ML-Pipelines?
- Verhältnis PDL zu PLCopen-Standard (herstellerunabhängige SPS-Bibliotheksstandards)?
