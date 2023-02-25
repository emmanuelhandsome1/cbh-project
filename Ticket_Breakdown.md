# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here
* 1st break down: A table of agents and facilities are connected through an intermediate table to create a many-to-many relationship.  One agent can work at multiple facilities, and one facility can have multiple agents.  To complete the ticket, create composite key on agent and facility to ensure entry/relationship between agent and facility is unique.  Acceptance criteria is to return the database table that meets the requirement as shown below.  It will take 1-2 hours to implement this. 

The updated tables will look like below. 

 1st table: TBL AGENT FACILITY SHIFT 
 |PK| Agent | Facility | Shift
 | 1 | 1 | 1 | 3 |
 | 2 | 1 | 2 | 3 |
 | 3 | 2 | 1 | 3 |
 | 4 | 2 | 2 | 3 |
 | 5 | 3 | 1 | 3 |
 | 6 | 3 | 2 | 3 |

 2nd table: TBL AGENT
 | Agent | Agent Name | 
 | 1 | John | 
 | 2 | Sarah | 
 | 3 | Mike | 

 3rd table: TBL FACILITY
 | Facility | Facility Name | 
 | 1 | A | 
 | 2 | B | 

 4th table: TBL FACILITY AGENT ID MAP 
 | PK | Facility's agent ID | TABLE 1 PK|
 | 1 | 100 | 1 | 
 | 2 | 200 | 2 |
 | 3 | 100 | 3 |
 | 4 | 400 | 4 |
 This one has foreign key to TBL agent facility 

Using the 4th table, each facility has ability to save own custom ID for agent and use that ID to generate the report. 

* 2nd breakdown: 
New function should be created that takes `Facility` and `Facility's agent ID` as inputs and returns all shifts worked that quarter for each agent.  to be able to access shift for each agent for facility by calling facility and Agent's custom ID for facility.  It will take 1-2 hours to implement this.   



