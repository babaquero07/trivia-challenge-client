import React from "react";
import ReactLoading from "react-loading";
import style from "./Loading.module.css";

const Loading = () => (
  <ReactLoading className={style.loading} type={"spin"} color={"#81457b"} />
);

export default Loading;
