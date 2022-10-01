import "reflect-metadata"
import { DataSource } from "typeorm"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "docker",
    password: "password",
    database: "rentalx",
    synchronize: true,
    logging: false,
    entities: [],
    migrations: ["./src/migration/*.ts"],
    subscribers: [],
})

