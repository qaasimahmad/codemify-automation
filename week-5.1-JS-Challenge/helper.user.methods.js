class Helpers{
  getUsersByStatus(response, status){
    const users = response.users
      .filter((user)=> (user.role.status === status && user.role.description))
      .map(user => user.name)

    return users;
  }

  getUsersByRole(response, role, roleId){
    const users = response.users
      .filter((user)=> (user.role.name === role && user.role.id === roleId))
      .map(user => user.name)

    return users;
  }

  getUsersByEmailDomain(response, domain){
    const users = response.users
      .filter((user)=> (user.email.includes(domain)))
      .map(user => user.name)

    return users;
  }

  getUserBalanceByCurrency(response, currency){
    const balances = response.users
      .filter((user)=> (user.currency === currency))
      .map((user)=>{
        const sanitizedBalance = Number(user.balance.replace(/[^0-9]/g, ''));

        return sanitizedBalance;
      })

    return balances;
  }

}

export default new Helpers()