defmodule SalesLoftApi.PeopleControllerTest do
  use SalesLoftApi.ConnCase
  import Mock
  alias SalesLoftApi.Clients.SalesLoftApiClient

  test "GET /people with page as query parameter", %{conn: conn} do
    metadata = %{
      "filtering" => %{},
      "paging" => %{
        "current_page" => 1,
        "next_page" => 2,
        "per_page" => 100,
        "prev_page" => nil
      },
      "sorting" => %{
        "sort_by" => "updated_at",
        "sort_direction" => "DESC NULLS LAST"
      }
    }

    person_1 = %{
      "display_name" => "Walter Bazar",
      "title" => "Jr. Salesman",
      "email_address" => "fake@fake.com",
      "other1" => "other1",
      "other2" => "other2",
      "other3" => "other3",
      "other4" => "other4"
    }

    person_2 = %{
      "display_name" => "Moka",
      "title" => "Senior Salesman",
      "email_address" => "fake2@fake.com",
      "other1" => "other1",
      "other2" => "other2",
      "other3" => "other3",
      "other4" => "other4"
    }

    api_response = %{
      "metadata" => metadata,
      "data" => [person_1, person_2]
    }

    with_mock SalesLoftApiClient,
      getPeople: fn _ ->
        {:ok,
         %HTTPoison.Response{
           status_code: 200,
           body: Jason.encode!(api_response)
         }}
      end do
      response =
        conn
        |> get("/people", %{"page" => 1})
        |> json_response(200)

      %{
        "metadata" => metadata_result,
        "data" => [person_1_result | [person_2_result | _]]
      } = response

      assert metadata_result == metadata

      assert person_1_result == %{
               "name" => "Walter Bazar",
               "job_title" => "Jr. Salesman",
               "email" => "fake@fake.com"
             }

      assert person_2_result == %{
               "name" => "Moka",
               "job_title" => "Senior Salesman",
               "email" => "fake2@fake.com"
             }
    end
  end

  test "GET /people with no query parameter", %{conn: conn} do
    metadata = %{
      "filtering" => %{},
      "paging" => %{
        "current_page" => 1,
        "next_page" => 2,
        "per_page" => 100,
        "prev_page" => nil
      },
      "sorting" => %{
        "sort_by" => "updated_at",
        "sort_direction" => "DESC NULLS LAST"
      }
    }

    person_1 = %{
      "display_name" => "Walter Bazar",
      "title" => "Jr. Salesman",
      "email_address" => "fake@fake.com",
      "other1" => "other1",
      "other2" => "other2",
      "other3" => "other3",
      "other4" => "other4"
    }

    person_2 = %{
      "display_name" => "Moka",
      "title" => "Senior Salesman",
      "email_address" => "fake2@fake.com",
      "other1" => "other1",
      "other2" => "other2",
      "other3" => "other3",
      "other4" => "other4"
    }

    api_response = %{
      "metadata" => metadata,
      "data" => [person_1, person_2]
    }

    with_mock SalesLoftApiClient,
      getPeople: fn _ ->
        {:ok,
         %HTTPoison.Response{
           status_code: 200,
           body: Jason.encode!(api_response)
         }}
      end do
      response =
        conn
        |> get("/people")
        |> json_response(200)

      %{
        "metadata" => metadata_result,
        "data" => [person_1_result | [person_2_result | _]]
      } = response

      assert metadata_result == metadata

      assert person_1_result == %{
               "name" => "Walter Bazar",
               "job_title" => "Jr. Salesman",
               "email" => "fake@fake.com"
             }

      assert person_2_result == %{
               "name" => "Moka",
               "job_title" => "Senior Salesman",
               "email" => "fake2@fake.com"
             }
    end
  end

  test "GET /people fails", %{conn: conn} do
    with_mock SalesLoftApiClient,
      getPeople: fn _ ->
        {:error, "Something failed"}
      end do
      response =
        conn
        |> get("/people")

      assert response.status == 400
    end
  end
end
