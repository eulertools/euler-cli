# euler-cli

Node.js CLI (`create-euler-cli`) that lists AWS S3 buckets and **deletes** those matching a name prefix. Archived snapshot, as-is.

This tree is a **new public commit** with no git history. The original private archive is `eulertools/euler-cli-archive`.

## What was built (EN)

Interactive prompt (inquirer) + AWS SDK v2: `listBuckets` / `deleteObjects` / `deleteBucket` using the **default AWS credential chain**. No keys are stored in this repo. Packaged as an npm binary via rollup + terser.

**Do not run this against a live AWS account.** It bulk-deletes buckets.

## Qué se construyó (ES)

CLI para borrar buckets S3 por prefijo. Usa las credenciales por defecto del entorno. **No lo ejecutes contra una cuenta real.**

```bash
# historical; not supported
npm init euler-cli
```

---

## Notice / Aviso

**Euler Tools ha cerrado. Euler Tools is closed.**

La empresa quebró. Este repositorio está archivado y no se mantiene. El software se ofrece tal cual (as is), sin garantía ni soporte. Parte del material puede ser reclamado por acreedores.

The company went bankrupt. This repository is archived and unmaintained. Software is provided as is, with no warranty and no support. Some material may be claimed by creditors.

Site: https://euler.tools  
Org: https://github.com/eulertools  
Enquiries: https://sinequix.com · https://github.com/tebayoso
