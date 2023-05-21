USE juegos_olimpicos;

-- PAIS (nombre, numpart, nummed)
INSERT INTO PAIS VALUES 
("MEXICO", 3, 1),
("BRASIL", 4, 2),
("CHINA", 10, 8), 
("ALEMANIA", 8, 7), 
("USA", 7, 8),
("RUSIA", 2, 1),
("JAPON", 8, 7),
("ARGENTINA", 1, 1), 
("FRANCIA", 5, 3), 
("ITALIA", 7, 4);

-- DEPORTISTA (matricula, nombre, apellido, sexo, pais, puntos)
INSERT INTO DEPORTISTA VALUES
("A123", "Jose", "Sanchez", "Masculino", "MEXICO", 10),
("A234", "Adam", "Spritz", "Masculino", "USA", 8),
("A345", "Jin", "Jun", "Masculino", "CHINA", 9),
("A456", "George", "Huckenberg", "Masculino", "ALEMANIA", 7),
("A678", "Juan", "Perez", "Masculino", "MEXICO", 6),
("A567", "Bill", "Portman", "Masculino", "USA", 5),
("A321", "Nico", "Hein", "Masculino", "ALEMANIA", 25),
("A432", "Jon", "Chi", "Masculino", "JAPON", 3),
("A543", "Ho", "Hul", "Masculino", "CHINA", 11),
("A654", "Fran", "Piatro", "Masculino", "ITALIA", 8),
("A765", "Luis", "Garcia", "Masculino", "MEXICO", 7),
("A876", "Gil", "Mandiano", "Masculino", "ITALIA", 2);


-- DISCIPLINA (identificador, nombre, globaldisciplina, puntos)
INSERT INTO DISCIPLINA VALUES
("D12", "400m Mariposa", "Natacion", 5),
("D34", "400m Libre", "Natacion", 4),
("D56", "100m", "Caminata", 5),
("D78", "Ciclismo en Pista", "Ciclismo", 7),
("D90", "Ciclismo de Ruta", "Ciclismo", 3),
("D13", "300m Mariposa", "Natacion", 3),
("D35", "400m Dorso", "Natacion", 4),
("D57", "200m", "Caminata", 7),
("D79", "Ciclismo de montaña", "Ciclismo", 5),
("D91", "Ciclismo MTB", "Ciclismo", 6);

-- PRUEBA (identificador, disciplina, fecha, lugar, numdep, naturaleza)
INSERT INTO PRUEBA VALUES
("P12", "D12", "2023-05-12", "Estadio", 10, "Eliminatoria"),
("P34", "D34", "2023-05-13", "Estadio", 10, "Final"),
("P56", "D56", "2023-05-13", "Estadio", 8, "Eliminatoria"),
("P78", "D78", "2023-05-14", "Estadio", 10, "Eliminatoria"),
("P90", "D90", "2023-05-12", "Estadio", 9, "Eliminatoria"),
("P13", "D13", "2023-05-13", "Estadio", 10, "Final"),
("P35", "D35", "2023-05-13", "Estadio", 8, "Eliminatoria"),
("P57", "D57", "2023-05-14", "Estadio", 7, "Eliminatoria"),
("P79", "D79", "2023-05-14", "Estadio", 11, "Eliminatoria"),
("P24", "D91", "2023-05-14", "Estadio", 10, "Final");

-- CLASIFICACION (identificador, deportista, prueba, rango)
INSERT INTO CLASIFICACION (deportista, prueba, rango) VALUES 
("A123", "P12", 5),
("A234", "P34", 1),
("A345", "P90", 2),
("A456", "P78", 3),
("A345", "P24", 1),
("A567", "P56", 5),
("A543", "P13", 2),
("A654", "P35", 2),
("A765", "P57", 4),
("A876", "P79", 1);

-- RESULTADO (disciplina, mdoro, mdplata, mdbronce)
INSERT INTO RESULTADO VALUES
("D12", "A123", "A234", "A345"),
("D34", "A567", "A234", "A456"),
("D56", "A456", "A567", "A345"),
("D78", "A234", "A234", "A345"),
("D90", "A123", "A456", "A234"),
("D13", "A567", "A345", "A654"),
("D35", "A678", "A765", "A345"),
("D57", "A654", "A543", "A567"),
("D79", "A876", "A765", "A678"),
("D91", "A345", "A543", "A876");

