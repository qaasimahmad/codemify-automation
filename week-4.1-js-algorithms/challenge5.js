// eslint-disable-next-line no-unused-vars
function removeDuplicates(randomList){
  if(randomList === undefined || randomList === null){
    return `Expecting a list of items! Found ${randomList}`;
  }

  const sanitizedSet  = new Set(randomList);

  const  sanitizedList = [ ...sanitizedSet ];

  return sanitizedList;
}