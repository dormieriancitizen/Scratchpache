# Scratchpache
Hosting HTML using Scratch as a CDN.

## Why?
Fuck you, that's why

## Setup

Remix the [main project](https://scratch.mit.edu/projects/852859818) and enter minified HTML into the encodeContent block. Once you run encodeContent, then do sendToCloud. While the theoretical limit is much higher, 900 characters is the max of this scratch project. Then, modify main.js' "usedID" variable to reflect that of your scratch project.

## Warnings
Rerunning the sendToCloud will break the project. If you wish to edit, remix the project again and run through setup again with modified code. Edit the scratch ID in main.js again to match it.

Lowercase only seems to be an issue right now. May be resolved later. I do not know.
