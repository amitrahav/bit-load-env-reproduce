# Environment varibles load into bit - reproduction

## What' I did to get here?
- Installed bit on OSX manteray (node v.16.16.0, npm 8.11.0, bit 0.0.792, bvm 0.1.4)
- I Ran 
```
$ bit new react dot-env
$ cd dot-env
$ bit start  # localhost:3000 run as expected
$ bit create react text  # Creating a react compnent
$ bit create react-app host # Creating an app enviorment
``` 
- I Added the `.env` file into the root and both of the compnent directories, In case there's a dot env loader hidden on some level.
- I edited the text and the host compnent to use env var which exsited in the `.env` file
- I ran both `bit start` and `bit run host` to check if the `.env` file is somehow being loaded, It's not.
- I ran `export REACT_APP_TEXT="hello" && bit start` and `REACT_APP_TEXT="hello" bit start` and `export REACT_APP_TEXT="hello" && bit run host` and `REACT_APP_TEXT="hello" bit run host`, and none of them seems to load the env var.


## What's ecpected
Bit to load enviorment varibles in some level.

- **Compnent level env vars**

1. Is there a way for a compnent to load and mange it's own env vars?
2. Should I Write a custom env for each compnent that I needs env vars?

- **App level env vars**

1. Is there a way for an app to load env vars?
