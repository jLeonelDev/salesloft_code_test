defmodule SalesLoftApi.Helpers.PeopleHelper do
  @moduledoc """
  PeopleHelper
  """

  @doc """
  Process the getPeople Api response to return
  only the necessary fields.
  """
  @spec process_people_response(map) :: map
  def process_people_response(%{"metadata" => metadata, "data" => data}) do
    new_data =
      Enum.map(data, fn %{
                          "display_name" => display_name,
                          "title" => title,
                          "email_address" => email
                        } ->
        %{"name" => display_name, "job_title" => title, "email" => email}
      end)

    %{"metadata" => metadata, "data" => new_data}
  end
end
