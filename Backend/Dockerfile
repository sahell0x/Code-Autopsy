FROM node:20-alpine

WORKDIR /app

COPY . .

# pass API_KEY , AGENT_MODEL envs whilerunnig the container 

RUN npm install

EXPOSE 3000


CMD [ "npm" , "run" , "start" ]