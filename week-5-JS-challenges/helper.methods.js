class Helpers{
  getUsersByAge(response, ageMin, ageMax){
    const users = response.users
      .filter((user)=> (user.age >= ageMin && user.age <= ageMax))
      .map(user => user.name);

    return users;
  }

  getUsersByRole(response, role){
    const users = response.users
      .filter((user)=> user.role === role)
      .map(user => user.name);

    return users;
  }

  getUsersByCountry(response, country){
    const users = response.users
      .filter((user)=> user.country === country)
      .map(user => user.name);

    return users;
  }

  getUsersByBalance(response, minBalance, maxBalance){
    const users = response.users
      .filter((user)=> (user.balance > minBalance && user.balance < maxBalance))
      .map(user => user.name);

    return users;
  }
}

export default new Helpers()