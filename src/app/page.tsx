"use client";
import React, { useState } from "react";
import Banner from "@/app/Banner";
import Physics from "@/app/Physics";
import "./globals.css";
import UnityBuild from "./UnityBuild";

export default function Home() {
  return (
    <div>
      <Banner />
      <div className=" p-14">
        <Physics />
      </div>
      <div className=" p-10">
        <Physics />
      </div>
      <UnityBuild />
    </div>
  );
}
