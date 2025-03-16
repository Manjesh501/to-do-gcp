FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

# Remove the circular dependency if it exists
RUN npm uninstall todo-list-app || true

EXPOSE 5000

CMD ["npm", "start"]