import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions";

export const config: PostgresConnectionOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'workout-logger',
  entities: ['dist/src/**/*.entity{.ts,.js}'],
  synchronize: true
}

export default config;