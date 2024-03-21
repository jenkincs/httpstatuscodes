// app/sitemap.js

import { httpStatusCodes } from "./utils/data/httpstatuscodes";

const URL = process.env.SITE_URL;

export default async function sitemap() {
  const httpstatuscodes = Object.entries(httpStatusCodes).map(([code, meaning]) => ({
    url: `${URL}/statuscode/${code}-${meaning.toLowerCase().replaceAll(' ','-')}`,
    lastModified: new Date().toISOString(),
  }));

  const routes = ["/"].map((route) => ({
    url: `${URL}${route}`,
    lastModified: new Date().toISOString(),
  }));

  return [...routes, ...httpstatuscodes];
}
