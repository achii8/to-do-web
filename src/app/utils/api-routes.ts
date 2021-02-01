const HOST = 'http://localhost:3000/';
export const API_ROUTES = {
        routes:{
            to_do:{
                create: HOST + "to-do",
                get: HOST +"to-do/:id",
                delete: HOST +"to-do/:id",
                delete_from_db: HOST +"to-do/:id",
                update: HOST +"to-do/:id",
                list: HOST +"to-do/get-all-to-do/:creatorUsername",
            }
        }
}