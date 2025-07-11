class Helpers{
  filterMatchesByLocationAndStatus(response){


    const users = response.matches
      .filter(user=> user.locationlvl1 === "Germany" && user.status === "canceled")
      .map(user => user.matchId)

    return users;
  }

  filterMatchesByCoatingAndShower(response){

    const result = response.matches
      .filter(user => user.matchInfo.coating === "Main.artificialGrass" && user.matchInfo.isShower)
      .map(user => user.matchId)

    return result;
  }

  filterMatchesByLocationAndPrice(response){

    const result = response.matches
      .filter(user => user.locationlvl2 === "Berlin" && user.price > 0)
      .map(user => user.matchId)

    return result;
  }

  filterMatchesByCreatorFeeAndStatus(response){

    const result = response.matches
      .filter(user => user.creatorFeePerPlayer > 3 && user.status === "canceled")
      .map(user => user.matchId)

    return result;
  }

  filterMatchesByCoveringAndDressingRoom(response){

    const result = response.matches
      .filter(user => user.matchInfo.covering === "Main.onTheStreet" && user.matchInfo.isDressingRoom)
      .map(user => user.matchId)

    return result;
  }
}

export default new Helpers()