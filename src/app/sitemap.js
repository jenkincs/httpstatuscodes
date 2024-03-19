// app/sitemap.js

import { httpStatusCodes } from "./utils/data/httpstatuscodes";

const URL = process.env.SITE_URL;

export default async function sitemap() {
  const httpstatuscodes = httpStatusCodes.map(({ code }) => ({
    url: `${URL}/statuscode/${code}`,
    lastModified: new Date().toISOString(),
  }));

  const routes = ["/"].map((route) => ({
    url: `${URL}${route}`,
    lastModified: new Date().toISOString(),
  }));

  return [...routes, ...httpstatuscodes];
}
