# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.

# General application configuration
use Mix.Config

config :sales_loft,
  ecto_repos: [SalesLoft.Repo]

# Configures the endpoint
config :sales_loft, SalesLoftApi.Endpoint,
  url: [host: "localhost"],
  secret_key_base: "BLM0UAF4zk7kN4XKI1OLCA0nSpTFSz5+n5qeIYxKazAlFFTXcJl2TrCKDpehDV07"

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

# Use Jason for JSON parsing in Phoenix
config :phoenix, :json_library, Jason

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env()}.exs"
