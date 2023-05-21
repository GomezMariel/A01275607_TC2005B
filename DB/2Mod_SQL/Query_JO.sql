-- QUERY 

-- 1. Apellidos y nombre de los participantes de nacionalidad mexicana.
SELECT apellido, nombre_dep FROM juegos_olimpicos.DEPORTISTA 
WHERE juegos_olimpicos.DEPORTISTA.pais = "MEXICO"; 

-- 2. Apellidos, nombre y puntos acumulados de los participantes de USA.
SELECT apellido, nombre_dep, puntos FROM juegos_olimpicos.DEPORTISTA 
WHERE juegos_olimpicos.DEPORTISTA.pais = "USA"; 

-- 3. Apellidos y nombre de los participantes que se clasificaron en primer lugar en al menos una competencia.
SELECT apellido, nombre_dep FROM juegos_olimpicos.DEPORTISTA 
INNER JOIN juegos_olimpicos.CLASIFICACION ON juegos_olimpicos.DEPORTISTA.matricula = juegos_olimpicos.CLASIFICACION.deportista
WHERE juegos_olimpicos.CLASIFICACION.rango = 1;

-- 4. Nombre de las competencias en las que intervinieron los participantes mexicanos.
SELECT nombre_dis FROM juegos_olimpicos.DISCIPLINA
INNER JOIN juegos_olimpicos.PRUEBA ON juegos_olimpicos.DISCIPLINA.identificador = juegos_olimpicos.PRUEBA.disciplina
INNER JOIN juegos_olimpicos.CLASIFICACION ON juegos_olimpicos.PRUEBA.identificador = juegos_olimpicos.CLASIFICACION.prueba
INNER JOIN juegos_olimpicos.DEPORTISTA ON juegos_olimpicos.DEPORTISTA.matricula = juegos_olimpicos.CLASIFICACION.deportista
WHERE juegos_olimpicos.DEPORTISTA.pais = "MEXICO"; 

-- 5. Apellidos y nombre de los participantes que nunca se clasificaron en primer lugar en alguna competencia.
SELECT apellido, nombre_dep FROM juegos_olimpicos.DEPORTISTA 
INNER JOIN juegos_olimpicos.CLASIFICACION ON juegos_olimpicos.DEPORTISTA.matricula = juegos_olimpicos.CLASIFICACION.deportista
	-- MySQL dijo que necesitaba un group by
GROUP BY juegos_olimpicos.DEPORTISTA.matricula, juegos_olimpicos.DEPORTISTA.apellido, juegos_olimpicos.DEPORTISTA.nombre_dep
HAVING MAX(juegos_olimpicos.CLASIFICACION.rango) > 1;

-- 6. Apellidos y nombre de los participantes siempre se clasificaron en alguna competencia.
SELECT DISTINCT apellido, nombre_dep FROM juegos_olimpicos.DEPORTISTA 
INNER JOIN juegos_olimpicos.CLASIFICACION ON  juegos_olimpicos.DEPORTISTA.matricula = juegos_olimpicos.CLASIFICACION.deportista;

-- 7. Nombre de la competencia que aporta el máximo de puntos. 
SELECT nombre_dis FROM juegos_olimpicos.DISCIPLINA
WHERE puntos = (SELECT MAX(puntos) FROM juegos_olimpicos.DISCIPLINA);

-- 8. Países (nacionalidades) que participaron en todas las competencias.
-- Ningun pasis participo en todas las competencias.
SELECT nombre_pais FROM juegos_olimpicos.PAIS
JOIN juegos_olimpicos.DEPORTISTA ON juegos_olimpicos.PAIS.nombre_pais = juegos_olimpicos.DEPORTISTA.pais
JOIN juegos_olimpicos.CLASIFICACION ON juegos_olimpicos.DEPORTISTA.matricula = juegos_olimpicos.CLASIFICACION.deportista
JOIN juegos_olimpicos.PRUEBA ON juegos_olimpicos.CLASIFICACION.prueba = juegos_olimpicos.PRUEBA.identificador
GROUP BY nombre_pais
HAVING COUNT(distinct juegos_olimpicos.PRUEBA.identificador) = (
SELECT COUNT(DISTINCT identificador) FROM PRUEBA);

-- 9. Porpongan una consulta que involucre una sola tabla con  alguna funcion como MIN, AVG
-- Prueba con menor numero de participantes inscritos 
SELECT identificador FROM juegos_olimpicos.PRUEBA
WHERE numdep = (SELECT MIN(numdep) FROM juegos_olimpicos.PRUEBA);

-- 10. Porpongan una consulta que involucre dos tabla con GROUP BY
-- Deportistas que participiaron en todas las competencias.
SELECT apellido, nombre_dep FROM juegos_olimpicos.DEPORTISTA 
JOIN CLASIFICACION ON juegos_olimpicos.DEPORTISTA.matricula = juegos_olimpicos.CLASIFICACION.deportista
JOIN PRUEBA ON  juegos_olimpicos.CLASIFICACION.prueba = juegos_olimpicos.PRUEBA.identificador
GROUP BY juegos_olimpicos.DEPORTISTA.apellido, juegos_olimpicos.DEPORTISTA.nombre_dep
HAVING COUNT(DISTINCT juegos_olimpicos.PRUEBA.identificador) = (
SELECT COUNT(DISTINCT identificador) FROM PRUEBA);

-- 11. Porpongan una consulta que involucre tres tablas con las sentencias LEFT JOIN, ORDER BY, GROUP BY Y LIMIT
-- Apellido y nombre de los medallistas de oro, junto con su disciplina.
SELECT juegos_olimpicos.DEPORTISTA.apellido, juegos_olimpicos.DEPORTISTA.nombre_dep, juegos_olimpicos.PRUEBA.disciplina FROM juegos_olimpicos.DEPORTISTA 
LEFT JOIN juegos_olimpicos.RESULTADO ON juegos_olimpicos.DEPORTISTA.matricula = juegos_olimpicos.RESULTADO.mdoro
LEFT JOIN juegos_olimpicos.PRUEBA ON juegos_olimpicos.RESULTADO.disciplina = juegos_olimpicos.PRUEBA.disciplina
GROUP BY juegos_olimpicos.DEPORTISTA.apellido, juegos_olimpicos.DEPORTISTA.nombre_dep, juegos_olimpicos.PRUEBA.disciplina
ORDER BY nombre_dep
LIMIT 5; 

-- 12. Porpongan una consulta que involucre tres tablas con las sentencias INNER JOIN y LIKE
-- Deportistas que llegaron a la final
SELECT apellido, nombre_dep FROM juegos_olimpicos.DEPORTISTA 
INNER JOIN juegos_olimpicos.CLASIFICACION ON juegos_olimpicos.DEPORTISTA.matricula = juegos_olimpicos.CLASIFICACION.deportista
INNER JOIN juegos_olimpicos.PRUEBA ON juegos_olimpicos.CLASIFICACION.prueba = juegos_olimpicos.PRUEBA.identificador
WHERE juegos_olimpicos.PRUEBA.naturaleza LIKE '%Final%';








