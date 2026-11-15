# Notepad

**In development** · Source: [tantal-os/notepad](https://github.com/tantal-os/notepad)

A text editor for files of any size and any type. Files open at once and are read as you scroll.

<div class="shots">

![Start](/apps/notepad/1.webp)
![Editing JSON](/apps/notepad/2.webp)
![Find and replace, dark](/apps/notepad/3.webp)
![Large file, still being read](/apps/notepad/4.webp)
![Menu, Dune wallpaper](/apps/notepad/5.webp)

</div>

Mock-ups of the design; the app may look slightly different.

## Features

- Files of any size open at once; only changed rows stay in memory, and saving copies unchanged bytes as they are.
- Any file opens as text: undecodable bytes and line ends are kept, control characters show as Unicode pictures.
- Encoding and line ending detection, a choice of encodings.
- Find and replace with regular expressions over the whole file.
- Syntax colors for JSON, XML, Markdown, Kotlin, Java, JS, C, Python, shell and config files.
- Line numbers, word wrap, undo and redo of any size, quick keys above the keyboard.
- Recent files and a draft that survives the app being killed.

## Permissions and network

- No permissions: you pick the files through the system file picker.
- No network access.
