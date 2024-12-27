#!/bin/bash
source .env
eval $(ssh-agent -s)
ssh-add "$SSH_KEY_PATH"
rsync -a --delete -e "ssh -o StrictHostKeyChecking=no" ./build/ $SSH_USER@bryancasanelli.cl:/var/www/web-test/
kill $SSH_AGENT_PID