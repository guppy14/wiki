---
type: concept
title: Physics-based Simulation
tags: [concept, simulation, digital-twin, engineering]
created: 2026-04-10
updated: 2026-04-10
sources: [Digitale Zwillingstechnologie.md]
---

# Physics-based Simulation

## Definition

Physikbasierte Simulation modelliert das Verhalten von Systemen auf Basis physikalischer Gesetze (Mechanik, Thermodynamik, Elektromagnetismus, Strömungsdynamik etc.) — im Gegensatz zu rein datengetriebenen Modellen. Im Kontext von [[concepts/digital-twin|Digitalen Zwillingen]] bildet sie das "Grundgerüst" des virtuellen Modells, das durch Echtzeit-Betriebsdaten dynamisiert wird.

## Key Ideas

- Modelle basieren auf Naturgesetzen — keine Black-Box, sondern interpretierbare Physik.
- Ermöglicht verlässliche Extrapolation auf Szenarien, für die keine Trainingsdaten existieren (Was-wäre-wenn).
- Kombination mit Live-Daten und KI: physikbasiertes Modell + Datenkalibrierung + KI-Analyse = KI-gestützter Digital Twin.
- Anwendungsbereiche: Mechanik, Elektronik, Software, Automation — über den gesamten Produktlebenszyklus.

## How It Appears in Sources

- [[sources/digitale-zwillingstechnologie|Digitale Zwillingstechnologie]] — als eine der beiden Grundlagen des KI-gestützten Digital Twins: "combine physics-based simulation with real-time operational data"

## Related Concepts

- [[concepts/digital-twin|Digital Twin]] — physics-based Simulation ist eine der Kernkomponenten
- [[concepts/it-ot-konvergenz|IT/OT-Konvergenz]] — liefert die Echtzeit-Betriebsdaten, die die Simulation kalibrieren

## Related Entities

- [[entities/siemens|Siemens]] — führender Anbieter von Simulationssoftware (z. B. Simcenter-Portfolio)

## Evolution / Contradictions

- Spannung zwischen physikbasierten und rein datengetriebenen (ML-) Modellen: hybride Ansätze ("physics-informed AI") sind aktueller Forschungstrend.
- Physikbasierte Simulation ist rechenintensiv — KI kann hier als Surrogatmodell beschleunigen.

## Open Questions

- Welche Rolle spielen Large Language Models oder generative KI in physikbasierten Simulationsumgebungen?
- Wie werden Unsicherheiten im physikbasierten Modell quantifiziert und propagiert?
