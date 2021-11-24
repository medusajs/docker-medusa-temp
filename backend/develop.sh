#!/bin/bash

npm install --loglevel=error

medusa migrations run

medusa develop