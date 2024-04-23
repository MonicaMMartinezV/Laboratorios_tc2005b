/*USE lab09;

CREATE TABLE Materiales (
	descripcion VARCHAR(100),
	precio INT,
	clave BIGINT PRIMARY KEY 
);

CREATE TABLE Proyectos (
	Denominacion VARCHAR(100),
	numero BIGINT PRIMARY KEY 
);

CREATE TABLE Proveedores (
	RazonSocial VARCHAR(100),
	RFC VARCHAR(15) PRIMARY KEY 
);

CREATE TABLE Entregan (
	cantidad INT,
	claveMateriales BIGINT,
	numeroProyectos BIGINT,
	RFCProveedores VARCHAR(15),
	FOREIGN KEY (claveMateriales) REFERENCES Materiales(clave),
	FOREIGN KEY (numeroProyectos) REFERENCES Proyectos(numero),
	FOREIGN KEY (RFCProveedores) REFERENCES Proveedores(RFC),
	fecha VARCHAR(20) PRIMARY KEY 
);
*/

SELECT * FROM entregan


