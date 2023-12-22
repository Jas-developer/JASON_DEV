"use client";

import { useState } from "react";

export default function Ecomm() {
  const [BODY, setBody] = useState("");
  const [select, setSelect] = useState("");
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  // handle textArea
  const handleTextArea = (e: string) => {
    setBody(e);
  };

  // handle select
  const handleSelect = (e: string) => {
    setSelect(e);
  };

  // handle api input field
  const handleApiField = (e: string) => {
    setInput(e);
  };

  // REGISTER THE USER ENDPOINT
  const REGISTER_USER = async (body: string, api: string, select: string) => {
    try {
      const res = await fetch(api, {
        method: select,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      if (!res.ok) {
        throw new Error(`Failed with status ${res.status}`);
      }

      const data = await res.json();
      let token = data.token;
      localStorage.setItem("token", token);
      setResult(data); // Setting the result
    } catch (error: any) {
      console.error("Error occurred:", error.message);
    }
  };

  //LOGIN THE USER ENDPOINT
  const LOGIN_USER = async (body: string, api: string, select: string) => {
    try {
      const res = await fetch(api, {
        method: `${select}`,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      console.log(BODY);
      if (!res.ok) {
        throw new Error(`Failed with status ${res.status}`);
      }

      const data = await res.json();

      let token = data.token;
      localStorage.setItem("token", token);
      setResult(data);
    } catch (error) {
      console.log(error);
    }
  };

  // GET THE BOARDERS
  const GET_BOARDER = async (api: string, select: string) => {
    try {
      const controller = new AbortController();
      const token = localStorage.getItem("token");
      const response = await fetch(api, {
        method: `${select}`,
        signal: controller.signal,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await response.json();
      if (data) {
        setResult(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  //SENDING/ADDING A NEW BOARDER ENDPOINT
  const ADD_BOARDER = async (body: string, api: string, select: string) => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch(api, {
        method: `${select}`,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(body),
      });

      if (response) {
        const data = await response.json();
        setResult(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  //UPDATE THE BOARDER
  const UPDATE_BOARDER = async (body: string, api: string, select: string) => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch(api, {
        method: `${select}`,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(body),
      });

      //check if there is no response then throw an error
      if (!response) {
        throw new Error("Unable to fetch the api");
      }

      const data = await response.json();
      setResult(data);
    } catch (error) {
      console.log(error);
    }
  };

  // DELETE BOARDER
  const DELETE_BOARDER = async (api: string, select: string) => {
    try {
      const token = localStorage.getItem("token");
      const reponse = await fetch(api, {
        method: `${select}`,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (!reponse) {
        throw new Error("Failed to delete the boarder");
      }

      const data = await reponse.json();

      setResult(data);
    } catch (error) {
      console.log(error);
    }
  };
  // handle submit
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // api endpoints
    const register = "https://dorm-hu38.onrender.com/api/user/register";
    const login = "https://dorm-hu38.onrender.com/api/user/login";
    const addboarder = "http//addboarder";
    const update = "http//updateboarder";
    const del = "http://delete.com";
    const get = "http:/getboarders";

    if (input === register) {
      REGISTER_USER(BODY, input, select);
    } else if (input == login) {
      LOGIN_USER(BODY, input, select);
    } else if (input === get || select === "GET") {
      GET_BOARDER(input, select);
    } else if (input === addboarder && select === "POST") {
      ADD_BOARDER(BODY, input, select);
    } else if (input === update && select === "PUT") {
      UPDATE_BOARDER(BODY, input, select);
    } else if (input === del) {
      DELETE_BOARDER(input, select);
    }
  };

  return (
    <section className="flex flex-col w-full justify-center gap-2 px-2">
      <div className="flex flex-col items-center">
        <h1 className="lg:text-4xl md:text-2xl text-xl">
          ECCOMMERCE RESTFUL API
        </h1>
        <p>
          SEE DEMO WITH BASIC UI:
          <a href="" className="underline">
            www.example.com
          </a>
        </p>
      </div>
      {/* main div */}
      <hr />
      <form onSubmit={handleSubmit} className="grid grid-cols-3 gap-2">
        <div className="col-span-2 flex flex-col gap-4">
          <div className="flex flex-row shadow-sm outline-none ">
            <select
              name="METHOD"
              className="bg-yellow-600 ountline-none border-none "
              onChange={(e) => handleSelect(e.target.value)}
            >
              <option value="" selected>
                METHOD
              </option>
              <option value="POST">POST</option>
              <option value="GET">GET</option>
              <option value="DELETE">DELETE</option>
              <option value="PUT">PUT</option>
            </select>

            <input
              type="text"
              value={input}
              placeholder="type the domain and send"
              onChange={(e) => handleApiField(e.target.value)}
              className="w-full border-none outline-transparent text-gray-800 rounded-sm"
            />
          </div>
          {/* json and terminal div */}
          <div className="flex flex-col">
            <div className="grid flex-item grid-cols-2 border">
              <div className="bg-white text-gray-600 border-r w-full h-full justify-center flex items-cenyer">
                <span>
                  Request result will appear here... {BODY} - {select} - {input}{" "}
                  <br />
                  {result}
                </span>
              </div>
              <div className="">
                <textarea
                  name=""
                  id=""
                  cols={20}
                  rows={10}
                  value={BODY}
                  className="w-full h-full text-black text-start items-start flex  outline-none border-none "
                  placeholder="Enter request body here"
                  onChange={(e) => handleTextArea(e.target.value)}
                ></textarea>
              </div>
            </div>
            <div className="flex-item"></div>
          </div>
        </div>
        <div className="col-span-1 flex flex-col gap-4 bg-black">
          <div className="flex flex-row h-[13%] justify-start gap-3 px-2  ">
            <button className="bg-red-500 w-[100px]  rounded-sm">CANCEL</button>
            <button className="bg-green-600 w-[100px] rounded-sm" type="submit">
              SEND
            </button>
          </div>
          {/* project information div */}
          <div className="flex flex-col">
            <p>project information</p>
          </div>
        </div>
      </form>
    </section>
  );
}
