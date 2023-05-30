import Koa from "koa";
import logger from "koa-logger";
import json from "koa-json";
import passport from 'koa-passport'
const app: Koa = new Koa();
import { router as articles } from "./routes/articles";
import { router as users } from './routes/special'
import cors from '@koa/cors';
import serve from 'koa-static-folder';

app.use(cors());
app.use(serve('./docs'));
app.use(logger());
app.use(json());
app.use(articles.routes());
app.use(users.routes());
app.listen(10888);
