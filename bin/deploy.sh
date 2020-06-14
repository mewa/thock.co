#!/bin/bash

set -exo pipefail

cd dist

aws s3 sync . "s3://${AWS_BUCKET}"
aws cloudfront create-invalidation --distribution-id "${AWS_CDN}" --paths '/index.html'
