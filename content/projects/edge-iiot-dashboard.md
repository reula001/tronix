---
title: "Edge IIoT Monitoring Dashboard"
description: "Edge gateway and dashboard for machine health and production metrics."
roles:
  - Data integration
  - Industrial networking
stack:
  - OPC UA
  - MQTT
  - Edge gateway
---

![Edge dashboard](/attachments/01_kip_1_1.png)

## Project overview

This project implemented an edge data pipeline and local dashboard for machine monitoring. The solution connected PLC data sources to a unified model and exposed production and health metrics for operators and technical teams.

## Scope

- Mapped PLC tags into a normalized telemetry model
- Streamed selected signals to an on-site edge gateway
- Built dashboards for status, throughput trends, and downtime context
- Added alerting thresholds for early fault visibility

## Outcomes

- Better cross-shift visibility into equipment behavior and stoppage patterns
- Shorter diagnosis cycles by consolidating key telemetry in one interface
- Cleaner OT/IT handoff through explicit tag mapping and naming standards

## Engineering notes

- Data quality was improved by filtering noisy tags at source level
- Network segmentation and principle-of-least-privilege access were enforced during rollout
