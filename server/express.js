import express from "express";
import path from "path";

import basicHarmon from "./basicHarmon";
import proxy from "./proxy";
import tagsHarmon from "./tagsHarmon";
import target from "./target";

const app = express();

// middleware functions
app.use(target, basicHarmon, tagsHarmon, proxy);

app.listen(
  3000,
  () => console.log("Express listening on port 3000")
);
