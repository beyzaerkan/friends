const codes = [
  {
    statusCode: 100,
    title: "Continue",
    imageUrl: ""
  },
  {
    statusCode: 101,
    title: "Switching Protocols",
    imageUrl:""
  },
  {
    statusCode: 102,
    title: "Processing",
    imageUrl: ""
  },
  {
    statusCode: 103,
    title: "Early Hints",
    imageUrl:""
  },
  {
    statusCode: 200,
    title: "OK",
    imageUrl: ""
  },
  {
    statusCode: 201,
    title: "Created",
    imageUrl:""
  },
  {
    statusCode: 202,
    title: "Accepted",
    imageUrl: ""
  },
  {
    statusCode: 203,
    title: "Non-Authoritative Information",
    imageUrl:""
  },
  {
    statusCode: 204,
    title: "No Content",
    imageUrl: ""
  },
  {
    statusCode: 205,
    title: "Reset Content",
    imageUrl:""
  },
  {
    statusCode: 206,
    title: "Partial Content",
    imageUrl: ""
  },
  {
    statusCode: 300,
    title: "Multiple Choices",
    imageUrl:""
  },
  {
    statusCode: 301,
    title: "Moved Permanently",
    imageUrl: ""
  },
  {
    statusCode: 302,
    title: "Found",
    imageUrl:""
  },
  {
    statusCode: 303,
    title: "See Other",
    imageUrl: ""
  },
  {
    statusCode: 304,
    title: "Not Modified",
    imageUrl:""
  },
  {
    statusCode: 305,
    title: "Use Proxy",
    imageUrl: ""
  },
  {
    statusCode: 306,
    title: "Unused",
    imageUrl:""
  },
  {
    statusCode: 307,
    title: "Temporary Redirect",
    imageUrl: ""
  },
  {
    statusCode: 308,
    title: "Permanent Redirect",
    imageUrl:""
  },
  {
    statusCode: 400,
    title: "Bad Request",
    imageUrl: ""
  },
  {
    statusCode: 401,
    title: "Unauthorized",
    imageUrl:""
  },
  {
    statusCode: 402,
    title: "Payment Required",
    imageUrl: ""
  },
  {
    statusCode: 403,
    title: "Forbidden",
    imageUrl:""
  },
  {
    statusCode: 404,
    title: "Not Found",
    imageUrl: ""
  },
  {
    statusCode: 405,
    title: "Method Not Allowed",
    imageUrl:""
  },
  {
    statusCode: 406,
    title: "Not Acceptable",
    imageUrl: ""
  },
  {
    statusCode: 407,
    title: "Proxy Authentication Required",
    imageUrl:""
  },
  {
    statusCode: 408,
    title: "Request Timeout",
    imageUrl: ""
  },
  {
    statusCode: 409,
    title: "Conflict",
    imageUrl:""
  },
  {
    statusCode: 410,
    title: "Gone",
    imageUrl: ""
  },
  {
    statusCode: 411,
    title: "Length Required",
    imageUrl:""
  },
  {
    statusCode: 412,
    title: "Precondition Failed",
    imageUrl: ""
  },
  {
    statusCode: 413,
    title: "Payload Too Large",
    imageUrl:""
  },
  {
    statusCode: 414,
    title: "URI Too Long",
    imageUrl: ""
  },
  {
    statusCode: 415,
    title: "Unsupported Media Type",
    imageUrl:""
  },
  {
    statusCode: 416,
    title: "Range Not Satisfiable",
    imageUrl: ""
  },
  {
    statusCode: 417,
    title: "Expectation Failed",
    imageUrl:""
  },
  {
    statusCode: 418,
    title: "I'm a teapot",
    imageUrl: ""
  },
  {
    statusCode: 419,
    title: "Processing",
    imageUrl:""
  },
  {
    statusCode: 421,
    title: "Misdirected Request",
    imageUrl: ""
  },
  {
    statusCode: 422,
    title: "Unprocessable Entity",
    imageUrl:""
  },
  {
    statusCode: 423,
    title: "Locked",
    imageUrl: ""
  },
  {
    statusCode: 424,
    title: "Failed Dependency",
    imageUrl:""
  },
  {
    statusCode: 425,
    title: "Too Early",
    imageUrl: ""
  },
  {
    statusCode: 426,
    title: "Upgrade Required",
    imageUrl:""
  },
  {
    statusCode: 428,
    title: "Precondition Required",
    imageUrl: ""
  },
  {
    statusCode: 429,
    title: "Too Many Requests",
    imageUrl:""
  },
  {
    statusCode: 431,
    title: "Request Header Fields Too Large",
    imageUrl: ""
  },
  {
    statusCode: 451,
    title: "Unavailable For Legal Reasons",
    imageUrl:""
  },
  {
    statusCode: 500,
    title: "Internal Server Error",
    imageUrl: ""
  },
  {
    statusCode: 501,
    title: "Not Implemented",
    imageUrl:""
  },
  {
    statusCode: 502,
    title: "Bad Gateway",
    imageUrl: ""
  },
  {
    statusCode: 503,
    title: "Service Unavailable",
    imageUrl:""
  },
  {
    statusCode: 504,
    title: "Gateway Timeout",
    imageUrl: ""
  },
  {
    statusCode: 505,
    title: "HTTP Version Not Supported",
    imageUrl:""
  },
  {
    statusCode: 506,
    title: "Variant Also Negotiates",
    imageUrl: ""
  },
  {
    statusCode: 507,
    title: "Insufficient Storage ",
    imageUrl:""
  },
  {
    statusCode: 508,
    title: "Loop Detected",
    imageUrl: ""
  },
  {
    statusCode: 510,
    title: "Not Extended",
    imageUrl:""
  },
  {
    statusCode: 511,
    title: "Network Authentication Required",
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
