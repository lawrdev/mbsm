"use client";

import { useEffect } from "react";

function BootstrapClient() {
  // this will load bootstrap javascript only for the client and not the server.
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return null;
}

export default BootstrapClient;
