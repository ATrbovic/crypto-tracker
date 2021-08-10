import { connection } from "../boot.js"
import CryptoSeeder from "./seeders/CryptoSeeder.js"

import UsersSeeder from "./seeders/UsersSeeder.js"

class Seeder {
  static async seed() {
    console.log("Seeding users.... underway")
    await UsersSeeder.seed()

    console.log("Seedong cryptos....")
    await CryptoSeeder.seed()

    console.log("Done!")
    await connection.destroy()
  }
}

export default Seeder