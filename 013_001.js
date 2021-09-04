// modules intro
"use strict"
let log = console.log;

// this file should be run on server
// the script should be with type="module":
// <script type="module" src="013_001.js"></script>

import {person} from "./scripts/module.js";
alert(person);