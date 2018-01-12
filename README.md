## Overview
This a demo of mocks provided by ITS. It is a react app that builds out one or two pages of the mocks.

I chose to focus on the responsive nature of this demo. The mobile vs desktop views were quite similar, but there were some nuances in each that needed to be accounted for. The decision to use `styled-components` helps when making things responsive because you can bake in media queries like you would normal css, but you have access to **props** when necessary.

The mocks for this were small enough that I chose to *not* use a state management solution like redux, as it would be overkill for the sake of a demo. In reality this would use a question service that fetches new questions. I would structure the API such that the question could come down with knowledge of its correct answer. From there, the UI could handle checking the answer without needing to go back to the server. Then the counts of correct/incorrect answers would all be stored in state. In production I would use redux for state management.

Some shortcuts were taken for the sake of the demo, and some things left out. For example, if I was putting this into production I would either convert this to Typescript or use PropTypes to tighten up the component attribute flow.

## Installation
1. Clone repo
2. Run (preferrably) `yarn` or `npm install` to install dependencies
3. Run `npm start` to start the app
4. Navigate to http://localhost:3000
5. Resize browser window using dev tools to test responsiveness

### Things to note
* Most of the application is built with stateless functional components
* Most of the css is in styled-components, with one or two override exceptions
* Flexbox is used throughout, with some guesses taken based on mocks for how layout should be
* I measured px widths of margins and padding and was unable to tell if this was based on a certain px grid system, so I just used the numbers in the mocks. In a production version of this I would probably expect a more consistent padding/margin like an 8px grid.
* Colors were chosen using the color picker on my mac
* I was unable to tell which font was used, so I didn't focus too much on it