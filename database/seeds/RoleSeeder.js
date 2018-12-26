'use strict'

/*
|--------------------------------------------------------------------------
| RoleSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Database = use('Database')

class RoleSeeder {
    async run() {
        await Database.truncate('roles')
        await Database.table('roles').insert([
                {name: 'admin', description: "Admin have full authority"},
                {name: 'user', description: "It is just a regular user"}
            ]
        )
    }
}

module.exports = RoleSeeder
