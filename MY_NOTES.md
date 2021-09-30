## Issues I ran into
- In order to get sass working you have to install node-sass and sass-loader. However, the version of vue we are using doesn't work with the latest sass-loader. So you need to install `sass-loader@10.1.1` instead.
```
yarn add -D node-sass sass-loader@10.1.1
```
- A jeopardy board typically has 6 columns, your mixin sets it at 5, but I left it the way you had it.
- I updated the fetchQuestions mixin to also return an integer of the value which made calculations with it easier.

## Things I didn't do
- I typically prefer setting up eslint and even stylelint automation to standardize and correct lint issues, didn't do that here though due to time constraints.
- If time permitted I would have unit tested all of the components I wrote in Jest/Vue Testing Library
- I usually use Storybook for rapid dev of components but didn't for this.

## Suggestion
- Vuex and vue-router would add a bit more complexity to this and might give you a better sense of individual competency with Vue. It would also allow the current question and answers to be retained upon refresh.