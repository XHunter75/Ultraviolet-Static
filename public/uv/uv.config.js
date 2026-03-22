self.__uv$config = {
  // Add your repository name to all these paths
  prefix: "/Ultraviolet-Static/uv/service/",
  bare: "https://uv.student-portal.xyz", 
  encodeUrl: Ultraviolet.codec.xor.encode,
  decodeUrl: Ultraviolet.codec.xor.decode,
  handler: "/Ultraviolet-Static/uv/uv.handler.js",
  client: "/Ultraviolet-Static/uv/uv.client.js",
  bundle: "/Ultraviolet-Static/uv/uv.bundle.js",
  config: "/Ultraviolet-Static/uv/uv.config.js",
  sw: "/Ultraviolet-Static/uv/uv.sw.js",
};
