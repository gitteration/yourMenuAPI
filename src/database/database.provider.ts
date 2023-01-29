import { DataSource } from 'typeorm';
export const databaseProviders = [
    {
        provide: 'DATA_SOURCE',
        useFactory: async () => {
            const env:any = process.env;
            const dataSource = new DataSource({
                type: env.DB_TYPE,
                host: env.DB_HOST,
                port: env.DB_PORT,
                username: env.DB_USERNAME,
                password: env.DB_PASSWORD,
                database: env.DB_DATABASE,
                entities: [
                    __dirname + '/../**/*.entity{.ts,.js}',
                ],
                synchronize: true,
            });

            return dataSource.initialize();
        },
    },
]
