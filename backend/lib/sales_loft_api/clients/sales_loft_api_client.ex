defmodule SalesLoftApi.Clients.SalesLoftApiClient do
  @moduledoc """
  SalesLoft Api Client

  Contains all request to the SalesLoft API.
  """
  use HTTPoison.Base

  @doc """
  Adds the endpoint for all requests.
  """
  def process_url(url) do
    System.get_env("SALESLOFT_ENDPOINT") <> url
  end

  @doc """
  Adds the Authorization header for all requests.
  """
  def process_request_headers(headers) do
    api_key = System.get_env("SALESLOFT_API_KEY")
    [Authorization: "Bearer #{api_key}", "Content-Type": "application/json"]
  end

  @doc """
  Obtains People from the API.
  """
  def getPeople(page) do
    url = System.get_env("SALESLOFT_GET_PEOPLE")
    get(url, [], params: %{page: page, per_page: 100})
  end
end
