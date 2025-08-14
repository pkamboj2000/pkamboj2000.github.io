#!/bin/bash
cd "/Users/pranjalkamboj/Desktop/projects/pkamboj2000.github.io"
git add .
git commit -m "FORCE GitHub Pages refresh - $(date)"
git push origin main --force
echo "Push completed at $(date)"
