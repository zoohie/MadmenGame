#!/bin/bash -e

export REDIS_HOST=${REDIS_HOST:-redis}
export REDIS_PORT=${REDIS_PORT:-63799}
export REDIS_PASS=${REDIS_PASS:-foopass}

wait-for-it ${REDIS_HOST}:${REDIS_PORT}
npm install
npm test
