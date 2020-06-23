<!-- Badges -->
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-0.1-blue.svg?cacheSeconds=2592000" />
  <a href="#" target="_blank">
    <img alt="License: MIT " src="https://img.shields.io/badge/License-GPL-yellow.svg" />
  </a>
  <a href="https://twitter.com/redacuve" target="_blank">
    <img alt="Twitter: redacuve " src="https://img.shields.io/twitter/follow/redacuve.svg?style=social" />
  </a>
</p>


<!-- Project Header -->
  <p align="center">
    <img src="weather.png" width="250">
  <br>
  <h1 align="center">Project Weather-app</h1>
  <p align="center">
  <br>
   <a href="https://github.com/redacuve/weather-app-js"><strong>Explore the repo »</strong></a>
  <br>
    <a href="https://github.com/redacuve/weather-app-js/issues">Request Feature</a>
  </p>
  <h2 align="center"><a href="https://raw.githack.com/redacuve/weather-app-js/app/dist/index.html"><strong>Live Link!</strong></a></h2>

<!-- TABLE OF CONTENTS -->

## Table of Contents

* [About the Project](#about-the-project)

* [Built With](#built-with)

* [Getting Started](#getting-started)

* [How it Works](#how-it-works)

* [Contributing](#contributing)

* [License](#license)

* [Contact](#contact)

* [Acknowledgements](#acknowledgements)

<!-- ABOUT THE PROJECT -->

## About The Project

This is a weather app, here you can search for a city, select it, and it will display the name of the city, the date, and the weather data.

Also, you can change the units, from the international system (Celsius, kilometers, meters) or us system (Fahrenheit, inches, miles).

This app includes beautiful wallpaper images to illustrate the current weather of the city of your choice.

For more details about this project and it's requeriments go to <a href="https://www.theodinproject.com/courses/javascript/lessons/weather-app"> The Odin Project</a>


### Built With

* [HTML5](https://developer.mozilla.org/es/docs/HTML/HTML5)

* [CSS](https://developer.mozilla.org/es/docs/Web/CSS)

* npm Packages used:
    * [places.js](https://www.npmjs.com/package/places.js/v/1.16.1)

* API's used:
    * [Clima Ceil](https://developer.climacell.co/v3/docs)
    * [Algolia Places](https://www.algolia.com/doc/)

<!-- GETTING STARTED -->

## Getting Started

To get a local copy up and running follow these simple steps.

Clone or fork the <a href="https://github.com/redacuve/weather-app-js">repo</a> [git@github.com:redacuve/weather-app-js.git]

*note you need have install npm or yarn
* [npm](https://www.npmjs.com/get-npm)
* [yarn](https://classic.yarnpkg.com/en/docs/install)


<!-- HOW IT WORKS -->
## How it Works

This app is built with vanilla javascript, first, it uses algolia places to obtain the latitude and longitude of the selected city, then it connects to the climaceil API to obtain all of the weather information, it uses the method fetch to obtain a promise and passes it to a JSON format (another promise), then displays the information on the DOM.

It uses a helper file (convertHelper.js) to convert the values between the US system or the international system.

The background images are located inside the /src folder in weather-photos, and the icons are located inside the /src folder in weather-icons.

### Running the code

*   Navigate to the root directory of the project

*   Run this command on your terminal to add all the required packages and dependencies
    ```
    $ npm install
    ```
*   Also, you can build this webpage for production, this app it's going to be saved inside the /dist folder, here we can see a main.js file, this is a minified file of the previous files o¿inside /src folder.
    ```
    $ npm run build
    ```
*   Now the app is ready, you can open the index.html inside /dist folder.


<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project

2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)

3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)

4. Push to the Branch (`git push origin feature/AmazingFeature`)

5. Open a Pull Request

<!-- LICENSE -->

## License

This project is under the <a href="https://www.gnu.org/licenses/gpl-3.0.html">GNU Public License V3</a>. For more information see <a href="https://github.com/redacuve/weather-app-js/blob/master/LICENSE">here</a>

<!-- CONTACT -->

## Contact

Rey David Cuevas Vela - [@redacuve](https://twitter.com/redacuve) - [redacuve@gmail.com](mailto:redacuve@gmail.com) -[linkedin.com/in/redacuve/](https://www.linkedin.com/in/redacuve/)

Project Link: [github.com/redacuve/weather-app-js](https://github.com/redacuve/weather-app-js) - Weather App Project.

<!-- ACKNOWLEDGEMENTS -->

## Acknowledgements

* [Rey David Cuevas Vela](https://github.com/redacuve)
