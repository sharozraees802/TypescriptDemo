/**
 * @class AppService
 * @description
 * this class to create a function and a service to manage the app
 */

// export class AppService {
//   public sampleFunction():string {
//     return "this is a sample Function";
//   }

//   public sampleData():string {
//     return "this is a sample Data";
//   }
// }

export class AppService {
  private users = [
    {
      firstName: "fname1",
      lastName: "lname1",
      email: "abc@gmail.com",
    },
    {
      firstName: "fname1",
      lastName: "lname1",
      email: "abc@gmail.com",
    },
    {
      firstName: "fname1",
      lastName: "lname1",
      email: "abc@gmail.com",
    },
  ];

  public getUsers(): any {
    return this.users;
  }

  public addUser(user: any) {
    return this.users.push(user);
  }
}
