const codes = [
  {
    statusCode: 101,
    title: "Switching",
    imageUrl: ""
  },
  {
    statusCode: 102,
    title: "Processing",
    imageUrl:""
  },
];

const findById = (id) => {
  for(let i in codes){
    if(codes[i].statusCode == id){
      return codes[i];
    }
  }
  throw new Error('Code don\'t found or you don\'t have a permission.');
}

export {
  codes,
  findById,
}
