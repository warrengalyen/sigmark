# Sigmark

> Email Signature Generator

## Features

- Upload image - upload to AWS S3 or set public link
- Custom fields - add unlimited number of custom fields with different types such as: text, link, email
- Social icons - add social media links to your signature
- Options - customize your signature as you like, change color, avatar shape, font and more
- Addons - additional options such as disclaimer, mobile application badges
- Templates - templates for signature (so far, only one template)
- Projects - ability to save, download or import a previously created signature. No need to create an account, everything is already available in the browser
- Signature preview - hot reloading preview

## Roadmap

- Create more templates
- Create more addons

## Development

Set env variables

```bash
VUE_APP_AWS_S3_URL=
VUE_APP_AWS_S3_BASKET=
VUE_APP_AWS_S3_ID=
VUE_APP_AWS_S3_KEY=
VUE_APP_AWS_S3_REGION=
```
Run
s
```bash
npm i
npm run serve
```
