# React Typeable
A super lightweight component to emulate typing. Versatile and customizable with options to transform the text as well as reactive due to onChange and done callbacks.
Mimics more natural typing style by varying the delay between keystrokes. Implementor has direct control over both the typing speed as well as the variance.

See it in action [here](http://www.arjundutta.codes)


# Props
```js
    text          : PropTypes.string.isRequired,
    speed         : PropTypes.number.isRequired,
    variance      : PropTypes.number.isRequired,
    transformText : PropTypes.func,
    done          : PropTypes.func,
    onChange      : PropTypes.func,
    showCursor    : PropTypes.bool
```

## text (*required*)
`string` - the text to be "typed"
## speed (*required*)
`number` - the delay between each keystroke
## variance (*required*)
`number` - the degree of variance in the delays between each keystroke (higher numbers will make for wider range of keystroke delays and therefore both more long delays as well as short delays)
## transformText
`function` - optional callback to transform the text as it's typed (eg. for text highlighting, etc)
## done
`function` - optional callback for when the component is done typing
## onChange
`function` - optional callback called everytime a character is typed
## showCursor
`boolean` - optional boolean to show cursor element at the end of the text

# Usage

`npm install react-typeable`


## Development
* clone repo && `npm install`
* Development server `npm start`.
* Continuously run tests on file changes `npm run watch-test`;
* Run tests: `npm test`;
* Build `npm run build`;
