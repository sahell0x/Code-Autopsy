FROM node:20-alpine

WORKDIR /app

COPY . .

# pass API_KEY , AGENT_MODEL envs whilerunnig the container 

RUN npm install && npx tsc

EXPOSE 3000


CMD [ "node" ,"dist/index.js" ]