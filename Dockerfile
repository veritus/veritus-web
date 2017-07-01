# Start from a node image
FROM node:8

# Set node_env as production 
ENV NODE_ENV=production

RUN mkdir -p code

# Copy everything to the code directory and make it the working directory
COPY . /code/
WORKDIR /code

# Need to install react scripts
RUN npm install react-scripts -g
# Install dependencies
RUN yarn
# Run flow, lint and test checks
RUN yarn check
# Build project
RUN yarn build

CMD while true; do sleep 1; done


