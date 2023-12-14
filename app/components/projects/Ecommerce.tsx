export default function Ecomm() {
  return (
    <section className="flex flex-col">
      <div className="flex flex-col justify-start">
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

      <form action="" className="grid grid-cols-3 gap-2">
        <div className="col-span-2 flex flex-col">
          <div className="flex flex-row">
            <button>POST</button>{" "}
            <input type="text" placeholder="type the domain and send" />
          </div>
          {/* json and terminal div */}
          <div className="flex flex-col">
            <div className="grid flex-item grid-cols-2">
              <div>fetch result-</div>
              <div>request body</div>
            </div>
            <div className="flex-item"></div>
          </div>
        </div>
        <div className="col-span-1 flex flex-col">
          <div className="flex flex-row">
            <button>CANCEL</button>
            <button>SEND</button>
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
