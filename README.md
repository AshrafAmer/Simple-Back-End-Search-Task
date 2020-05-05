# Back-End-Simple-Search-Task
This is a simple search task, hit an endpoint containing the list of hotels and perform some actions on the result.


## Note:
More of this actions can be done using frontend javaScript, like search, and order. But I built all things in backend, Only, to meet the requirement.

## Execution

> Prerequisites { Install `nodejs` on your local machine }:
>
> 1. For macOS and Windows systems follow this [link.](https://pip.pypa.io/en/stable/) > <br>
> 2. For others, or for more information, follow this [installation instructions](https://nodejs.org/en/download/package-manager/).

To execute this repo on your machine, follow the steps:

    - Clone this repo or download it. 
    - goto the repo and open your terminal.
    - run the command `npm init`.
    - then, run `npm server`
    - Open your browser: `http://localhost:8085/search`

All Data will be recieved as JSON, to dealing with it as GUI. You need to build a views such as ejs just for test.
Note That: search form must `POST` to the same page. the fields must be named to: </br>
    > 'name' to search by name, </br> 
    > 'city' to search by city, </br>
    > 'price_from' range start from, </br>
    > 'price_to' range bounded by this value, </br>
    > Also dates : 'date_from', and 'date_end'. </br>
    > That's all and enjoy. </br>


# Author
Ashraf Amer Taha


[![CircleCI](https://circleci.com/gh/AshrafAmer/Simple-Back-End-Search-Task.svg?style=svg)](https://app.circleci.com/pipelines/github/AshrafAmer/Simple-Back-End-Search-Task)
