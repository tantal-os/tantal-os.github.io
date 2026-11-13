---
pageClass: installer
---

# Web installer

Install Tantal from your browser, without the command line. You need the phone, a USB cable and a computer.

::: warning The installer doesn't work yet
This is a mock-up: the steps are described but the buttons are disabled. Tantal has not been released yet.
:::

## Prerequisites

- A Pixel 8 or newer that GrapheneOS can be installed on.
- A Chromium-based browser with WebUSB: Chrome, Edge, Brave or Vanadium. Firefox and Safari won't work.
- A USB cable, preferably the one that came with the phone. No USB hubs.
- The phone is at least half charged.
- Important data is backed up: installation wipes the phone.

## Enable OEM unlocking

On the phone, open Settings → About phone and tap "Build number" seven times. Then enable "OEM unlocking" in Settings → System → Developer options. The phone must be connected to the internet.

## Boot into fastboot mode

Turn the phone off. Hold the volume down button and, while holding it, press the power button. A red triangle and "Fastboot Mode" appear on screen.

## Connect the phone

Connect the phone to the computer and select it in the browser prompt.

<button class="md-button" disabled>Connect phone</button>

## Unlock the bootloader

Unlocking wipes all data. On the phone, select "Unlock the bootloader" with the volume buttons and confirm with the power button.

<button class="md-button" disabled>Unlock bootloader</button>

## Download the release

The installer downloads the latest stable release and verifies its signature.

<button class="md-button" disabled>Download release</button>

## Flash the release

Don't disconnect the phone until flashing is complete. It takes a few minutes.

<button class="md-button" disabled>Install Tantal</button>

## Lock the bootloader

Locking restores verified boot protection. On the phone, select "Lock the bootloader" and confirm. Data is wiped again.

<button class="md-button" disabled>Lock bootloader</button>

## First boot

On boot the phone shows a yellow warning about a different operating system and a key fingerprint. Compare it with the [published fingerprint](/verify).

In the setup wizard, choose Google services (microG, Google Play or nothing) and a browser (Vanadium or Titanium). After setup, turn off "OEM unlocking" in developer options.
