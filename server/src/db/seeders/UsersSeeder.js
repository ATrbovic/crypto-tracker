import { User } from "../../models/User.js"
import dotenv from "dotenv"
dotenv.config()

class UsersSeeder {
  static async seed() {
    const userData = [
      {
        email: "alex@gmail.com",
        password: "alextest"
      },
      {
        email: "test@gmail.com",
        password: "test"
      }
    ]

    for(const singleUser of userData) {
      const currentUser = await User.query().findOne({ email: singleUser.email })
      if(!currentUser) {
        await User.query().insert(singleUser)
      }
    }
  }
}

export default UsersSeeder