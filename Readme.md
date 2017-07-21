[![Gitter](https://badges.gitter.im/codefiction/codefiction-tech.svg)](https://gitter.im/codefiction/codefiction-tech?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
[![Build Status](https://semaphoreci.com/api/v1/lazycoder/codefiction-tech/branches/master/badge.svg)](https://semaphoreci.com/lazycoder/codefiction-tech)
# Codefiction Homepage

[Codefiction Home Page](http://www.codefiction.tech) homepage source code.

## Building the code
This repository is built using [Angular](angular.io). There are two ways to build and test this application

### Building using Docker
Why would you install stupid stuff to your shiny laptop while you can Dockerize it? Exactly!

```sh
docker-compose up serve
docker-compose up lint
docker-compose up test
```

### Building using local Node
If you are one of those old fashioned guys you can still build the code using the following `npm` commands

```sh
npm install
npm test
npm run serve
npm run lint
```

Navigate to `http://localhost:4200/`

# Contribution
Fork the repository, make your changes and send a Pull Request. Please don't merge any PR unless you're 100% sure it's working.
