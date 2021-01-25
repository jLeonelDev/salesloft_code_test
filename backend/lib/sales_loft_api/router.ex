defmodule SalesLoftApi.Router do
  use SalesLoftApi, :router

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/", SalesLoftApi do
    pipe_through :api

    get "/people", PeopleController, :get
  end
end
