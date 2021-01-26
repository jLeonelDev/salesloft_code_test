defmodule SalesLoftApi.PeopleHelperTest do
  use SalesLoftApi.ConnCase
  alias SalesLoftApi.Helpers.PeopleHelper

  test "function process_people_response with map input" do
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

    function_input = %{
      "metadata" => metadata,
      "data" => [person_1, person_2]
    }

    %{
      "metadata" => metadata_result,
      "data" => [person_1_result | [person_2_result | _]]
    } = PeopleHelper.process_people_response(function_input)

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

  test "function process_people_response with map input but no data" do
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

    function_input = %{
      "metadata" => metadata,
      "data" => []
    }

    %{
      "metadata" => metadata_result,
      "data" => data_result
    } = PeopleHelper.process_people_response(function_input)

    assert metadata_result == metadata
    assert data_result == []
  end
end
