defmodule SalesLoft.Application do
  # See https://hexdocs.pm/elixir/Application.html
  # for more information on OTP Applications
  @moduledoc false

  use Application

  def start(_type, _args) do
    children = [
      # Start the Telemetry supervisor
      SalesLoftApi.Telemetry,
      # Start the Endpoint (http/https)
      SalesLoftApi.Endpoint
      # Start a worker by calling: SalesLoft.Worker.start_link(arg)
      # {SalesLoft.Worker, arg}
    ]

    # See https://hexdocs.pm/elixir/Supervisor.html
    # for other strategies and supported options
    opts = [strategy: :one_for_one, name: SalesLoft.Supervisor]
    Supervisor.start_link(children, opts)
  end

  # Tell Phoenix to update the endpoint configuration
  # whenever the application is updated.
  def config_change(changed, _new, removed) do
    SalesLoftApi.Endpoint.config_change(changed, removed)
    :ok
  end
end
