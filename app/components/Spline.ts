import { Application } from "@splinetool/runtime";

const canvas = document.getElementById("canvas3d") as any;
const app = new Application(canvas);
app.load("https://prod.spline.design/AEwsYdrdu3CIqDTz/scene.splinecode");
