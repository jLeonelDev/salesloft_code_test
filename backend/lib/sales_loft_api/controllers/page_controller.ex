defmodule SalesLoftApi.PageController do
  use SalesLoftApi, :controller

  action_fallback(SalesLoftApi.FallbackController)

  def index(conn, _params) do
    {:success, %{:xd => "baia baia"}}
  end
end
