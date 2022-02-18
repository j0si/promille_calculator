# promille_calculator

who doesn't have this problem? You are coding away into the darkness while drinking a few beers, get a text from buddy asking if you want to join them in your favorite bar. But the question is: could you still drive?

This is a student project, to get to know the deployment process with deno. 

### Please don't actually use this method to see, whether you are still able to drive. If you have to ask yourself this question, the answer is almost certainly **NO**!




## Functionality

- this module lets you calculate your **theoretical** blood-alcohol-concentration in promille
- all you need is your:
  - weight in *kg*
  - height in *cm*
  - your gender as string *m/f/d*
  - duration of drinking in *hours*
  - amount of pure alcohol consumed in *g*



You can run the **usage_example.ts** with this line: 

````
deno run --allow-net "https://deno.land/x/promille_calculator@0.0.4/usage_example.ts"
````


## Tests

The module is covered by unit-test which can be found in *./src/PromilleCalculator_test.spec.ts"*
Test it yourself by running:

````
deno run --allow-net "https://deno.land/x/promille_calculator@0.0.4/src/PromilleCalculator_test.spec.ts"
````


### once again: this method is not reliable. Don't base your decisions on the results of this script.
