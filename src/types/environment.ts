export {};
declare global {
    namespace NodeJS {
        interface ProcessEnv {
            SERVER_PORT: number;
            LOG_PATH: string;
            DB_TYPE: 'mysql'|'postgres';
            DB_HOST: string;
            DB_PORT: number;
            DB_USERNAME: string;
            DB_PASSWORD: string;
            DB_DATABASE: string;
            GRAPHQL_ENDPOINT: string
        }
    }
}
