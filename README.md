# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)









.RoundDivMain {
    min-height: calc(100vh - 60px);
    width: calc(100vw - 60px);
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    padding: 30px;
    background: linear-gradient(135deg, #f5f7fa, #c3cfe2);
}

.RoundDivCenter {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.RoundDivSpaceBetween {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    gap: 20px;
}

.Round {
    height: 160px;
    width: 160px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 3px solid black;
    box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.5);
    border-radius: 50%;
    font-size: 25px;
    font-weight: bold;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.Round:hover {
    transform: scale(1.1);
    box-shadow: 0px 0px 20px 4px rgba(0, 0, 0, 0.8);
}

#one {
    background: radial-gradient(circle, yellow, orange);
}

#two {
    background: radial-gradient(circle, green, limegreen);
}

#three {
    background: radial-gradient(circle, deepskyblue, dodgerblue);
}

#four {
    background: radial-gradient(circle, deeppink, hotpink);
}

#five {
    background: radial-gradient(circle, slateblue, mediumslateblue);
}










.lineOne {
  width: 0;
  position: absolute;
  top: 18%;
  border-top: 254px solid rgb(125, 124, 124);
  border-right: 350px solid transparent;
}
.lineFour{
  width: 0;
  position: absolute;
  bottom: 1%;
  top: 59%;
  border-top: 260px solid transparent;
  border-right: 258px solid rgb(125, 124, 124);
  right:40%;
}
.lineThree{
  width: 0;
  position: absolute;
  top:60%;
  bottom: 1%;
  border-bottom: 254px solid rgb(125, 124, 124);
  border-right: 350px solid transparent;
}


<div id="container">
          <div className="lineFour"></div>
        </div>