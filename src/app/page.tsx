"use client";
import React, { useState } from "react";
import Banner from "@/app/Banner";
import Physics from "@/app/Physics";
import "./globals.css";

export default function Home() {
  /**
   * Global Variables
   */

  return (
    <>
      <div className=" absolute z-10 bg-white">
        <Banner />
        <div className=" p-14 ">
          <Physics />
        </div>
      </div>
    </>
  );
}
