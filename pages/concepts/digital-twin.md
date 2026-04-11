---
type: concept
title: Digital Twin
tags: [concept, digital-twin, simulation, industrial-ai, manufacturing]
created: 2026-04-10
updated: 2026-04-10
sources: [Digitale Zwillingstechnologie.md]
---

# Digital Twin

## Definition

Ein Digitaler Zwilling ist eine virtuelle Repräsentation eines physischen Objekts, Prozesses oder Systems — von einzelnen Bauteilen bis zu ganzen Produktionsanlagen. KI-gestützte Digitale Zwillinge kombinieren [[concepts/physics-based-simulation|physikbasierte Simulation]] mit Echtzeit-Betriebsdaten und schaffen einen kontinuierlichen Feedback-Loop zwischen der virtuellen und physischen Welt. Dadurch entstehen dynamische, sich selbst aktualisierende Modelle, die Design, Validierung und Optimierung ermöglichen.

## Key Ideas

- **Kontinuierlicher Feedback-Loop:** Echtzeit-Sensordaten aktualisieren den virtuellen Twin; Erkenntnisse fließen zurück in die physische Anlage.
- **Simulation vor Bau:** Produkte und Produktionsprozesse werden vollständig virtuell validiert (inkl. Mechanik, Elektronik, Software, Automation) — reduziert Risiko, Kosten und Time-to-Market.
- **Closed-Loop-Optimierung:** KI analysiert Szenarien, prognostiziert Verhalten und optimiert Durchsatz, Qualität und Planung kontinuierlich.
- **Executable Twins:** KI-Modelle werden im virtuellen Umfeld trainiert, dann als ausführbare Twins nah am physischen Asset deployed — für Echtzeitentscheidungen.
- **Skalierbarkeit:** Vom einzelnen Bauteil bis zum kompletten Produktionssystem.

## How It Appears in Sources

- [[sources/digitale-zwillingstechnologie|Digitale Zwillingstechnologie]] — zentrales Thema; [[entities/siemens|Siemens]] beschreibt Architektur (physikbasierte Simulation + Live-Daten), Anwendungsfälle (virtuelle Inbetriebnahme, Closed-Loop, autonome Entscheidung) und strategische Partnerschaft mit [[entities/nvidia|NVIDIA]]

## Related Concepts

- [[concepts/physics-based-simulation|Physics-based Simulation]] — technische Grundlage des Twins
- [[concepts/it-ot-konvergenz|IT/OT-Konvergenz]] — ermöglicht Datenfluss zwischen Twin und physischer Anlage
- [[concepts/industrial-metaverse|Industrial Metaverse]] — übergeordnetes Paradigma; Digital Twins sind ein Baustein davon
- [[concepts/knowledge-compilation|Knowledge Compilation]] — konzeptuell verwandt: beide kompilieren Wissen statt es bei Bedarf neu abzuleiten

## Related Entities

- [[entities/siemens|Siemens]] — führender Anbieter von Digital-Twin-Lösungen
- [[entities/nvidia|NVIDIA]] — Technologiepartner für KI-Infrastruktur
- [[entities/notebooklm|NotebookLM]] — Vergleichspunkt: RAG-Paradigma vs. Twin-Paradigma (beide sind Formen der Wissensinfrastruktur)

## Evolution / Contradictions

- Der Grad tatsächlicher "Autonomie" in aktuellen Deployments ist unklar — Marketingsprache vs. Produktionsreife.
- Verhältnis zu [[concepts/rag|RAG]]-basierten KI-Systemen nicht adressiert: Twins verarbeiten Echtzeit-Sensordaten; RAG verarbeitet Dokumente — beide sind Wissenssysteme mit unterschiedlichen Datenquellen.

## Open Questions

- Ab welchem Reifegrad sind "executable twins" mit autonomen Entscheidungen in der Praxis produktionssicher?
- Wie verhält sich Digital Twin zu generativen KI-Modellen — werden LLMs in Twins integriert?
- Welche Rolle spielt NVIDIA Omniverse in der Siemens-Partnerschaft?
