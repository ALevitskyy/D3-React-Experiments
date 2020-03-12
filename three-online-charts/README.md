#
Three - online - charts#### My hello - world project in combining d3 and react / redux(and pretty much using d3 in react in general)##### The link to the project - demo: https: //alevitskyy.github.io/three-online-charts/
    (to read about deploying one page react - apps to GitHub pages
        for free refer to https: //github.com/gitname/react-gh-pages)

        ###Goals 1) Make a basic linear Chart component which takes a javascript array in
    2) Create 3 instances of the Chart component on one page
3) Create a slider component, which can be used to contol what appears on the charts
4) Create new_data and new_brush actions, which can then be dispatched to reducres to make charts responsive to slider and new data points coming in
    5) Write reducers to deal with the actions
6) Define slider logic to be able to: freeze(not be affected by updates) on mouseenter event, and when slider includes last observed point, charts and slider should be able to automatically update in responce to new data incoming

### Demo explanation
Demo satisfies the goals introduced above.The chart is initialized with 100 data points and is updated every 1 second. **
    Known bugs **:
    1) Not always putting slider all the way to the right results in automatic updates(sometimes need to do it 2 times)
2) When someone clicks on the slider and then starts dragging and
while drugging goes outside the triangle, then unexpected behaviour occurs(because d3 triggers "mouseleave"
    event and the slider unfreezes) - need to fix slider logic

### Combining D3 / React
There are multiple tutorials and even tutorial book on the topic availabe, such as
1) https: //leanpub.com/reactd3js
    2) http: //bl.ocks.org/sxywu/61a4bd0cfc373cf08884
    3) http: //bl.ocks.org/sxywu/1db896c1a38d89ae71b4

    One can also
try to use https: //github.com/Olical/react-faux-dom, but this approach also has its limitations.

    Because D3 directly assesses the DOM and React does not like when anyone directly works with it, combining them is quite tricky.
All of the approaches I found on the web require many tricks, memorizing rules, and limit the usage of D3 -
    i.e.you can not take a ready D3 code snippet and port it to React component with little code changes.Also many of these approaches do not scale well.
    As a result I decided to use an intuitive approach, as I do not like to think much, which, as I realized later, resembles this tutorial: http: //bl.ocks.org/sxywu/fcef0e6dac231ef2e54b

        The approach involves writing a d3
    function
    which draws a chart / slider and then another one which cleans them(which is only called on rerender).
The component receives data from React, and callback
function via which d3 chart communicates to React(tells it when it can rerender the component and what actions to dispatch with Redux)
It also recieves the reference from ReactDOM to the component div.
Another problem that has to be dealt within d3 part of the code is to deal with the fact that on rerender all the information from previous interaction is lost, so it has also to be provided from component to d3
function.

After that, all is left is to do is to define correctly ShouldComponentUpdate, ComponentDidUpdate and ComponentDidMount(the last 2 only differ in a way that second
    case need to clean DOM, before drawing chart again on rerender)

###
Rules
for reusability
With the given approach there are quite many ways to get desirable performance from the visualization: you can either change d3 logic or app logic or play around with reducers.
To improve reusability I decided that,
if a feature is desirable to be reusable in the future it should be defined in d3 / component part of the code rather than in a reducer(particularly had that choice when doing slider logic).
Every choice which is app specific, I decided, should be defined in reducer.

### Running code
As simple as: ``
`npm install`
``, ``
`npm start`
``, but requires npm to be installed.