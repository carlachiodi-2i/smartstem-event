# Demos for SmartSTEM event

Before starting, make sure you have installed:
- NodeJS: https://nodejs.org/en/download/prebuilt-installer
- Python 3: https://www.python.org/downloads/

## Cypress
To show automated tests in Cypress, run these commandas to install the dependencies and start:

```
npm i 
npx cypress open
```

A window will open,  click 'E2E Testing', select your browser and then 'Start E2E Testing in [BROWSER]'.
Another window will appear with 2 spec files: wordle and testing.
- Wordle: use automation to play Wordle game
- Testing: run automated testing filling a form. Have valid and invalid tests.

## Snake-AI
Install dependencies and run the code:
```
pip install -r requirements.txt
python agent.py
```

It will open a window with the game and another with the plot of scores. Over time it should get better, learning the game.

## Uno-RL
Install dependencies and run the code:
```
pip install -r requirements.txt
python uno.py
```

