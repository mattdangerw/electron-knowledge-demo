electron-knowledge-demo
=======================

A demo of an electron knowledge app using the eos-knowledge-content library to
browse html content.

### Dependencies
First you will need node and npm installed. [Nodesource](https://github.com/nodesource/distributions)
is a good place to grab these from. Tested with node version 7.5.

Then you will need electron-forge install globally
```
npm install -g electron-forge
```

Finally you will need the knowledge base app installed.
```
flatpak --user remote-add endless-electron-apps --from https://s3-us-west-2.amazonaws.com/electron-flatpak.endlessm.com/endless-electron-apps.flatpakrepo
flatpak --user install --no-deps endless-electron-apps com.endlessm.ElectronKnowledgeBaseApp
```

### Building
To develop the app run
```
npm install
npm run start
```

To build the flatpak app run
```
npm install
npm run make
```
which will build the flatpak in the `out/make` directory.

### Installing
```
flatpak --user install --bundle out/make/com.endlessm.electron.myths.en_master_x86_64.flatpak
flatpak run com.endlessm.electron.myths.en
```
