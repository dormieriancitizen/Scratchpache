![scratchpache](https://github.com/JustAHippo/Scratchpache/assets/82006314/4a620aec-3773-4f48-b040-38da421edfe0)

Hosting HTML using Scratch as a CDN.

## Why?
Fuck you, that's why

## Setup

Remix the [main project](https://scratch.mit.edu/projects/852859818) and enter minified HTML into the encodeContent block. Once you run encodeContent, then do sendToCloud. Not entirely sure how long the history will last, but it looks long enough to be a valid storage. Then, modify main.js' "usedID" variable to reflect that of your scratch project.

## Warnings
~~Rerunning the sendToCloud will break the project. If you wish to edit, remix the project again and run through setup again with modified code. Edit the scratch ID in main.js again to match it.~~ fixed in #2

Lowercase only seems to be an issue right now. May be resolved later. I do not know.

You must also have the "Scratcher" role to run this project! Those without access to cloud variables cannot use this! "New Scratcher" will not cut it!

There is a length limit. While it is very large, I am not aware of it.
