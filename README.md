# AngularTest

## Test Instructions

1. Fork the repo and create a new branch to do your work in.

2. Create a new component 'clubs' along with a 'clubs' service. Feel free to add a router if you want.

3. In the 'clubs' service add a function that uses an http get request to read colors.json from the assets folder.

4. The 'local-storage' service should have all the methods you need for data manipulation. The type 'Club' has also been provided.

5. In the 'clubs' component create a view to display the list of clubs.

6. Add a form that allows editing of any of the individual entries listed in the display. **IMPORTANT:** When editing the 'color' field of a club the form should use a dropdown. The dropdown should be populated with values from the colors data in your 'clubs' service. The key thing here is linking the ids and names properly.

7. Add a form to add a new entry to the list of clubs. Don't forget the dates. Bonus if this is the same form as before.

8. Add a way to delete any of the individual entries.

9. Use either template driven or reactive forms for your form. There isn't a right answer but be prepared to explain your choice.

10. When you're done create a pull request into master from your branch, and then make a pull request from your repository's master branch into our repository's master branch.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
