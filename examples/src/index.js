import React from 'react';
import { render } from 'react-dom';

import Typeable from '../../src';

const App = () => (
    <Typeable
        text={'This is a test for typing animation.'}
        speed={40}
        variance={100}
        done={() => { console.log('done') }}
        transformText={(text) => { return text; }}
        showCursor={false} />
);

render(<App />, document.getElementById("root"));