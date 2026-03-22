self.__uv$config = {
  prefix: "/Ultraviolet-Static/uv/service/", // Added folder name here
  bare: "https://bare.benroberts.dev", 
  encodeUrl: Ultraviolet.codec.xor.encode,
  decodeUrl: Ultraviolet.codec.xor.decode,
  handler: "/Ultraviolet-Static/uv/uv.handler.js", // Added folder name here
  client: "/Ultraviolet-Static/uv/uv.client.js",   // Added folder name here
  bundle: "/Ultraviolet-Static/uv/uv.bundle.js",   // Added folder name here
  config: "/Ultraviolet-Static/uv/uv.config.js",   // Added folder name here
  sw: "/Ultraviolet-Static/uv/uv.sw.js",           // Added folder name here
};
