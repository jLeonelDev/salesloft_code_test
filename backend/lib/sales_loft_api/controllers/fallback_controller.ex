defmodule SalesLoftApi.FallbackController do
  use Plug.Builder

  @spec call(map, {:success, map | list}) :: map
  def call(conn, {:success, body}) do
    conn
    |> put_resp_content_type("application/json")
    |> send_resp(200, Jason.encode!(body))
  end

  @spec call(map, {:created, map | list}) :: map
  def call(conn, {:created, body}) do
    conn
    |> put_resp_content_type("application/json")
    |> send_resp(201, Jason.encode!(body))
  end

  @spec call(map, {:error, String.t()}) :: map
  def call(conn, {:error, message}) when is_binary(message) do
    conn
    |> put_resp_content_type("application/json")
    |> send_resp(400, Jason.encode!(%{"error" => message}))
  end
end
