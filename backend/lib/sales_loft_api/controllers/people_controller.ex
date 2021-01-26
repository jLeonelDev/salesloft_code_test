defmodule SalesLoftApi.PeopleController do
  @moduledoc """
  People Controller
  """
  use SalesLoftApi, :controller
  alias SalesLoftApi.Clients.SalesLoftApiClient
  alias SalesLoftApi.Helpers.PeopleHelper

  action_fallback(SalesLoftApi.FallbackController)

  @doc """
  Returns all the people from the SalesLoft People API
  but filtered.
  """
  @spec get(Plug.Conn.t(), map) :: {atom, map}
  def get(conn, %{"page" => page}) do
    _get(conn, page)
  end

  def get(conn, _) do
    _get(conn, 1)
  end

  @spec _get(Plug.Conn.t(), integer) :: {atom, map}
  defp _get(_conn, page) do
    try do
      case SalesLoftApiClient.getPeople(page) do
        {:ok, %HTTPoison.Response{body: body}} ->
          response =
            body
            |> Jason.decode!()
            |> PeopleHelper.process_people_response()

          {:success, response}

        {:error, _} ->
          {:error, "An error occurred"}
      end
    rescue
      _ -> {:error, "An error occurred"}
    end
  end
end
