# Start from a node image
FROM node:6

# Set node_env as production and port as 4000 
ENV NODE_ENV=production
ENV PORT=4000

# Copy everything to the code directory and make it the working directory
COPY . /code/
WORKDIR /code

# Need to install yarn before running commands
RUN npm install yarn -g
RUN npm install react-scripts -g
# Install dependencies
RUN yarn
# Run flow, lint and test checks
RUN yarn check
# Build project
RUN yarn build

#Expose on port 3000
EXPOSE 3000

