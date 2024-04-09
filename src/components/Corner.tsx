"use client";
import React from "react";
import GithubCorner from "react-github-corner";

function Corner() {
  return (
    <div>
      <GithubCorner
        href={"https://github.com/MehmetBozkir"}
        target="_blank"
        bannerColor="#70B7FD"
        octoColor="#fff"
        size={80}
        direction="right"
      />
    </div>
  );
}

export default Corner;
