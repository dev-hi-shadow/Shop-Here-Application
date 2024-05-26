// src/hooks/useHashids.js

import Hashids from "hashids";

const useHash = (salt = import.meta.env.VITE_HASHSALT) => {
  // Create a memoized instance of Hashids
  const hashids = new Hashids(salt);
  const encode = (id) => {
    return hashids.encode(id);
  };

  const decode = (encodedId) => {
     const decoded = hashids.decode(encodedId);
     return decoded.length ? decoded[0] : null;
  };

  return { encode, decode };
};

export default useHash;
