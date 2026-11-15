---
layout: home
markdownStyles: false

landing:
  hero:
    title: [Твой Android., С твоим ИИ.]
    text: >-
      Один дизайн на всю систему: приложения Material You, которые работают
      как одно целое, цвета из обоев, лаунчер с жестами, скрытием
      приложений и глубокой настройкой и ИИ-ядро, которое не покидает
      телефон. Без Google.
    follow: Следить за разработкой
    apps: Посмотреть приложения
    base: Работает на базе GrapheneOS, с той же защитой.
    baseText: Все отличия
    baseLink: /ru/docs/vs-grapheneos
    logo: Логотип Tantal
  apps:
    base: /ru/apps/
    title: Всё в комплекте
    text: >-
      Приложения на каждый день, сделанные как единый набор: один дизайн
      Material You, цвета из обоев и никаких сервисов Google по умолчанию.
    list:
      - { page: phone, icon: call, name: Телефон }
      - { page: messages, icon: sms, name: Сообщения }
      - { page: gallery, icon: photo_library, name: Галерея }
      - { page: calendar, icon: calendar_month, name: Календарь }
      - { page: clock, icon: alarm, name: Часы }
      - { page: calculator, icon: calculate, name: Калькулятор }
      - { page: music, icon: music_note, name: Музыка }
      - { page: weather, icon: partly_cloudy_day, name: Погода }
      - { page: recorder, icon: mic, name: Диктофон }
      - { page: keyboard, icon: keyboard, name: Клавиатура }
      - { page: notepad, icon: description, name: Блокнот }
      - { page: launcher, icon: home, name: Лаунчер }
  ai:
    title: Твой ИИ, твои правила
    text: >-
      Системный сервис на Rust запускает модели прямо на чипе Tensor в
      телефоне: распознавание речи, перевод, озвучку текста и небольшие
      языковые модели. Приложения получают к нему доступ только с вашего
      разрешения, а модели приходят через наш магазин и проверяются перед
      запуском.
    points:
      - icon: shield
        title: Приватно по умолчанию
        text: У ядра нет доступа в сеть. Голос, тексты и запросы остаются на устройстве.
      - icon: cloud_off
        title: Работает офлайн
        text: Голосовой ввод, расшифровка записей и субтитры работают без связи, даже в режиме полёта.
      - icon: memory
        title: Написано на Rust
        text: Безопасная работа с памятью там, где ядро разбирает чужие данные — звук, текст и файлы моделей.
    diagram:
      label: Ваши данные и ИИ-ядро обмениваются данными внутри телефона; связи с облаком нет.
      data: Ваши данные
      dataNote: голос, заметки, записи
      core: ИИ-ядро
      coreNote: на телефоне
      cloud: Облако
      cloudNote: нет связи
  join:
    title: Tantal в активной разработке
    text: >-
      Стабильных релизов пока нет. Станьте частью этой истории: следите за
      кодом, предлагайте идеи, сообщайте об ошибках.
    contact: Связаться
    contactLink: /ru/contacts
---

<Home />
