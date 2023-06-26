// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular.json`.

import { config } from "config";

export const environment = {
  production: false,
  apiURL: config.apiUrl,
  firebaseConfig : {
    apiKey: "AIzaSyC0BxCjjtRzJbB65fnWQ8FqFkmElRcNsAY",
  authDomain: "viwitobms.firebaseapp.com",
  projectId: "viwitobms",
  storageBucket: "viwitobms.appspot.com",
  messagingSenderId: "791117764710",
  appId: "1:791117764710:web:de5c79e04491de9a2175a7",
  measurementId: "G-0W44ZDJLR5"
  }
};
