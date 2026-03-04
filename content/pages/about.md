---
title: "About"
description: "Automation engineer specializing in PLC programming, commissioning, and IIoT integration."
url: "/about/"
---

![Battery recycling PLC](/attachments/siemensbatteryrecycling_plc_v2_compressed_2__1.png)

## About me

I design and commission robust industrial automation systems with a focus on practical plant-floor reliability. My work centers on Siemens TIA Portal and Beckhoff TwinCAT 3, with strong emphasis on maintainable PLC architecture, clear diagnostics, and disciplined commissioning.

## Core skills

- PLC software design, implementation, and validation
- HMI/SCADA workflows for operators and maintenance teams
- Industrial networking (Profinet, EtherCAT, OPC UA, MQTT)
- FAT/SAT planning, commissioning execution, and handover documentation
- OT/IT integration for production data and edge monitoring

## How I work

- Start with process clarity and failure-mode thinking
- Build structured control logic with readable alarm strategy
- Validate with repeatable commissioning checklists
- Leave behind systems that are stable, observable, and maintainable

## Request CV or contact me {#contact-form}

Use this form for project inquiries or CV requests.

<p id="form-success" class="form-success" hidden>Thank you. Your message has been sent successfully.</p>

<form class="about-contact-form" action="https://api.staticforms.dev/submit" method="post">
  <input type="hidden" name="apiKey" value="__STATIC_FORMS_KEY__">
  <input type="hidden" name="subject" value="Tronix website inquiry">
  <input type="hidden" name="redirectTo" value="https://tronix.no/about/?submitted=true#contact-form">
  <input type="text" name="honeypot" class="contact-honeypot" tabindex="-1" autocomplete="off" aria-hidden="true">

  <label for="name">Name</label>
  <input id="name" name="name" type="text" required>

  <label for="email">Email</label>
  <input id="email" name="email" type="email" required>

  <label for="company">Company (optional)</label>
  <input id="company" name="company" type="text">

  <label for="message">Message</label>
  <textarea id="message" name="message" rows="6" required></textarea>

  <div class="g-recaptcha" data-sitekey="6LejA4AsAAAAAO7cqiZkIe73A7kuMRXczXHfeAYm"></div>

  <button type="submit">Send message</button>
</form>

<script src="https://www.google.com/recaptcha/api.js" async defer></script>
<script>
  (function () {
    var params = new URLSearchParams(window.location.search);
    if (params.get("submitted") !== "true") return;

    var success = document.getElementById("form-success");
    if (success) {
      success.hidden = false;
    }

    params.delete("submitted");
    var query = params.toString();
    var cleaned = window.location.pathname + (query ? "?" + query : "") + window.location.hash;
    window.history.replaceState({}, "", cleaned);
  })();
</script>

