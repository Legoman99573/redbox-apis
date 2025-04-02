import { EncryptionService, KeyService } from "@redbox-apis/common";
import { logger, loggingMiddleware } from "@redbox-apis/logger";
import { errors } from "celebrate";
import express from "express";
import { router } from "express-file-routing";

const PORT = 3018;
const app = express();

(async () => {
    const keyService = new KeyService();
    const encryptionService = new EncryptionService();

    await keyService.loadRootCA();

    app.locals.encryptionService = encryptionService;
    app.locals.keyService = keyService;

    app.use(express.json());

    loggingMiddleware(app, logger);

    app.use("/api", await router());

    app.use(errors());

    app.listen(PORT, () => {
        logger.info(`Server is running on port ${PORT}`);
    });
})();
