-- psql -d postgres://tvvvvphx:b-2own748-zTh8ROuvVcRT4svGlaoo_P@lallah.db.elephantsql.com/tvvvvphx -f drinks_postgres_create.sql
DROP TABLE public.ingredients;
DROP TABLE public.drinks;
DROP TABLE public.ingredients_in_drinks;

CREATE TABLE public.ingredients (
	"_id" serial NOT NULL PRIMARY KEY,
  "ingredient" varchar NOT NULL,
  "family" varchar NOT NULL,
  "in_stock" decimal(5,2) NOT NULL,
  "units" varchar NOT NULL
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

INSERT INTO public.ingredients (_id, ingredient, family, in_stock, units) VALUES (1, 'gin', 'liquor', 12.5, 'oz');
INSERT INTO public.ingredients (_id, ingredient, family, in_stock, units) VALUES (2, 'brandy', 'liquor', 0, 'oz');
INSERT INTO public.ingredients (_id, ingredient, family, in_stock, units) VALUES (3, 'whiskey', 'liquor', 0, 'oz');
INSERT INTO public.ingredients (_id, ingredient, family, in_stock, units) VALUES (4, 'rum', 'liquor', 0, 'oz');
INSERT INTO public.ingredients (_id, ingredient, family, in_stock, units) VALUES (5, 'tequila', 'liquor', 0, 'oz');
INSERT INTO public.ingredients (_id, ingredient, family, in_stock, units) VALUES (6, 'vodka', 'liquor', 25, 'oz');
INSERT INTO public.ingredients (_id, ingredient, family, in_stock, units) VALUES (7, 'absinthe', 'liquor', 0, 'oz');
INSERT INTO public.ingredients (_id, ingredient, family, in_stock, units) VALUES (8, 'ginger beer', 'liquor', 6, 'oz');
INSERT INTO public.ingredients (_id, ingredient, family, in_stock, units) VALUES (9, 'prosecco', 'liquor', 0, 'oz');
INSERT INTO public.ingredients (_id, ingredient, family, in_stock, units) VALUES (10, 'lime juice', 'juice', 25, 'oz');
INSERT INTO public.ingredients (_id, ingredient, family, in_stock, units) VALUES (11, 'lemon juice', 'juice', 25, 'oz');
INSERT INTO public.ingredients (_id, ingredient, family, in_stock, units) VALUES (12, 'cranberry juice', 'juice', 25, 'oz');
INSERT INTO public.ingredients (_id, ingredient, family, in_stock, units) VALUES (13, 'tomato juice', 'juice', 25, 'oz');
INSERT INTO public.ingredients (_id, ingredient, family, in_stock, units) VALUES (14, 'club soda', 'soda', 25, 'oz');
INSERT INTO public.ingredients (_id, ingredient, family, in_stock, units) VALUES (15, 'lime slice', 'fruit', 8, 'slice');
INSERT INTO public.ingredients (_id, ingredient, family, in_stock, units) VALUES (16, 'lemon slice', 'fruit', 8, 'slice');
INSERT INTO public.ingredients (_id, ingredient, family, in_stock, units) VALUES (17, 'orange slice', 'fruit', 8, 'slice');
INSERT INTO public.ingredients (_id, ingredient, family, in_stock, units) VALUES (18, 'horseradish', 'vegetable', 36, 'teaspoon');
INSERT INTO public.ingredients (_id, ingredient, family, in_stock, units) VALUES (19, 'celery stalk', 'vegetable', 3, 'unit');
INSERT INTO public.ingredients (_id, ingredient, family, in_stock, units) VALUES (20, 'green olive', 'vegetable', 3, 'unit');
INSERT INTO public.ingredients (_id, ingredient, family, in_stock, units) VALUES (21, 'hot sauce', 'sauce', 72, 'teaspoon');
INSERT INTO public.ingredients (_id, ingredient, family, in_stock, units) VALUES (22, 'worcestershire sauce', 'sauce', 72, 'teaspoon');
INSERT INTO public.ingredients (_id, ingredient, family, in_stock, units) VALUES (23, 'salt', 'spice', 30, 'teaspoon');
INSERT INTO public.ingredients (_id, ingredient, family, in_stock, units) VALUES (24, 'black peppr', 'spice', 30, 'teaspoon');
INSERT INTO public.ingredients (_id, ingredient, family, in_stock, units) VALUES (25, 'orange juice', 'juice', 20, 'oz');


INSERT INTO public.drinks (_id, drink, flavor, glassware) VALUES (1, 'bloody mary', 'savory', 'glass');
INSERT INTO public.drinks (_id, drink, flavor, glassware) VALUES (2, 'martini', 'boozy', 'martini glass');
INSERT INTO public.drinks (_id, drink, flavor, glassware) VALUES (3, 'margarita', 'boozy', 'margarita glass');
INSERT INTO public.drinks (_id, drink, flavor, glassware) VALUES (4, 'old fashioned', 'savory', 'glass');
INSERT INTO public.drinks (_id, drink, flavor, glassware) VALUES (5, 'mimosa', 'boozy', 'champagne');
INSERT INTO public.drinks (_id, drink, flavor, glassware) VALUES (6, 'moscow mule', 'boozy', 'mug');
INSERT INTO public.drinks (_id, drink, flavor, glassware) VALUES (7, 'cosmopolitan', 'boozy', 'martini glass');
INSERT INTO public.drinks (_id, drink, flavor, glassware) VALUES (8, 'whiskey sour', 'sour', 'glass');
INSERT INTO public.drinks (_id, drink, flavor, glassware) VALUES (9, 'white russian', 'boozy', 'glass');
INSERT INTO public.drinks (_id, drink, flavor, glassware) VALUES (10, 'daiquiri', 'sour', 'martini glass');


INSERT INTO public.ingredients_in_drinks (_id, drink_id, ingredient_id, quantity) VALUES (1, 6, 6, 1.5);
INSERT INTO public.ingredients_in_drinks (_id, drink_id, ingredient_id, quantity) VALUES (2, 6, 8, 4);
INSERT INTO public.ingredients_in_drinks (_id, drink_id, ingredient_id, quantity) VALUES (3, 6, 10, 1);
INSERT INTO public.ingredients_in_drinks (_id, drink_id, ingredient_id, quantity) VALUES (4, 6, 15, 1);
INSERT INTO public.ingredients_in_drinks (_id, drink_id, ingredient_id, quantity) VALUES (5, 7, 6, 1.5);
INSERT INTO public.ingredients_in_drinks (_id, drink_id, ingredient_id, quantity) VALUES (6, 7, 12, 1);
INSERT INTO public.ingredients_in_drinks (_id, drink_id, ingredient_id, quantity) VALUES (7, 7, 10, 3);
INSERT INTO public.ingredients_in_drinks (_id, drink_id, ingredient_id, quantity) VALUES (8, 7, 16, 2);