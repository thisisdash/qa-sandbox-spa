Feature: QA Assignment Playground

Scenario Outline: Test positive cases for registration submission
Given user clicks on New registration
  When registration form is visible
  Then user enters value '<value>' for the different fields '<fields>' if required '<isFieldMandatory>'
  And clicks on submit

  Examples:
  |value              |fields          |isFieldMandatory|
  |Debasish           |Name            |Y     |
  |Das                |Surname         |Y     |
  |xyz123@gmail.com   |Email           |Y     |
  |+316112211         |Phone           |Y     |

  Scenario Outline: Test cases with incorrect values for email address field
    Given user clicks on New registration
    When registration form is visible
    Then user enters value '<value>' for fields '<fields>'
    And clicks on submit
    Then user should see an error message

    Examples:
      |value              |fields          |
      |Debasish           |Name            |
      |Das                |Surname         |
      |abcd123            |Email           |
      |+316112211         |Phone           |

