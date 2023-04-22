# Snake Client Project

Snake game is a very popular video game. It is a video game concept where the player maneuvers a dot and grows it by ‘eating’ pieces of food. As it moves and eats, it grows and the growing snake becomes an obstacle to smooth maneuvers. The goal is to grow it to become as big as possible without bumping into the side walls, or bumping into itself, upon which it dies.

This is simply a multiplayer take on the genre.

Before you can run this client, you will need to be running the server side which you can download and install from here.

# Instructions

#### To play the game, one needs to implement a game client and server.

# Installation

#### Setup server and client and establish connection between the two.

## Local Server Setup

### Clone from repository:

#### This should be done in a separate terminal window since it will need to stay running while you work on and run the client in the main terminal window.

```
git clone https://github.com/lighthouse-labs/snek-multiplayer.git

cd snek-multiplayer

# install and run via npm
npm install
npm run play
```

#### To connect to this server from your client, use "localhost" as the IP address for the instructions below for Connecting To The Server.

## Client Setup:

#### This should be done in a separate terminal window. Fork and clone this repo(Su0112/snake-client)

```
git clone https://github.com/Su0112/snake-client.git snake-client

cd snake-client
node play.js (make sure Node is installed in your system)
```

## Use these keys to play (WASD):

#### w = "Move: up", a = "Move: left", s = "Move: down", d = "Move: right"

## Final Product

#### The final product looks like this:

!["client-server terminal screenshot while playing snake game"](/images/snake_game.png)

#### Change the name to your name on client.js file (Example: conn.write("Name: "YOUR NAME");)

!["client-server terminal screenshot of the initial game page"](/images/snake_initial.png)

#### When the player is idle, the following message is displayed on the terminal

!["client-server terminal screenshot when the player is idled and the snake is dead"](/images/snake_dead_bcoz_idled.png)

## Getting Started

- Follow steps inside the snek server repo to run the server side
- Run the development snake client using the `node play.js` command.
