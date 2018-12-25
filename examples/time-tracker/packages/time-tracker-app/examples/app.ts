#!/usr/bin/env node
import cdk = require("@aws-cdk/cdk");
import { TimeTrackerApp } from "../lib";

const app = new cdk.App();
new TimeTrackerApp(app, "time-tracker-app");
app.run();
