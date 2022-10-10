-- Beer Pack Online
-- DB version: 0.0.1

-- Database: beer_pack
CREATE DATABASE beer_pack;
USE beer_pack;

-- LOGS LOGICOS
-- Table: HardwareLog
CREATE TABLE HardwareLog (
    idHardwareLog int NOT NULL AUTO_INCREMENT,
    nroSerie VARCHAR(50) NOT NULL,
    codigo VARCHAR(50) NOT NULL, 
    marca VARCHAR(100) NOT NULL,
    modelo VARCHAR(100) NOT NULL,
    ultimaActualizacion timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
    estado bool NOT NULL DEFAULT true,
    CONSTRAINT HardwareLog_pk PRIMARY KEY (idHardwareLog)
);

-- Table: TipoSoftware
CREATE TABLE TipoSoftware(
    idTipoSoftware int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    descripcion VARCHAR(100) NOT NULL,
    ultimaActualizacion timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
    estado bool NOT NULL DEFAULT true
);

-- Table: SoftwareLog
CREATE TABLE SoftwareLog (
    idSoftwareLog int NOT NULL AUTO_INCREMENT,
    idTipoSoftware int NOT NULL,
    codigo VARCHAR(100) NOT NULL,
    marca VARCHAR(100) NOT NULL,
    version VARCHAR(20) NOT NULL,
    ultimaActualizacion timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
    estado bool NOT NULL DEFAULT true,
    CONSTRAINT SoftwareLog_pk PRIMARY KEY (idSoftwareLog),
    FOREIGN KEY (idTipoSoftware) REFERENCES TipoSoftware(idTipoSoftware)
);

-- Table: TelecomLog
CREATE TABLE TelecomLog (
    idTelecomLog int NOT NULL AUTO_INCREMENT,
    idHardwareLog int NOT NULL,
    idSoftwareLog int NOT NULL,
    ultimaActualizacion timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
    estado bool NOT NULL DEFAULT true,
    CONSTRAINT TelecomLog_pk PRIMARY KEY (idTelecomLog),
    FOREIGN KEY (idHardwareLog) REFERENCES HardwareLog(idHardwareLog),
    FOREIGN KEY (idSoftwareLog) REFERENCES SoftwareLog(idSoftwareLog)
);

-- Table: TipoSoporte
CREATE TABLE TipoSoporte(
    idTipoSoporte int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    descripcion VARCHAR(100) NOT NULL,
    ultimaActualizacion timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
    estado bool NOT NULL DEFAULT true
);

-- Table: HelpDeskLog
CREATE TABLE HelpDeskLog (
    idHelpDeskLog int NOT NULL AUTO_INCREMENT,
    usuario VARCHAR(100) NOT NULL,
    idTipoSoporte int NOT NULL,
    condicion text NOT NULL,
    resultado text NOT NULL,
    ultimaActualizacion timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
    estado bool NOT NULL DEFAULT TRUE,
    CONSTRAINT HelpDeskLog_pk PRIMARY KEY (idHelpDeskLog),
    FOREIGN KEY (idTipoSoporte) REFERENCES TipoSoporte(idTipoSoporte)
);

-- Table: TipoEvento
CREATE TABLE TipoEvento(
    idTipoEvento int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    descripcion VARCHAR(100) NOT NULL,
    ultimaActualizacion timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
    estado bool NOT NULL DEFAULT true
);

-- Table: SeguridadLog
CREATE TABLE SeguridadLog (
    idSeguridadLog int NOT NULL AUTO_INCREMENT,
    nroEvento VARCHAR(100) NOT NULL,
    idTipoEvento int NOT NULL,
    condicion text NOT NULL,
    resultado text NOT NULL,
    ultimaActualizacion timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
    estado bool NOT NULL DEFAULT TRUE,
    CONSTRAINT SeguridadLog_pk PRIMARY KEY (idSeguridadLog),
    FOREIGN KEY (idTipoEvento) REFERENCES TipoEvento(idTipoEvento)
);

-- Table: OtrosLog
CREATE TABLE OtrosLog (
    idOtrosLog int NOT NULL AUTO_INCREMENT,
    caso text NOT NULL,
    descripcion text NOT NULL,
    condicion text NOT NULL,
    resultado text NOT NULL,
    ultimaActualizacion timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
    estado bool NOT NULL DEFAULT TRUE,
    CONSTRAINT OtrosLog_pk PRIMARY KEY (idOtrosLog)
);


-- LOGS FISICOS
-- Table: Area
CREATE TABLE Area(
    idArea int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    descripcion VARCHAR(100) NOT NULL,
    ultimaActualizacion timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
    estado bool NOT NULL DEFAULT true
);

-- Table: Servicio
CREATE TABLE Servicio(
    idServicio int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    descripcion VARCHAR(100) NOT NULL,
    ultimaActualizacion timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
    estado bool NOT NULL DEFAULT true
);

-- Table: LogFisico
CREATE TABLE LogFisico (
    idFisicoLog int NOT NULL AUTO_INCREMENT,
    fecha date NOT NULL,
    idArea int NOT NULL,
    idServicio int NOT NULL,
    condicionServicio text NOT NULL,
    nroEvento VARCHAR(100) NOT NULL,
    tipoEvento VARCHAR(100) NOT NULL,
    condicion text NOT NULL,
    resultado text NOT NULL,
    responsable VARCHAR(100),
    ultimaActualizacion timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
    estado bool NOT NULL DEFAULT TRUE,
    CONSTRAINT FisicoLog_pk PRIMARY KEY (idFisicoLog),
    FOREIGN KEY (idArea) REFERENCES Area(idArea),
    FOREIGN KEY (idServicio) REFERENCES Servicio(idServicio)
);



--Table Usuario para el Login-out
CREATE TABLE Usuario(
    idUsuario int NOT NULL AUTO_INCREMENT,
    nombres VARCHAR(100) NOT NULL,
    apellidos VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    contrasenia VARCHAR(200) NOT NULL,
    lastupdate date NOT NULL,
    tuplstatus VARCHAR(100) NOT NULL
);

