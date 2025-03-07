# Stack

- nextjs^14
- authjs^5
- prisma^5.9.1
- mysql database

## Context

As of today (8 March 2025), Prisma does not support Edge with MySQL database.

Workaround? <https://authjs.dev/guides/edge-compatibility>

## Motivation

I spent an hours figuring things out. I hope to save an hour of your time with this boilerplate.

## Approach

I progressed through the required step commit-by-commit, hopefully it makes understanding the steps easier.

## Caveats

- `yarn run prisma:migrate-dev / npx prisma migrate dev` has not been run (no `migration.sql` are generated)
