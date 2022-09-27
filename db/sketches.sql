-- do not execute

/*
CREATE TABLE TelecomLog (
    idTelecomLog int NOT NULL AUTO_INCREMENT,
    -- hardware details
    nroSerie VARCHAR(50) NOT NULL,
    codigoHardware VARCHAR(100) NOT NULL,
    marcaHardware VARCHAR(100) NOT NULL,
    modelo VARCHAR(100) NOT NULL,
    -- software details
    tipoSoftware int NOT NULL,
    codigoSoftware VARCHAR(100) NOT NULL,
    marcaSoftware VARCHAR(100) NOT NULL,
    version VARCHAR(100) NOT NULL,
    ultimaActualizacion timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
    estado bool NOT NULL DEFAULT true,
    CONSTRAINT TelecomLog_pk PRIMARY KEY (idTelecomLog)
);
*/
