"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("a7d77551-a0cd-498c-8904-dc43178c67f3");
  }, []);

  return null;
};
