-- psql -d postgres://tvvvvphx:b-2own748-zTh8ROuvVcRT4svGlaoo_P@lallah.db.elephantsql.com/tvvvvphx -f drinks_postgres_create.sql


CREATE TABLE public.ingredients (
	"_id" serial NOT NULL PRIMARY KEY,
  "ingredient" varchar NOT NULL,
  "family" varchar NOT NULL,
  "measurement" varchar NOT NULL
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