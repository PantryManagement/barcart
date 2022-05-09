-- psql -d postgres://tvvvvphx:b-2own748-zTh8ROuvVcRT4svGlaoo_P@lallah.db.elephantsql.com/tvvvvphx -f drinks_postgres_create.sql
DROP TABLE public.ingredients;
DROP TABLE public.drinks;
DROP TABLE public.ingredients_in_drinks;

CREATE TABLE public.ingredients (
	"_id" serial NOT NULL PRIMARY KEY,
  "ingredient" varchar NOT NULL,
  "family" varchar NOT NULL,
  "measurement" varchar NOT NULL
);

CREATE TABLE public.drinks (
	"_id" serial NOT NULL PRIMARY KEY,
  "drink" varchar NOT NULL,
  "flavor" varchar NOT NULL,
  "glassware" varchar NOT NULL
);

CREATE TABLE public.ingredients_in_drinks (
  "_id" serial NOT NULL PRIMARY KEY,
  "drink_id" serial NOT NULL,
  "ingredient_id" serial NOT NULL,
  "quantity" decimal(5,2) NOT NULL
);

INSERT INTO public.ingredients (_id, ingredient, family, measurement) VALUES (1, 'gin', 'liquor', '1 oz');
INSERT INTO public.ingredients (_id, ingredient, family, measurement) VALUES (2, 'brandy', 'liquor', '1 oz');
INSERT INTO public.ingredients (_id, ingredient, family, measurement) VALUES (3, 'whiskey', 'liquor', '1 oz');
INSERT INTO public.ingredients (_id, ingredient, family, measurement) VALUES (4, 'rum', 'liquor', '1 oz');
INSERT INTO public.ingredients (_id, ingredient, family, measurement) VALUES (5, 'tequila', 'liquor', '1 oz');
INSERT INTO public.ingredients (_id, ingredient, family, measurement) VALUES (6, 'vodka', 'liquor', '1 oz');
INSERT INTO public.ingredients (_id, ingredient, family, measurement) VALUES (7, 'absinthe', 'liquor', '1 oz');
INSERT INTO public.ingredients (_id, ingredient, family, measurement) VALUES (8, 'ginger beer', 'liquor', '1 oz');
INSERT INTO public.ingredients (_id, ingredient, family, measurement) VALUES (9, 'prosecco', 'liquor', '1 oz');


INSERT INTO public.drinks (_id, drink, flavor, glassware) VALUES (1, 'bloody mary', 'savory', 'glass');
INSERT INTO public.drinks (_id, drink, flavor, glassware) VALUES (2, 'martini', 'boozy', 'martini glass');
INSERT INTO public.drinks (_id, drink, flavor, glassware) VALUES (3, 'margarita', 'boozy', 'margarita glass');
INSERT INTO public.drinks (_id, drink, flavor, glassware) VALUES (4, 'old fashioned', 'savory', 'glass');

INSERT INTO public.ingredients_in_drinks (_id, drink_id, ingredient_id, quantity) VALUES (1, 6, 6, 1.5);
INSERT INTO public.ingredients_in_drinks (_id, drink_id, ingredient_id, quantity) VALUES (2, 6, 8, 4);
INSERT INTO public.ingredients_in_drinks (_id, drink_id, ingredient_id, quantity) VALUES (3, 6, 11, 1);
INSERT INTO public.ingredients_in_drinks (_id, drink_id, ingredient_id, quantity) VALUES (4, 6, 15, 1);