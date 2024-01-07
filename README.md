# Get location by IP or URL
An application designed to determine your location upon page opening, allowing you to check the location through either IP or a provided link.

[LINK TO DEMO](https://sampak.github.io/iplocalization-catcher-sfm/)
## Installation
### With Docker
- Copy the repository to the local machine.
- Rename .env.example to .env.
- Get your API key from [ipstack.com](https://ipstack.com).
- Change REACT_APP_API_KEY to your API key.
- Open the command line.
- Navigate to the folder with the project.
- Run the command: `docker build . -t sampak/sofomo`
- Run the command: `docker-compose up`
- Visit the page: [http://localhost](http://localhost)

### Without Docker
- Copy the repository to the local machine.
- Rename .env.example to .env.
- Get your API key from [ipstack.com](https://ipstack.com).
- Change REACT_APP_API_KEY to your API key.
- Open the command line.
- Navigate to the folder with the project.
- Run the command: `npm run start`

# Project Assumptions
- The user, after opening the page, sees basic information about the location.
- The user can search by IP or URL.
- The user sees the last search at the bottom.
- The user has a list of all searches on the left side.
- Input validation ensures that provided IP or URL is valid. If the URL or IP is invalid, the button is disabled, but when the user clicks on it, they get the information "Provided IP or URL is invalid."