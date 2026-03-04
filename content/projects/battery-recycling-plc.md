---
title: "Battery Recycling PLC"
date: 2025-06-30
description: "PLC and HMI implementation for a battery recycling process line."
roles:
  - PLC programming
  - Commissioning
stack:
  - Siemens TIA Portal
  - WinCC
  - Profinet
---

![Battery recycling PLC](/attachments/siemensbatteryrecycling_plc_v2_compressed_2__1.png)

## Project overview

This project delivered controls software and commissioning support for a battery recycling process line with multiple coordinated stations. The focus was stable sequencing, clear diagnostics, and safe recovery during abnormal conditions.

## Scope

- Designed sequence logic and interlocks across process modules
- Implemented alarm handling and fault-state recovery paths
- Structured HMI screens for operators and maintenance workflows
- Coordinated IO and drive integration over Profinet
- Supported FAT/SAT and final handover documentation

## Outcomes

- Faster commissioning through reusable test checklists and clear startup states
- Improved troubleshooting through consistent alarm taxonomy and context-rich diagnostics
- Reduced restart risk after disturbances with explicit recovery sequences

## Photos

![Battery recycling overview](/attachments/04_kip_1_1.png)

## Lessons learned

- Early agreement on alarm philosophy prevents late-stage HMI churn
- Recovery-state logic should be designed as a first-class feature, not a patch
- Commissioning logs become critical project assets when standardized from day one
