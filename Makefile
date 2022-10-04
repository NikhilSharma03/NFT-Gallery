## Server Commands

## Install server dependencies on your local machine.
setup-server-libs: 
	cd server; npm install; cd ..

## Run server dev
run-server-dev:
	cd server; npm run server:dev; cd ..

## build server
build-server:
	cd server; npm run build; cd ..

## Run server (first use build-server to build server to dist dir)
run-server:
	cd server; npm start; cd ..
