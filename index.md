---
layout: home
markdownStyles: false

landing:
  hero:
    title: [Your Android., With your AI.]
    text: >-
      One design across the whole system: Material You apps that work as
      one, colors from your wallpaper, a launcher with gestures, hidden apps
      and deep settings, and an AI core that never leaves the phone. No Google
      inside.
    follow: Follow development
    apps: See the apps
    base: Based on GrapheneOS, with the same protection.
    baseText: Every difference
    baseLink: /docs/vs-grapheneos
    logo: Tantal logo
  apps:
    base: /apps/
    title: Everything included
    text: >-
      The apps you use every day, made as one suite: the same Material You
      design, colors from your wallpaper and no Google services by default.
    list:
      - { page: phone, icon: call, name: Phone }
      - { page: messages, icon: sms, name: Messages }
      - { page: gallery, icon: photo_library, name: Gallery }
      - { page: calendar, icon: calendar_month, name: Calendar }
      - { page: clock, icon: alarm, name: Clock }
      - { page: calculator, icon: calculate, name: Calculator }
      - { page: music, icon: music_note, name: Music }
      - { page: weather, icon: partly_cloudy_day, name: Weather }
      - { page: recorder, icon: mic, name: Recorder }
      - { page: keyboard, icon: keyboard, name: Keyboard }
      - { page: notepad, icon: description, name: Notepad }
      - { page: launcher, icon: home, name: Launcher }
  ai:
    title: Your AI, your rules
    text: >-
      A system service written in Rust runs models on the phone's own Tensor
      chip: speech recognition, translation, text to speech and small language
      models. Apps reach it only with your permission; models come through our
      store and are verified before use.
    points:
      - icon: shield
        title: Private by default
        text: The core has no network access. Your voice, texts and requests stay on the device.
      - icon: cloud_off
        title: Works offline
        text: Voice typing, transcripts and live captions work without a connection, even in airplane mode.
      - icon: memory
        title: Built with Rust
        text: Memory safety where the core parses untrusted input, such as audio, text and model files.
    diagram:
      label: Your data and the AI core exchange data inside the phone; there is no connection to the cloud.
      data: Your data
      dataNote: voice, notes, recordings
      core: AI core
      coreNote: on the phone
      cloud: Cloud
      cloudNote: no connection
  join:
    title: Tantal is in active development
    text: >-
      There are no stable releases yet. Become part of this story: follow
      the code, suggest ideas, report bugs.
    contact: Contact
    contactLink: /contacts
---

<Home />
