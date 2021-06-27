# notes on the project

to build the project and generate `./dist` folder

```sh
parcel watch app.js
```

```sh
npm install -g browser-sync
```

then, in the app folder, run

```sh
browser-sync start --server --files '.'
```

The above command **watches all files in the current folder (and all subfolders) for changes**, and **launches a web server on port `3000`**, automatically **opening a browser window to connect to the server**.

Any time you change a file, the browser will refresh.

This will be very useful while we build our app, as we don’t have to keep refreshing the browser to see our changes.
