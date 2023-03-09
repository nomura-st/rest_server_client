
#!/usr/bin/env bash
# exit on error
set -o errexit

ROOT_PATH=./prisma
npx prisma db push --schema=$ROOT_PATH/dev/schema.prisma
npx prisma db push --schema=$ROOT_PATH/dev/schema_append.prisma
